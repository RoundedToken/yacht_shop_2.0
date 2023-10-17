import { getNameFromLang } from './../../../utils/getNameFromLang';
import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '../../../db/connectDB';
import { TLang } from '../../../models/types/TLang';
import { query } from 'mssql';
import { groupingByBrands } from '../../../utils/groupingByBrands';
import { NavNode, buildHierarchy } from '../../../utils/buildHierarchy';
import { formattingBrands } from '../../../utils/formattingBrands';

export type TNavTreeData = {
    id: number;
    parentid: number;
    name: string;
    alterName: string;
    brand: string;
    productCount: number;
}[];

export type TGroupedNavTreeData = {
    id: number;
    parentid: number;
    name: string;
    brands: string[];
    productCount: number;
}[];

export async function GET(req: NextRequest) {
    await connectDB();
    const params = req.nextUrl.searchParams;
    const lang = params.get('lang') as TLang;
    const nameFromLang = getNameFromLang(lang);

    let data = (
        await query(
            `SELECT DISTINCT
            nav.id,
            nav.parentid,
            nav.${nameFromLang} AS name,
            nav.name AS alterName,
            goods.brand,
            COUNT(goods.tovar) AS productCount
            FROM nav 
            LEFT JOIN goods ON (goods.subr = nav.id AND goods.avail<>0)
            WHERE (
                nav.id IN (SELECT DISTINCT subr FROM goods WHERE avail<>0)
                OR nav.id IN (
                    SELECT DISTINCT parentid
                    FROM nav WHERE id IN (
                        SELECT DISTINCT subr 
                        FROM goods 
                        WHERE avail<>0
                    )
                )
                OR nav.id = 0
            )
            GROUP BY nav.id, nav.parentid, nav.${nameFromLang}, nav.name, goods.brand
            ORDER BY nav.id`,
        )
    ).recordset as TNavTreeData;

    //Grouping by id and uniting together brands and productCount
    const groupedData = groupingByBrands(data);
    //Build the hierarchy
    const tree = buildHierarchy(groupedData);
    //Formatting brands and sort by name and creating src
    formattingBrands(tree);

    const flatTree: Record<string, NavNode> = {};

    (function dfs(node) {
        const { children } = node;
        flatTree[node.id] = { ...node };
        if (children) {
            for (const child of children) {
                dfs(child);
            }
        }
    })(tree[0]);

    return NextResponse.json({ tree, flatTree });
}

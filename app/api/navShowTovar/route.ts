import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '../../../db/connectDB';
import { query } from 'mssql';
import { getNameFromLang } from '../../../utils/getNameFromLang';
import { TLang } from '../../../models/types/TLang';
import { goodsFilter } from '../../../utils/goodsFilter';

export async function GET(req: NextRequest) {
    await connectDB();
    const params = req.nextUrl.searchParams;
    const id = Number(params.get('id'));
    const lang = params.get('lang') as TLang;
    const nameFromLang = getNameFromLang(lang);

    const data = (
        await query(
            `SELECT DISTINCT
            goods.tovar AS id,
            goods.subr AS parentId, 
            goods.${nameFromLang} AS name, 
            goods.marka AS code, 
            goods.brand, 
            goods.priceEU AS price, 
            goods.ostParnu AS inStockCount,
            par.featurevalue AS src,
            par.featurename,
            goods.decimal AS isDecimals 
            FROM goods LEFT JOIN par ON goods.tovar = par.tovar
            WHERE goods.tovar = ${id}
            ORDER BY par.featurename`,
        )
    ).recordset;

    const countRelatedData = (
        await query(
            `
        (SELECT COUNT(convert(int, value)) AS relatedCount FROM string_split((SELECT par.featurevalue FROM par WHERE par.tovar = ${id} AND par.featurename LIKE 'and'), ','))`,
        )
    ).recordset;

    data[0].brandLogo = `/images/logo/${data[0].brand}.png`;

    const filteredData = goodsFilter(data);
    filteredData[0].relatedCount = countRelatedData[0].relatedCount;

    return NextResponse.json(filteredData[0]);
}

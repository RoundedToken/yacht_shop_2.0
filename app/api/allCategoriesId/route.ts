import { NextResponse } from 'next/server';
import { connectDB } from '../../../db/connectDB';
import { query } from 'mssql';

export async function GET() {
    await connectDB();

    let data = (
        await query(
            `SELECT DISTINCT
            nav.id,
            goods.subr
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
            )`,
        )
    ).recordset as { id: number; subr: number | null }[];

    const categories: number[] = [];
    const productLists: number[] = [];

    data.forEach((record) => (record.subr === null ? categories.push(record.id) : productLists.push(record.id)));

    return NextResponse.json({ categories, productLists });
}

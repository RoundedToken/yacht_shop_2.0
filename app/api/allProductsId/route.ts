import { NextResponse } from 'next/server';
import { connectDB } from '../../../db/connectDB';
import { query } from 'mssql';

export async function GET() {
    await connectDB();

    let data = (
        await query(
            `SELECT DISTINCT
            goods.tovar as id
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
                ) AND goods.tovar IS NOT NULL
            )`,
        )
    ).recordset;

    return NextResponse.json(data);
}

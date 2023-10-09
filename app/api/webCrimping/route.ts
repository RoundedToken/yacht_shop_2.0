import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '../../../db/connectDB';
import { query, Request, Decimal, VarChar } from 'mssql';
import { getNameFromLang } from '../../../utils/getNameFromLang';
import { TLang } from '../../../models/types/TLang';

export async function GET(req: NextRequest) {
    await connectDB();
    const params = req.nextUrl.searchParams;
    const lang = params.get('lang') as TLang;
    const nameFromLang = getNameFromLang(lang);
    const diameter = params.get('diameter');
    const end1 = params.get('end1');
    const end2 = params.get('end2');
    const length = params.get('length');

    const request = new Request();
    request.input('thick', Decimal, diameter);
    request.input('end1', VarChar, end1);
    request.input('end2', VarChar, end2);
    request.input('Lenght', VarChar, length);

    const dataP = (await request.execute('[dbo].[web_swage_calc_new]')).recordset;
    const idList = dataP.map((v) => v.tovar).join(',');

    const data = (
        await query(`
        SELECT
        ${nameFromLang} AS name,
        brand,
        marka AS code,
        priceEU AS price,
        decimal AS isDecimals
        FROM goods
        WHERE tovar IN (${idList})
        `)
    ).recordset;

    return NextResponse.json(
        dataP.map((v, i) => {
            return { id: v.tovar, count: v.qty, ...data[i] };
        }),
    );
}

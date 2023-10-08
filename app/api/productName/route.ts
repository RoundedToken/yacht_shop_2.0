import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '../../../db/connectDB';
import { query } from 'mssql';
import { getNameFromLang } from '../../../utils/getNameFromLang';
import { TLang } from '../../../models/types/TLang';

export async function GET(req: NextRequest) {
    await connectDB();
    const params = req.nextUrl.searchParams;
    const id = params.get('id');
    const lang = params.get('lang') as TLang;
    const nameFromLang = getNameFromLang(lang);

    const data = (
        await query(`
            SELECT
            ${nameFromLang} as name
            FROM goods
            WHERE tovar = ${id}
    `)
    ).recordset[0];

    return NextResponse.json(data);
}

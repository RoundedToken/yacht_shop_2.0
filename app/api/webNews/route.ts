import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '../../../db/connectDB';
import { query } from 'mssql';
import { TLang } from '../../../models/types/TLang';

export async function GET(req: NextRequest) {
    await connectDB();
    const params = req.nextUrl.searchParams;
    const lang = params.get('lang') as TLang;
    const head = lang === 'rus' ? 'HeadRUS' : lang === 'eng' ? 'HeadENG' : 'HeadEST';
    const text = lang === 'rus' ? 'TextRUS' : lang === 'eng' ? 'TextENG' : 'TextEST';

    const data = (
        await query(`SELECT
        newsid as id,
        ${head} as title,
        ${text} as content,
        Date as date
        FROM news
        ORDER BY Date DESC
        `)
    ).recordset;

    return NextResponse.json(data);
}

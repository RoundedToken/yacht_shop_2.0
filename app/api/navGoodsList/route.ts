import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '../../../db/connectDB';
import { query } from 'mssql';
import { getNameFromLang } from '../../../utils/getNameFromLang';
import { TLang } from '../../../models/types/TLang';
import { goodsFilter } from '../../../utils/goodsFilter';

export async function GET(req: NextRequest) {
    await connectDB();
    const params = req.nextUrl.searchParams;
    const id = params.get('id');
    const lang = params.get('lang') as TLang;
    const nameFromLang = getNameFromLang(lang);

    const data = (
        await query(
            `SELECT DISTINCT
            par.featurename,
            goods.tovar AS id,
            goods.${nameFromLang} AS name,
            goods.brand,
            goods.marka AS code,
            goods.priceEU AS price,
            goods.OstPARNU AS inStockCount,
            par.featurevalue AS src,
            goods.decimal AS isDecimals
            FROM goods LEFT JOIN par ON goods.tovar = par.tovar
            WHERE goods.subr=${id} AND goods.avail<>0 
            ORDER BY par.featurename`,
        )
    ).recordset;

    const filteredData = goodsFilter(data);

    return NextResponse.json(filteredData);
}

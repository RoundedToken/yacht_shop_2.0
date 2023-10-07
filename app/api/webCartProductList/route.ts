import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '../../../db/connectDB';
import { query } from 'mssql';
import { getNameFromLang } from '../../../utils/getNameFromLang';
import { TLang } from '../../../models/types/TLang';
import { TWebCartProductListData, goodsFilter } from '../../../utils/goodsFilter';

export async function GET(req: NextRequest) {
    await connectDB();
    const params = req.nextUrl.searchParams;
    const idList = params.get('idList');
    const lang = params.get('lang') as TLang;
    const nameFromLang = getNameFromLang(lang);

    const data = (
        await query(
            `SELECT DISTINCT
        goods.tovar as id,
        goods.${nameFromLang} as name, 
        goods.brand, 
        goods.marka as code, 
        goods.priceEU as price, 
        goods.ostPARNU as inStockCount, 
        par.featurevalue AS src,
        par.featurename,
        goods.decimal AS isDecimals
        FROM goods LEFT JOIN par ON goods.tovar = par.tovar
        WHERE goods.tovar in (${idList}) 
        ORDER BY par.featurename`,
        )
    ).recordset as TWebCartProductListData[];

    const filteredData = goodsFilter(data);

    return NextResponse.json(filteredData);
}

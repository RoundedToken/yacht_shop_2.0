import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '../../../db/connectDB';
import { query } from 'mssql';
import { getNameFromLang } from '../../../utils/getNameFromLang';
import { TLang } from '../../../models/types/TLang';
import { goodsFilter } from '../../../utils/goodsFilter';

export async function GET(req: NextRequest) {
    await connectDB();
    const params = req.nextUrl.searchParams;
    const lang = params.get('lang') as TLang;
    const searchStr = params.get('searchStr');
    const nameFromLang = getNameFromLang(lang);

    const conditionArr = searchStr?.split(' ') || [];

    const condition = conditionArr?.map((str) => `goods.${nameFromLang} LIKE '%${str}%'`).join(' AND ');

    const codeCondition = `REPLACE (goods.marka, ' ', '') LIKE '%${conditionArr[0]}%'`;

    const data = (
        await query(`
        SELECT 
        par.featurename,
        goods.tovar AS id,
        goods.marka AS code,
        goods.priceEU AS price,
        goods.OstPARNU AS rest,
        goods.brand,
        goods.${nameFromLang} AS name,
        par.featurevalue AS src,
        goods.decimal AS isDecimals
        FROM goods LEFT JOIN par ON goods.tovar = par.tovar
        WHERE goods.subr IS NOT NULL
        AND goods.avail<>0
        AND (${condition} OR ${codeCondition})
        ORDER BY par.featurename`)
    ).recordset;

    //Collect the first records by id
    //Delete featurename
    //Create inStock
    //Check src for URL otherwise create URL
    const filteredData = goodsFilter(data);

    return NextResponse.json(filteredData);
}

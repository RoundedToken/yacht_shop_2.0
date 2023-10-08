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
        await query(`
    SELECT DISTINCT
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
    WHERE goods.tovar IN 
    (SELECT convert(int, value) FROM string_split((SELECT par.featurevalue FROM par WHERE par.tovar = ${id} AND par.featurename LIKE 'and'), ','))
    AND par.featurename LIKE 'pic' AND goods.avail<>0
    `)
    ).recordset;

    const filteredData = goodsFilter(data);

    return NextResponse.json(filteredData);
}

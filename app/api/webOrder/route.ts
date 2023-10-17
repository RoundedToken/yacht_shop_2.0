import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '../../../db/connectDB';
import { Int, Request, VarChar, query } from 'mssql';
import { getNameFromLang } from '../../../utils/getNameFromLang';
import { TLang } from '../../../models/types/TLang';

export async function POST(req: NextRequest) {
    await connectDB();
    const params = req.nextUrl.searchParams;
    const {
        name,
        email,
        comments,
        delivery,
        productList,
    }: {
        name: string;
        email: string;
        comments: 'string';
        delivery: string;
        productList: { id: number; count: number }[];
    } = await req.json();
    const lang = params.get('lang') as TLang;

    const nameFromLang = getNameFromLang(lang);
    const goodsStr = productList.map((product) => product.id).join(',');
    const qtyStr = productList.map((product) => product.count).join(',');
    const deliveryType = delivery === 'pickUp' ? 1 : 2;

    const request = new Request();

    request.input('name', VarChar, name);
    request.input('email', VarChar, email);
    request.input('comments', VarChar, comments);
    request.input('delivery', Int, deliveryType);
    request.input('GoodsStr', VarChar, goodsStr);
    request.input('QtyStr', VarChar, qtyStr);

    const orderId = (await request.execute('[dbo].[web_make_order_new]')).recordset[0][''];

    const data = (
        await query(`
        SELECT
        ordStr.tovar AS id,
        goods.${nameFromLang} AS name,
        goods.brand,
        goods.marka AS code,
        ordStr.price,
        ordStr.qty AS count,
        goods.decimal AS isDecimals
        FROM ordStr INNER JOIN goods ON ordStr.tovar = goods.tovar
        WHERE ordStr.orderID = ${orderId}
        `)
    ).recordset;

    return NextResponse.json({ orderId, orderList: data });
}

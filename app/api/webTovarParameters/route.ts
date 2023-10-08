import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '../../../db/connectDB';
import { Int, Request } from 'mssql';

export async function GET(req: NextRequest) {
    await connectDB();
    const params = req.nextUrl.searchParams;
    const id = params.get('id');
    const request = new Request();

    request.input('tovar', Int, id);

    const data = (await request.execute('[dbo].[web_tovar_parameters_new]')).recordset;

    const res = data.map((record) => [record['n'], record[''][0]]);

    return NextResponse.json(res);
}

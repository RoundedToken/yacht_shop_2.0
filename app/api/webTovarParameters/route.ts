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

    let description;
    const props = data
        .map((record) => [record['n'], record[''][0]])
        .filter((v) => {
            const par = v[0].toLowerCase();
            if (par === 'описание' || par.trim() === '') {
                description = v[1];
                return false;
            }

            return true;
        });

    return NextResponse.json({ description, props });
}

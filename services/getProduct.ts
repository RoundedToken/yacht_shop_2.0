import { notFound } from 'next/navigation';
import { INavProductReq, INavProductRes } from '../models/interfaces/RTKQuery/INavProduct';

export const getProduct = async ({ id, lang }: INavProductReq) => {
    try {
        const res = await fetch(`${process.env.API_URL}/navShowTovar?id=${id}&lang=${lang}`);
        const data: INavProductRes = await res.json();

        return data;
    } catch (error) {
        console.log(error);

        notFound();
    }
};

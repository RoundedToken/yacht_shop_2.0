import { notFound } from 'next/navigation';
import { TLang } from '../models/types/TLang';

export const getProductName = async ({ lang, id }: { lang: TLang; id: number }) => {
    try {
        const res = await fetch(`${process.env.API_URL}/productName?id=${id}&lang=${lang}`);
        const data: { name: string } = await res.json();

        return data.name;
    } catch (error) {
        console.log(error);

        notFound();
    }
};

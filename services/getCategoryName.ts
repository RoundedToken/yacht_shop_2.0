import { notFound } from 'next/navigation';
import { TLang } from '../models/types/TLang';

export const getCategoryName = async ({ lang, id }: { lang: TLang; id: number }) => {
    try {
        const res = await fetch(`http://localhost:3000/api/categoryName?id=${id}&lang=${lang}`);
        const data: { name: string } = await res.json();

        return data.name;
    } catch (error) {
        notFound();
    }
};

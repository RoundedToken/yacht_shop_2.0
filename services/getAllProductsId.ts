import { notFound } from 'next/navigation';

export const getAllProductsId = async () => {
    try {
        const res = await fetch(`${process.env.API_URL}/allProductsId`);
        const data: { id: number }[] = await res.json();

        return data;
    } catch (error) {
        console.log(error);

        notFound();
    }
};

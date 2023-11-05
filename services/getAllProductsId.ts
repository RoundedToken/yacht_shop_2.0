import { notFound } from 'next/navigation';

export const getAllProductsId = async () => {
    try {
        const res = await fetch(`${process.env.API_URL}/allProductsId`);
        const data: { id: number }[] = await res.json();
        console.log(data);

        return data;
    } catch (error) {
        console.log(error);

        notFound();
    }
};

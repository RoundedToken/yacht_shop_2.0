import { notFound } from 'next/navigation';

export const getProductInfo = async ({ id }: { id: number }) => {
    try {
        const res = await fetch(`${process.env.API_URL}/webTovarParameters?id=${id}`);
        const data: { description?: string; props: string[][] } = await res.json();

        return data;
    } catch (error) {
        console.log(error);

        notFound();
    }
};

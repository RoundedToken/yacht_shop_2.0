import { notFound } from 'next/navigation';

export const getAllCategoriesId = async () => {
    try {
        const res = await fetch(`${process.env.API_URL}/allCategoriesId`);
        const data: { categories: number[]; productLists: number[] } = await res.json();

        return data;
    } catch (error) {
        console.log(error);

        notFound();
    }
};

import { Metadata } from 'next';
import { getCurrentLocale } from '../../../../locales/server';
import { getCategoryName } from '../../../../services/getCategoryName';
import Category from '../../../../modules/Category/Category';

interface Props {
    params: {
        id: number;
    };
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
    const lang = getCurrentLocale();
    const categoryName = await getCategoryName({ id, lang });

    return {
        title: categoryName ?? 'Catalog',
    };
}

export default async function CategoryPage() {
    return (
        <>
            <Category />
        </>
    );
}

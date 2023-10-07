import { Metadata } from 'next';
import { getCurrentLocale } from '../../../../locales/server';
import { getCategoryName } from '../../../../services/getCategoryName';
import ProductList from '../../../../modules/ProductList/ProductList';

interface Props {
    params: {
        id: number;
    };
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
    const lang = getCurrentLocale();
    const categoryName = await getCategoryName({ id, lang });

    return {
        title: categoryName ?? 'Product List',
    };
}

export default function ProductListPage() {
    return <ProductList />;
}

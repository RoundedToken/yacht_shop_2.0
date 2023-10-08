import { Metadata } from 'next';
import { getCurrentLocale } from '../../../../locales/server';
import Product from '../../../../modules/Product/Product';
import { getProductName } from '../../../../services/getProductName';

interface Props {
    params: {
        id: number;
    };
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
    const lang = getCurrentLocale();
    const categoryName = await getProductName({ id, lang });

    return {
        title: categoryName ?? 'Product',
    };
}

export default function ProductPage() {
    return <Product />;
}

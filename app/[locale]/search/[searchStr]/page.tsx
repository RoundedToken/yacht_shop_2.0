import { Metadata } from 'next';
import { getI18n } from '../../../../locales/server';
import ProductList from '../../../../modules/ProductList/ProductList';

interface Props {
    params: {
        searchStr: string;
    };
}

export async function generateMetadata({ params: { searchStr } }: Props): Promise<Metadata> {
    const t = await getI18n();

    return {
        title: `${t('search')}: ${decodeURI(searchStr)}`,
    };
}

export default function SearchPage() {
    return <ProductList />;
}

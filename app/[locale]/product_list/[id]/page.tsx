import { Metadata } from 'next';
import { getCurrentLocale, getI18n, getStaticParams } from '../../../../locales/server';
import { getCategoryName } from '../../../../services/getCategoryName';
import ProductList from '../../../../modules/ProductList/ProductList';
import SideBarWrapper from '../../../../modules/SideBarWrapper/SideBarWrapper';
import Footer from '../../../../modules/Footer/Footer';
import Header from '../../../../modules/Header/Header';
import SearchBar from '../../../../modules/SearchBar/SearchBar';
import { routeConstants } from '../../../../models/enums/EConstants';
import { setStaticParamsLocale } from 'next-international/server';
import { getAlternates } from '../../../../locales/getAlternates';

interface Props {
    params: {
        id: number;
        locale: string;
    };
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
    const lang = getCurrentLocale();
    const categoryName = await getCategoryName({ id, lang });
    const t = await getI18n();

    return {
        title: categoryName ?? 'Product List',
        alternates: getAlternates(`${routeConstants.PRODUCT_LIST_ROUTE}/${id}`),
        openGraph: {
            url: process.env.URL,
            title: categoryName ?? 'Product List',
            type: 'website',
            siteName: 'YachtShop',
            description: t('og_description_1'),
        },
    };
}

export function generateStaticParams() {
    return getStaticParams();
}

export default async function ProductListPage({ params: { locale } }: Props) {
    setStaticParamsLocale(locale);
    const t = await getI18n();
    const location = routeConstants.PRODUCT_LIST_ROUTE;

    return (
        <>
            <Header t={t} location={location} />

            <SearchBar t={t} location={location} />

            <SideBarWrapper t={t}>
                <ProductList />
            </SideBarWrapper>

            <Footer t={t} />
        </>
    );
}

import { Metadata } from 'next';
import { getI18n } from '../../../../locales/server';
import { getCategoryName } from '../../../../services/getCategoryName';
import ProductList from '../../../../modules/ProductList/ProductList';
import SideBarWrapper from '../../../../modules/SideBarWrapper/SideBarWrapper';
import Footer from '../../../../modules/Footer/Footer';
import Header from '../../../../modules/Header/Header';
import SearchBar from '../../../../modules/SearchBar/SearchBar';
import { routeConstants } from '../../../../models/enums/EConstants';
import { getAlternates } from '../../../../locales/getAlternates';
import { TLang } from '../../../../models/types/TLang';

interface Props {
    params: {
        id: number;
        locale: TLang;
    };
}

export async function generateMetadata({ params: { id, locale } }: Props): Promise<Metadata> {
    const categoryName = await getCategoryName({ id, lang: locale });
    const t = await getI18n();

    return {
        title: categoryName ?? 'Product List',
        alternates: getAlternates(`${routeConstants.PRODUCT_LIST_ROUTE}/${id}`),
        openGraph: {
            url: `${locale}/${routeConstants.PRODUCT_LIST_ROUTE}/${id}`,
            title: categoryName ?? 'Product List',
            type: 'website',
            siteName: 'YachtShop',
            description: t('og_description_1'),
        },
    };
}

export default async function ProductListPage() {
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

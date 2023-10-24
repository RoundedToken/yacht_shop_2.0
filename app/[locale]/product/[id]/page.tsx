import { Metadata } from 'next';
import { getI18n, getStaticParams } from '../../../../locales/server';
import Product from '../../../../modules/Product/Product';
import { getProductName } from '../../../../services/getProductName';
import SideBarWrapper from '../../../../modules/SideBarWrapper/SideBarWrapper';
import Footer from '../../../../modules/Footer/Footer';
import { routeConstants } from '../../../../models/enums/EConstants';
import Header from '../../../../modules/Header/Header';
import SearchBar from '../../../../modules/SearchBar/SearchBar';
import { setStaticParamsLocale } from 'next-international/server';
import { getAlternates } from '../../../../locales/getAlternates';
import { getProductInfo } from '../../../../services/getProductInfo';
import { TLang } from '../../../../models/types/TLang';

interface Props {
    params: {
        id: number;
        locale: TLang;
    };
}

export async function generateMetadata({ params: { id, locale } }: Props): Promise<Metadata> {
    const productName = await getProductName({ id, lang: locale });
    const { description } = await getProductInfo({ id });
    const t = await getI18n();

    return {
        title: productName ?? 'Product',
        alternates: getAlternates(`${routeConstants.PRODUCT_ROUTE}/${id}`),
        description: description ?? t('site_description_1'),
        openGraph: {
            url: `${locale}/${routeConstants.PRODUCT_ROUTE}/${id}`,
            title: productName ?? 'Product',
            type: 'website',
            siteName: 'YachtShop',
            description: description ?? t('og_description_1'),
        },
    };
}

export function generateStaticParams() {
    return getStaticParams();
}

export default async function ProductPage({ params: { locale } }: Props) {
    setStaticParamsLocale(locale);
    const t = await getI18n();
    const location = routeConstants.PRODUCT_ROUTE;
    const title = t('product_description');

    return (
        <>
            <Header t={t} location={location} />

            <SearchBar t={t} location={location} />

            <SideBarWrapper t={t} offSideBar>
                <Product title={title} />
            </SideBarWrapper>

            <Footer t={t} />
        </>
    );
}

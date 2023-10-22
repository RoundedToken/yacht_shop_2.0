import { Metadata } from 'next';
import { getCurrentLocale, getI18n, getStaticParams } from '../../../../locales/server';
import Product from '../../../../modules/Product/Product';
import { getProductName } from '../../../../services/getProductName';
import SideBarWrapper from '../../../../modules/SideBarWrapper/SideBarWrapper';
import Footer from '../../../../modules/Footer/Footer';
import { routeConstants } from '../../../../models/enums/EConstants';
import Header from '../../../../modules/Header/Header';
import SearchBar from '../../../../modules/SearchBar/SearchBar';
import { setStaticParamsLocale } from 'next-international/server';

interface Props {
    params: {
        id: number;
        locale: string;
    };
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
    const lang = getCurrentLocale();
    const productName = await getProductName({ id, lang });
    const t = await getI18n();

    return {
        title: productName ?? 'Product',
        openGraph: {
            url: process.env.URL,
            title: productName ?? 'Product',
            type: 'website',
            siteName: 'Parnu Yacht Shop',
            description: t('og_description_1'),
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

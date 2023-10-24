import { Metadata } from 'next';
import { getI18n, getStaticParams } from '../../../locales/server';
import { setStaticParamsLocale } from 'next-international/server';
import { routeConstants } from '../../../models/enums/EConstants';
import Header from '../../../modules/Header/Header';
import SearchBar from '../../../modules/SearchBar/SearchBar';
import SideBarWrapper from '../../../modules/SideBarWrapper/SideBarWrapper';
import Footer from '../../../modules/Footer/Footer';
import Cart from '../../../modules/Cart/Cart';
import { getAlternates } from '../../../locales/getAlternates';
import { TLang } from '../../../models/types/TLang';

type Props = {
    params: { locale: TLang };
};

export async function generateMetadata(): Promise<Metadata> {
    const t = await getI18n();

    return {
        title: `${t('cart')}`,
        alternates: getAlternates(routeConstants.CART_ROUTE),
    };
}

export function generateStaticParams() {
    return getStaticParams();
}

export default async function CartPage({ params: { locale } }: Props) {
    setStaticParamsLocale(locale);
    const location = routeConstants.CART_ROUTE;
    const t = await getI18n();

    return (
        <>
            <Header t={t} location={location} />

            <SearchBar t={t} location={location} />

            <SideBarWrapper t={t} offListMode>
                <Cart />
            </SideBarWrapper>

            <Footer t={t} />
        </>
    );
}

import { Metadata } from 'next';
import { getI18n, getStaticParams } from '../../../../locales/server';
import ProductList from '../../../../modules/ProductList/ProductList';
import SideBarWrapper from '../../../../modules/SideBarWrapper/SideBarWrapper';
import Footer from '../../../../modules/Footer/Footer';
import { routeConstants } from '../../../../models/enums/EConstants';
import Header from '../../../../modules/Header/Header';
import SearchBar from '../../../../modules/SearchBar/SearchBar';
import { setStaticParamsLocale } from 'next-international/server';
import { getAlternates } from '../../../../locales/getAlternates';
import { TLang } from '../../../../models/types/TLang';

interface Props {
    params: {
        searchStr: string;
        locale: TLang;
    };
}

export async function generateMetadata({ params: { searchStr } }: Props): Promise<Metadata> {
    const t = await getI18n();

    return {
        title: `${t('search')}: ${decodeURI(searchStr)}`,
        alternates: getAlternates(`${routeConstants.SEARCH_ROUTE}/${searchStr}`),
    };
}

export function generateStaticParams() {
    return getStaticParams();
}

export default async function SearchPage({ params: { searchStr, locale } }: Props) {
    setStaticParamsLocale(locale);
    const t = await getI18n();
    const location = routeConstants.SEARCH_ROUTE;

    return (
        <>
            <Header t={t} location={location} searchStr={searchStr} />

            <SearchBar t={t} location={location} searchStr={searchStr} />

            <SideBarWrapper t={t}>
                <ProductList />
            </SideBarWrapper>

            <Footer t={t} />
        </>
    );
}

import { setStaticParamsLocale } from 'next-international/server';
import { getAlternates } from '../../../locales/getAlternates';
import { getI18n, getStaticParams } from '../../../locales/server';
import { routeConstants } from '../../../models/enums/EConstants';
import { TLang } from '../../../models/types/TLang';
import Header from '../../../modules/Header/Header';
import SearchBar from '../../../modules/SearchBar/SearchBar';
import SideBarWrapper from '../../../modules/SideBarWrapper/SideBarWrapper';
import ProductList from '../../../modules/ProductList/ProductList';
import Footer from '../../../modules/Footer/Footer';
import { Metadata } from 'next';
interface Props {
    params: {
        locale: TLang;
    };
    searchParams?: {
        q: string;
    };
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const q = searchParams?.q?.trim() ?? '';
    const t = await getI18n();

    return {
        title: `${t('search')}: ${decodeURI(q)}`,
        alternates: getAlternates(`${routeConstants.SEARCH_ROUTE}?q=${q}`),
    };
}

export function generateStaticParams() {
    return getStaticParams();
}

export default async function SearchPage({ params: { locale }, searchParams }: Props) {
    setStaticParamsLocale(locale);
    const t = await getI18n();
    const q = searchParams?.q?.trim();
    const location = routeConstants.SEARCH_ROUTE;

    return (
        <>
            <Header t={t} location={location} searchStr={q} />

            <SearchBar t={t} location={location} searchStr={q} />

            <SideBarWrapper t={t}>{<ProductList searchStr={q} />}</SideBarWrapper>

            <Footer t={t} />
        </>
    );
}

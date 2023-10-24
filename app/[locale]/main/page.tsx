import { setStaticParamsLocale } from 'next-international/server';
import { getI18n, getStaticParams } from '../../../locales/server';
import Main from '../../../modules/Main/Main';
import SideBarWrapper from '../../../modules/SideBarWrapper/SideBarWrapper';
import Footer from '../../../modules/Footer/Footer';
import { routeConstants } from '../../../models/enums/EConstants';
import Header from '../../../modules/Header/Header';
import SearchBar from '../../../modules/SearchBar/SearchBar';
import { Metadata } from 'next';
import { getAlternates } from '../../../locales/getAlternates';
import { TLang } from '../../../models/types/TLang';

type Props = {
    params: { locale: TLang };
};

export async function generateMetadata(): Promise<Metadata> {
    const t = await getI18n();

    return {
        title: t('main_page'),
        alternates: getAlternates(routeConstants.MAIN_ROUTE),
    };
}

export function generateStaticParams() {
    return getStaticParams();
}

export default async function MainPage({ params: { locale } }: Props) {
    setStaticParamsLocale(locale);
    const t = await getI18n();
    const location = routeConstants.MAIN_ROUTE;

    return (
        <>
            <Header t={t} location={location} />

            <SearchBar t={t} location={location} />

            <SideBarWrapper t={t} offSideBar>
                <Main />
            </SideBarWrapper>

            <Footer t={t} />
        </>
    );
}

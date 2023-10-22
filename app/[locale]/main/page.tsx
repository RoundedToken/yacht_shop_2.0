import { setStaticParamsLocale } from 'next-international/server';
import { getCurrentLocale, getI18n, getStaticParams } from '../../../locales/server';
import Main from '../../../modules/Main/Main';
import SideBarWrapper from '../../../modules/SideBarWrapper/SideBarWrapper';
import Footer from '../../../modules/Footer/Footer';
import { routeConstants } from '../../../models/enums/EConstants';
import Header from '../../../modules/Header/Header';
import SearchBar from '../../../modules/SearchBar/SearchBar';

type Props = {
    params: { locale: string };
};

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

import { Metadata } from 'next';
import { getI18n, getStaticParams } from '../../../locales/server';
import Crimping from '../../../modules/Crimping/Crimping';
import { setStaticParamsLocale } from 'next-international/server';
import SideBarWrapper from '../../../modules/SideBarWrapper/SideBarWrapper';
import Footer from '../../../modules/Footer/Footer';
import Header from '../../../modules/Header/Header';
import SearchBar from '../../../modules/SearchBar/SearchBar';
import { routeConstants } from '../../../models/enums/EConstants';

type Props = {
    params: { locale: string };
};

export async function generateMetadata(): Promise<Metadata> {
    const t = await getI18n();

    return {
        title: `${t('rope_crimping')}`,
    };
}

export function generateStaticParams() {
    return getStaticParams();
}

export default async function RopeCrimpingPage({ params: { locale } }: Props) {
    setStaticParamsLocale(locale);
    const t = await getI18n();
    const location = routeConstants.CRIMPING_ROUTE;

    return (
        <>
            <Header t={t} location={location} />

            <SearchBar t={t} location={location} />

            <SideBarWrapper t={t} offSideBar>
                <Crimping t={t} />
            </SideBarWrapper>

            <Footer t={t} />
        </>
    );
}

import { Metadata } from 'next';
import { getI18n, getStaticParams } from '../../../locales/server';
import Crimping from '../../../modules/Crimping/Crimping';
import { setStaticParamsLocale } from 'next-international/server';
import SideBarWrapper from '../../../modules/SideBarWrapper/SideBarWrapper';
import Footer from '../../../modules/Footer/Footer';
import Header from '../../../modules/Header/Header';
import SearchBar from '../../../modules/SearchBar/SearchBar';
import { routeConstants } from '../../../models/enums/EConstants';
import { getAlternates } from '../../../locales/getAlternates';
import { TLang } from '../../../models/types/TLang';

type Props = {
    params: { locale: TLang };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
    const t = await getI18n();

    return {
        title: `${t('rope_crimping')}`,
        description: t('crimping_description'),
        alternates: getAlternates(routeConstants.CRIMPING_ROUTE),
        openGraph: {
            url: `${locale}/${routeConstants.CRIMPING_ROUTE}`,
            title: t('rope_crimping'),
            type: 'website',
            siteName: 'YachtShop',
            description: t('crimping_description'),
        },
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

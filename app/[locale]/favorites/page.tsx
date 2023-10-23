import { Metadata } from 'next';
import { getI18n, getStaticParams } from '../../../locales/server';
import Favorites from '../../../modules/Favorites/Favorites';
import { setStaticParamsLocale } from 'next-international/server';
import SideBarWrapper from '../../../modules/SideBarWrapper/SideBarWrapper';
import Footer from '../../../modules/Footer/Footer';
import { routeConstants } from '../../../models/enums/EConstants';
import Header from '../../../modules/Header/Header';
import SearchBar from '../../../modules/SearchBar/SearchBar';
import { getAlternates } from '../../../locales/getAlternates';

type Props = {
    params: { locale: string };
};

export async function generateMetadata(): Promise<Metadata> {
    const t = await getI18n();

    return {
        title: `${t('favorites')}`,
        alternates: getAlternates(routeConstants.FAVORITES_ROUTE),
    };
}

export function generateStaticParams() {
    return getStaticParams();
}

export default async function FavoritesPage({ params: { locale } }: Props) {
    setStaticParamsLocale(locale);
    const t = await getI18n();
    const location = routeConstants.FAVORITES_ROUTE;

    return (
        <>
            <Header t={t} location={location} />

            <SearchBar t={t} location={location} />

            <SideBarWrapper t={t} offListMode>
                <Favorites t={t} />
            </SideBarWrapper>

            <Footer t={t} />
        </>
    );
}

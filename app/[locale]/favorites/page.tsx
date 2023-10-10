import { Metadata } from 'next';
import { getI18n, getStaticParams } from '../../../locales/server';
import Favorites from '../../../modules/Favorites/Favorites';
import { setStaticParamsLocale } from 'next-international/server';
import SideBarWrapper from '../../../modules/SideBarWrapper/SideBarWrapper';
import Footer from '../../../modules/Footer/Footer';

type Props = {
    params: { locale: string };
};

export async function generateMetadata(): Promise<Metadata> {
    const t = await getI18n();

    return {
        title: `${t('favorites')}`,
    };
}

export function generateStaticParams() {
    return getStaticParams();
}

export default async function FavoritesPage({ params: { locale } }: Props) {
    setStaticParamsLocale(locale);
    const t = await getI18n();

    return (
        <>
            <SideBarWrapper offListMode>
                <Favorites t={t} />
            </SideBarWrapper>

            <Footer t={t} />
        </>
    );
}

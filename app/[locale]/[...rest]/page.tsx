import { Metadata } from 'next';
import ToCatalogButton from '../../../UI/ToCatalogButton/ToCatalogButton';
import { getI18n, getStaticParams } from '../../../locales/server';
import Footer from '../../../modules/Footer/Footer';
import SideBarWrapper from '../../../modules/SideBarWrapper/SideBarWrapper';
import { setStaticParamsLocale } from 'next-international/server';
import Header from '../../../modules/Header/Header';
import SearchBar from '../../../modules/SearchBar/SearchBar';
import { routeConstants } from '../../../models/enums/EConstants';
import styles from './index.module.scss';
import { getAlternates } from '../../../locales/getAlternates';

type Props = {
    params: { locale: string };
};

export async function generateMetadata(): Promise<Metadata> {
    const t = await getI18n();

    return {
        title: `${t('not_found')}`,
        alternates: getAlternates(routeConstants.NOT_FOUND),
    };
}

export function generateStaticParams() {
    return getStaticParams();
}

export default async function CatchAllPage({ params: { locale } }: Props) {
    setStaticParamsLocale(locale);
    const t = await getI18n();
    const location = routeConstants.NOT_FOUND;

    return (
        <>
            <Header t={t} location={location} />

            <SearchBar t={t} location={location} />

            <SideBarWrapper t={t} offSideBar>
                <div className={styles.container}>
                    <h1>{t('page_not_found')}</h1>

                    <ToCatalogButton t={t} />
                </div>
            </SideBarWrapper>

            <Footer t={t} />
        </>
    );
}

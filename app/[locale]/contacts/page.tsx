import { Metadata } from 'next';
import { getI18n, getStaticParams } from '../../../locales/server';
import Contacts from '../../../modules/Contacts/Contacts';
import { setStaticParamsLocale } from 'next-international/server';
import SideBarWrapper from '../../../modules/SideBarWrapper/SideBarWrapper';
import Footer from '../../../modules/Footer/Footer';
import SearchBar from '../../../modules/SearchBar/SearchBar';
import Header from '../../../modules/Header/Header';
import { routeConstants } from '../../../models/enums/EConstants';
import { getAlternates } from '../../../locales/getAlternates';

type Props = {
    params: { locale: string };
};

export async function generateMetadata(): Promise<Metadata> {
    const t = await getI18n();

    return {
        title: `${t('contacts')}`,
        alternates: getAlternates(routeConstants.CONTACTS_ROUTE),
        description: t('contacts_description'),
        openGraph: {
            url: routeConstants.CONTACTS_ROUTE,
            title: t('contacts'),
            type: 'website',
            siteName: 'YachtShop',
            description: t('contacts_description'),
        },
    };
}

export function generateStaticParams() {
    return getStaticParams();
}

export default async function ContactsPage({ params: { locale } }: Props) {
    setStaticParamsLocale(locale);
    const location = routeConstants.CONTACTS_ROUTE;
    const t = await getI18n();

    return (
        <>
            <Header t={t} location={location} />

            <SearchBar t={t} location={location} />

            <SideBarWrapper t={t} offSideBar>
                <Contacts t={t} />;
            </SideBarWrapper>

            <Footer t={t} isEmpty />
        </>
    );
}

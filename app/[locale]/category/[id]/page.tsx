import { Metadata } from 'next';
import { getCurrentLocale, getI18n } from '../../../../locales/server';
import { getCategoryName } from '../../../../services/getCategoryName';
import Category from '../../../../modules/Category/Category';
import Header from '../../../../modules/Header/Header';
import { routeConstants } from '../../../../models/enums/EConstants';
import SearchBar from '../../../../modules/SearchBar/SearchBar';
import SideBarWrapper from '../../../../modules/SideBarWrapper/SideBarWrapper';
import Footer from '../../../../modules/Footer/Footer';
import { getAlternates } from '../../../../locales/getAlternates';
import { TLang } from '../../../../models/types/TLang';

interface Props {
    params: {
        id: number;
        locale: TLang;
    };
}

export async function generateMetadata({ params: { id, locale } }: Props): Promise<Metadata> {
    const lang = getCurrentLocale();
    const categoryName = await getCategoryName({ id, lang });
    const t = await getI18n();

    return {
        title: categoryName ?? 'Catalog',
        alternates: getAlternates(`${routeConstants.CATEGORIES_ROUTE}/${id}`),
        openGraph: {
            url: `${locale}/${routeConstants.CATEGORIES_ROUTE}/${id}`,
            title: categoryName ?? 'Catalog',
            type: 'website',
            siteName: 'YachtShop',
            description: t('og_description_1'),
        },
    };
}

export default async function CategoryPage() {
    const t = await getI18n();
    const location = routeConstants.CATEGORIES_ROUTE;

    return (
        <>
            <Header t={t} location={location} />

            <SearchBar t={t} location={location} />

            <SideBarWrapper t={t} offFilter offListMode>
                <Category />
            </SideBarWrapper>

            <Footer t={t} />
        </>
    );
}

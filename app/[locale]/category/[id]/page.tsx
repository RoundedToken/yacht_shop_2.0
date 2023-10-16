import { Metadata } from 'next';
import { getCurrentLocale, getI18n, getStaticParams } from '../../../../locales/server';
import { getCategoryName } from '../../../../services/getCategoryName';
import Category from '../../../../modules/Category/Category';
import Header from '../../../../modules/Header/Header';
import { routeConstants } from '../../../../models/enums/EConstants';
import SearchBar from '../../../../modules/SearchBar/SearchBar';
import SideBarWrapper from '../../../../modules/SideBarWrapper/SideBarWrapper';
import Footer from '../../../../modules/Footer/Footer';
import { setStaticParamsLocale } from 'next-international/server';

interface Props {
    params: {
        id: number;
        locale: string;
    };
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
    const lang = getCurrentLocale();
    const categoryName = await getCategoryName({ id, lang });

    return {
        title: categoryName ?? 'Catalog',
    };
}

export function generateStaticParams() {
    return getStaticParams();
}

export default async function CategoryPage({ params: { locale } }: Props) {
    setStaticParamsLocale(locale);
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

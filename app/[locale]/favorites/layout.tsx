import { ReactNode } from 'react';
import { getI18n } from '../../../locales/server';
import Footer from '../../../modules/Footer/Footer';
import SideBarWrapper from '../../../modules/SideBarWrapper/SideBarWrapper';

export default async function FavoritesLayout({ children }: { children: ReactNode }) {
    const t = await getI18n();

    return (
        <>
            <SideBarWrapper offListMode>{children}</SideBarWrapper>

            <Footer t={t} />
        </>
    );
}

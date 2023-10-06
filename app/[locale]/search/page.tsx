import { getI18n } from '../../../locales/server';
import Footer from '../../../modules/Footer/Footer';

export default async function SearchPage() {
    const t = await getI18n();

    return (
        <>
            <h1>Search Page</h1>

            <Footer t={t} />
        </>
    );
}

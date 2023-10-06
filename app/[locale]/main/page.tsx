import { getI18n } from '../../../locales/server';
import Footer from '../../../modules/Footer/Footer';

export default async function MainPage() {
    const t = await getI18n();

    return (
        <>
            <div style={{ backgroundColor: 'white' }}>
                <h1>Main Page</h1>
            </div>

            <Footer t={t} />
        </>
    );
}

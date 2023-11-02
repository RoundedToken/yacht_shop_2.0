import { ISitemapField, getServerSideSitemap } from 'next-sitemap';
import { getAllProductsId } from '../../services/getAllProductsId';

export async function GET() {
    const ids = await getAllProductsId();
    const locales = ['eng', 'rus', 'est'];

    return getServerSideSitemap(
        locales.flatMap((locale) =>
            ids.map((id): ISitemapField => {
                return {
                    loc: `${process.env.URL}/${locale}/product/${id}`,
                    lastmod: new Date().toISOString(),
                    changefreq: 'daily',
                    priority: 0.7,
                };
            }),
        ),
    );
}

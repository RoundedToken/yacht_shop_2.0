import { ISitemapField, getServerSideSitemap } from 'next-sitemap';
import { getAllProductsId } from '../../services/getAllProductsId';

export async function GET() {
    const products = await getAllProductsId();
    const locales = ['eng', 'rus', 'est'];

    return getServerSideSitemap(
        locales.flatMap((locale) =>
            products.map((product): ISitemapField => {
                return {
                    loc: `${process.env.URL}/${locale}/product/${product.id}`,
                    lastmod: new Date().toISOString(),
                    changefreq: 'daily',
                    priority: 0.7,
                };
            }),
        ),
    );
}

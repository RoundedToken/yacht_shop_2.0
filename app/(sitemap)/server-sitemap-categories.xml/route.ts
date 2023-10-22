import { getAllCategoriesId } from './../../../services/getAllCategoriesId';
import { ISitemapField, getServerSideSitemap } from 'next-sitemap';

export async function GET() {
    const { categories, productLists } = await getAllCategoriesId();
    const locales = ['eng', 'rus', 'est'];

    return getServerSideSitemap([
        ...locales.flatMap((locale) =>
            categories.map((id): ISitemapField => {
                return {
                    loc: `${process.env.URL}/${locale}/category/${id}`,
                    lastmod: new Date().toISOString(),
                    changefreq: 'daily',
                    priority: 0.7,
                };
            }),
        ),
        ...locales.flatMap((locale) =>
            productLists.map((id): ISitemapField => {
                return {
                    loc: `${process.env.URL}/${locale}/productList/${id}`,
                    lastmod: new Date().toISOString(),
                    changefreq: 'daily',
                    priority: 0.7,
                };
            }),
        ),
    ]);
}

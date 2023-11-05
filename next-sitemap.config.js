/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.URL || '',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap-categories.xml', '/server-sitemap-products.xml', `${process.env.URL}/`],
    robotsTxtOptions: {
        additionalSitemaps: [
            `${process.env.URL}/server-sitemap-categories.xml`,
            `${process.env.URL}/server-sitemap-products.xml`,
        ],
    },
};

export default config;

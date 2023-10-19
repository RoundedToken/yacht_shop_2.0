/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    images: {
        domains: [
            'www.ronstan.com',
            'www.nauticalia.com',
            'www.bainbridgemarine.co.uk',
            'www.spinlock.co.uk',
            'kauppa.maritim.fi',
            'www.bainbridgeint.com',
            'www.blueperformance.com',
            'www.gillmarine.com',
            'www.optiparts.com',
            'www.harken.com',
            'www.trem.net',
            'www.best-krepeg.ru',
            'paints.nautix.com',
            'www.vtsport.ru',
            'tradeonly.harken.com',
            'undefined.ee',
        ],
    },
};

export default nextConfig;

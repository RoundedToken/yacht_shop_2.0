export const getEurPrice = (price: number) => {
    const eurFormatter = new Intl.NumberFormat('et', {
        style: 'currency',
        currency: 'EUR',
    });

    return eurFormatter.format(price);
};

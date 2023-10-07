// import { TWebCartProductListData, TWebCartProductListFormattedData } from '../app/api/webCartProductList/route';

// export function goodsFilter(data: TWebCartProductListData[]) {
//     const setForFilter = new Set();
//     const filteredData: TWebCartProductListFormattedData[] = [];

//     data.forEach((item) => {
//         //Collect the first records by id
//         const has = setForFilter.has(item.id) ? true : false;
//         setForFilter.add(item.id);

//         if (item.featurename && item.featurename.startsWith('pic')) {
//             if (has) {
//                 const index = filteredData.findIndex((product) => product.id === item.id);

//                 if (!item.src.startsWith('http')) {
//                     filteredData[index].src.push(`${process.env.IMG_URL}/${item.brand}/${item.src}`);
//                 } else {
//                     filteredData[index].src = [item.src];
//                 }
//             } else {
//                 //Delete featurename
//                 delete item.featurename;

//                 //Create inStock
//                 item.inStock = item.inStockCount > 0 ? true : false;

//                 //Check src for URL otherwise create URL
//                 if (!item.src.startsWith('http')) {
//                     item.src = [`${process.env.IMG_URL}/${item.brand}/${item.src}`];
//                 } else {
//                     item.src = [item.src];
//                 }

//                 filteredData.push(item);
//             }
//         } else {
//             if (!has) {
//                 //Delete featurename
//                 delete item.featurename;

//                 //Create inStock
//                 item.inStock = item.inStockCount > 0 ? true : false;

//                 //Check src for URL otherwise create URL
//                 item.src = [];

//                 filteredData.push(item);
//             }
//         }
//     });

//     filteredData.forEach((item) => {
//         if (item.src.length === 0) {
//             item.src.push('http://undefined.ee');
//         }
//     });

//     return filteredData;
// }
export type TWebCartProductListFormattedData = {
    id: number;
    name: string;
    brand: string;
    code: string;
    price: number;
    inStockCount: number;
    src: string[];
    isDecimals: boolean;
    inStock: boolean;
};

export type TWebCartProductListData = {
    id: number;
    name: string;
    brand: string;
    code: string;
    price: number;
    inStockCount: number;
    src: string;
    featurename?: string;
    isDecimals: boolean;
};

export function goodsFilter(data: TWebCartProductListData[]): TWebCartProductListFormattedData[] {
    const products: TWebCartProductListFormattedData[] = [];
    const set = new Set();

    data.forEach((item) => {
        if (set.has(item.id)) {
            const product = products.find((p) => p.id === item.id);
            if (product) {
                if (item.featurename?.startsWith('pic')) {
                    product.src.push(`${process.env.IMG_URL}/${item.brand}/${item.src}`);
                }
            }
        } else {
            set.add(item.id);

            const product: TWebCartProductListFormattedData = {
                id: item.id,
                name: item.name,
                brand: item.brand,
                code: item.code,
                price: item.price,
                inStockCount: item.inStockCount,
                isDecimals: item.isDecimals,
                src: [],
                inStock: !!item.inStockCount,
            };

            if (item.featurename?.startsWith('pic')) {
                product.src.push(`${process.env.IMG_URL}/${item.brand}/${item.src}`);
            } else if (item.src) {
                product.src.push(item.src);
            }

            products.push(product);
        }
    });

    products.forEach((product) => {
        if (!product.src.length) {
            product.src.push('http://undefined.ee');
        }
    });

    return products;
}

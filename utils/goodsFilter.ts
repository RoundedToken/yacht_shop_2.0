export function goodsFilter(data: TWebCartProductListData[]) {
    const setForFilter = new Set();
    const filteredData: TWebCartProductListFormattedData[] = [];

    data.forEach((item) => {
        //Collect the first records by id
        const has = setForFilter.has(item.id) ? true : false;
        setForFilter.add(item.id);

        if (item.featurename && item.featurename.startsWith('pic')) {
            if (has) {
                const index = filteredData.findIndex((product) => product.id === item.id);

                if (!item.src.startsWith('http')) {
                    filteredData[index].src.push(`/images/pic/${item.brand}/${item.src}`);
                } else {
                    filteredData[index].src = [item.src];
                }
            } else {
                //Delete featurename
                delete item.featurename;

                //Create inStock
                item.inStock = item.inStockCount > 0 ? true : false;

                //Check src for URL otherwise create URL
                if (!item.src.startsWith('http')) {
                    item.src = [`/images/pic/${item.brand}/${item.src}`];
                } else {
                    item.src = [item.src];
                }

                filteredData.push(item);
            }
        } else {
            if (!has) {
                //Delete featurename
                delete item.featurename;

                //Create inStock
                item.inStock = item.inStockCount > 0 ? true : false;

                //Check src for URL otherwise create URL
                item.src = [];

                filteredData.push(item);
            }
        }
    });

    filteredData.forEach((item) => {
        if (item.src.length === 0) {
            item.src.push('http://undefined.ee');
        }
    });

    return filteredData;
}
export type TWebCartProductListFormattedData = {
    id: number;
    name: string;
    brand: string;
    code: string;
    price: number;
    inStockCount: number;
    src: any;
    isDecimals: boolean;
    inStock?: boolean;
    featurename?: string;
};

export type TWebCartProductListData = {
    id: number;
    name: string;
    brand: string;
    code: string;
    price: number;
    inStockCount: number;
    src: any;
    featurename?: string;
    isDecimals: boolean;
    inStock?: boolean;
};

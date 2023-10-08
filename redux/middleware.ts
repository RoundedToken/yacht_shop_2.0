import { navProductListApi } from './services/navProductListService';
import { navProductApi } from './services/navProductService';
import { navTreeApi } from './services/navTree';
import { webCartProductList } from './services/webCartProductList';
import { webProductInfoApi } from './services/webProductInfo';
import { webRelatedProductsApi } from './services/webRelatedProducts';
import { webSearchApi } from './services/webSearch';

const middleware = [
    navTreeApi.middleware,
    webSearchApi.middleware,
    navProductApi.middleware,
    webCartProductList.middleware,
    navProductListApi.middleware,
    webProductInfoApi.middleware,
    webRelatedProductsApi.middleware,
];

export { middleware };

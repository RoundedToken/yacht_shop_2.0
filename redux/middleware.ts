import { navProductListApi } from './services/navProductListService';
import { navProductApi } from './services/navProductService';
import { navTreeApi } from './services/navTree';
import { webCartProductList } from './services/webCartProductList';
import { webSearchApi } from './services/webSearch';

const middleware = [
    navTreeApi.middleware,
    webSearchApi.middleware,
    navProductApi.middleware,
    webCartProductList.middleware,
    navProductListApi.middleware,
];

export { middleware };

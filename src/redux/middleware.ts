import { navProductApi } from './services/navProductService';
import { navTreeApi } from './services/navTree';
import { webSearchApi } from './services/webSearch';

const middleware = [navTreeApi.middleware, webSearchApi.middleware, navProductApi.middleware];

export { middleware };

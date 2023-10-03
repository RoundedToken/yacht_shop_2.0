import { RootState } from '../rootReducer';

export const getProductCount = (state: RootState) => state.cartSliceReducer.productList.length;

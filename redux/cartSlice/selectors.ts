import { RootState } from '../rootReducer';

export const getProductCount = (state: RootState) => state.cartSliceReducer.productList.length;

export const getCartListBrands = (state: RootState) =>
    state.cartSliceReducer.productList.map((product) => product.brand);

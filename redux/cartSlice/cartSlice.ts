import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartProduct, ICartState } from '../../models/interfaces/slices/ICartState';
import { IWebOrderRes } from '../../models/interfaces/RTKQuery/IWebOrder';

const initialState: ICartState = {
    productList: [],
    productListCopy: [],
    response: undefined,
    responseIsLoading: false,
    update: false,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setProductListFromStorage(state) {
            state.productList = JSON.parse(localStorage.cartProductList ?? '[]');
            state.update = localStorage.cartUpdate === 'true' ? true : false;
        },
        setProductListCopyFromStorage(state) {
            state.productListCopy = JSON.parse(localStorage.cartProductListCopy ?? '[]');
        },
        setCartUpdateFromStorage(state) {
            state.update = localStorage.cartUpdate ? localStorage.cartUpdate : false;
        },
        addToCart(state, action: PayloadAction<ICartProduct>) {
            const item = action.payload;
            state.productList.push(item);
            localStorage.cartProductList = JSON.stringify(state.productList);
        },

        removeFromCart(state, action: PayloadAction<number>) {
            const filteredList = state.productList.filter((product) => product.id !== action.payload);
            state.productList = filteredList;
            localStorage.cartProductList = JSON.stringify(filteredList);
        },

        incrementCount(state, action: PayloadAction<number>) {
            const index = state.productList.findIndex((product) => product.id === action.payload);
            state.productList[index].count++;
            localStorage.cartProductList = JSON.stringify(state.productList);
        },

        decrementCount(state, action: PayloadAction<number>) {
            const index = state.productList.findIndex((product) => product.id === action.payload);
            if (state.productList[index].count > 1) {
                state.productList[index].count--;
            }
            localStorage.cartProductList = JSON.stringify(state.productList);
        },

        setCount(state, action: PayloadAction<{ id: number; count: number }>) {
            const index = state.productList.findIndex((product) => product.id === action.payload.id);
            state.productList[index].count = action.payload.count;
            localStorage.cartProductList = JSON.stringify(state.productList);
        },

        emptyCart(state) {
            localStorage.cartProductListCopy = JSON.stringify(state.productList);
            state.productList = [];
            localStorage.cartProductList = JSON.stringify(state.productList);
        },

        restoreCart(state) {
            state.productList = JSON.parse(localStorage.cartProductListCopy);
            localStorage.cartProductList = JSON.stringify(state.productList);
        },

        copyCart(state) {
            localStorage.cartProductListCopy = JSON.stringify(state.productList);
        },

        setResponse(state, action: PayloadAction<IWebOrderRes>) {
            state.response = action.payload;
        },

        deleteResponse(state) {
            state.response = undefined;
        },

        switchResponseIsLoading(state, action: PayloadAction<boolean>) {
            state.responseIsLoading = action.payload;
        },
        toTrueCartUpdate(state) {
            state.update = true;
            localStorage.cartUpdate = state.update;
        },
        toFalseCartUpdate(state) {
            state.update = false;
            localStorage.cartUpdate = state.update;
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    incrementCount,
    decrementCount,
    setCount,
    emptyCart,
    restoreCart,
    copyCart,
    setResponse,
    deleteResponse,
    switchResponseIsLoading,
    toTrueCartUpdate,
    toFalseCartUpdate,
    setProductListFromStorage,
    setCartUpdateFromStorage,
    setProductListCopyFromStorage,
} = cartSlice.actions;

export const cartSliceReducer = cartSlice.reducer;

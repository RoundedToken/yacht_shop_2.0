import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INavTreeItem } from '../../models/interfaces/RTKQuery/INavTree';
import { IWebSearchRes } from '../../models/interfaces/RTKQuery/IWebSearch';

export type TCategories = Record<number, INavTreeItem>;

interface IInit {
    categories?: TCategories;
    searchProductList?: IWebSearchRes[];
}

const initialState: IInit = {
    categories: undefined,
    searchProductList: undefined,
};

export const categoriesSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCategories(state, { payload }: PayloadAction<TCategories>) {
            state.categories = payload;
        },

        setSearchProductList(state, { payload }: PayloadAction<IWebSearchRes[]>) {
            state.searchProductList = payload;
        },
    },
});

export const { setCategories, setSearchProductList } = categoriesSlice.actions;

export const categoriesSliceReducer = categoriesSlice.reducer;

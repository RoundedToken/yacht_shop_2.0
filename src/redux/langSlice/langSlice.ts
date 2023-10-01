import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ILangState } from '../../models/interfaces/slices/ILangState';
import { TLang } from '../../models/types/TLang';

const initialState: ILangState = {
    // lang: localStorage.lang ? localStorage.lang : 'est',
    lang: 'rus',
};

export const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        setLang(state, action: PayloadAction<TLang>) {
            state.lang = action.payload;
            // localStorage.lang = state.lang;
        },
    },
});

export const { setLang } = langSlice.actions;

export const langSliceReducer = langSlice.reducer;

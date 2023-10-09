import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type TCrimpingParams = {
    diameter: string;
    end1: string;
    end2: string;
    length: string;
};

const initialState: { ropeCount: number; isFetch: boolean; params?: TCrimpingParams } = {
    ropeCount: 1,
    isFetch: false,
};

export const crimpingSlice = createSlice({
    name: 'crimping',
    initialState,
    reducers: {
        setRopeCount(state, { payload }: PayloadAction<number>) {
            state.ropeCount = payload;
        },
        setCrimpingParams(state, { payload }: PayloadAction<TCrimpingParams>) {
            state.params = payload;
        },
        setCrimpingIsFetch(state, { payload }: PayloadAction<boolean>) {
            state.isFetch = payload;
        },
    },
});

export const { setRopeCount, setCrimpingParams, setCrimpingIsFetch } = crimpingSlice.actions;

export const crimpingSliceReducer = crimpingSlice.reducer;

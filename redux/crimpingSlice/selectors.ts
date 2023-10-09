import { RootState } from '../rootReducer';

export const getRopeCount = (state: RootState) => state.crimpingSliceReducer.ropeCount;

export const getCrimpingParams = (state: RootState) => state.crimpingSliceReducer.params;

export const getCrimpingIsFetch = (state: RootState) => state.crimpingSliceReducer.isFetch;

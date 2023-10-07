import { RootState } from '../rootReducer';

export const getIsDropdownDisplay = (state: RootState) => state.stylesSliceReducer.dropdownDisplay === 'block';

export const getBrandsDisplay = (state: RootState) => state.stylesSliceReducer.brandsDisplay;

export const getSortingDisplay = (state: RootState) => state.stylesSliceReducer.sortingDisplay;

export const getFilterDisplay = (state: RootState) => state.stylesSliceReducer.filterDisplay;

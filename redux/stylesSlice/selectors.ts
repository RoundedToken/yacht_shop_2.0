import { TRoutes } from '../../models/enums/EConstants';
import { RootState } from '../rootReducer';

export const getIsDropdownDisplay = (state: RootState) => state.stylesSliceReducer.dropdownDisplay === 'block';
export const getModalDisplay = (state: RootState) => state.stylesSliceReducer.modalDisplay;
export const getDropdownDisplay = (state: RootState) => state.stylesSliceReducer.dropdownDisplay;
export const getMobileModalDisplay = (state: RootState) => state.stylesSliceReducer.mobileModalDisplay;

export const getBrandsDisplay = (location: TRoutes) => (state: RootState) => {
    const stylesSlice = state.stylesSliceReducer;

    switch (location) {
        case '/favorites':
            return stylesSlice.favoritesBrandsDisplay;
        case '/cart':
            return stylesSlice.cartBrandsDisplay;
        default:
            return stylesSlice.brandsDisplay;
    }
};

export const getSortingDisplay = (state: RootState) => state.stylesSliceReducer.sortingDisplay;

export const getFilterDisplay = (state: RootState) => state.stylesSliceReducer.filterDisplay;

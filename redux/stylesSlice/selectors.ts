import { RootState } from '../rootReducer';

export const getIsDropdownDisplay = (state: RootState) => state.stylesSliceReducer.dropdownDisplay === 'block';

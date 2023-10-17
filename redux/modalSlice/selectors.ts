import { RootState } from '../rootReducer';

export const getModalType = (state: RootState) => state.modalSliceReducer.modalType;
export const getModalPicSrc = (state: RootState) => state.modalSliceReducer.picSrc;
export const getMobileModalType = (state: RootState) => state.modalSliceReducer.mobileModalType;

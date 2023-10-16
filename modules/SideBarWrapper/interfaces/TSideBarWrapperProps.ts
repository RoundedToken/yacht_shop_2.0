import { ReactNode } from 'react';
import { TGetI18n } from '../../../locales/server';

export type TSideBarWrapperProps = {
    children: ReactNode;
    offSideBar?: boolean;
    offFilter?: boolean;
    offListMode?: boolean;
    t: TGetI18n;
};

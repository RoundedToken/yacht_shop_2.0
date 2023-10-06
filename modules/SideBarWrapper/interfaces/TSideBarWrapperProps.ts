import { ReactNode } from 'react';

export type TSideBarWrapperProps = {
    children: ReactNode;
    offSideBar?: boolean;
    offFilter?: boolean;
    offListMode?: boolean;
};

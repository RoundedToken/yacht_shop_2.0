import { ReactNode } from 'react';

export interface ISearchInput {
    styles: {
        readonly [key: string]: string;
    };
    children: ReactNode;
    placeholder: string;
}

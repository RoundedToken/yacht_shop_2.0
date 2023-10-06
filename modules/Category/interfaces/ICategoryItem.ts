import React from 'react';

export interface ICategoryItem {
    id: number;
    children?: React.ReactNode;
    hasChildren?: boolean;
    src: string;
    styles: {
        readonly [key: string]: string;
    };
}

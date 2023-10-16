import { StaticImageData } from 'next/image';
import React from 'react';

export interface INavBarItem {
    className: string;
    src: StaticImageData;
    route: string;
    children: React.ReactNode;
    switcher?: React.ReactNode;
    styles: {
        readonly [key: string]: string;
    };
    location: string;
}

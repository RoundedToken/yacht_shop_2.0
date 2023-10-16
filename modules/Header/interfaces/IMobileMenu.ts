import { TGetI18n } from '../../../locales/server';

export interface IMobileMenu {
    styles: {
        readonly [key: string]: string;
    };
    location: string;
    t: TGetI18n;
    searchStr: string;
}

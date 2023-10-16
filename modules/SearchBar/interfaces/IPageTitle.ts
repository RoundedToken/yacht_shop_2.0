import { TGetI18n } from '../../../locales/server';

export interface IPageTitle {
    styles: {
        readonly [key: string]: string;
    };
    searchStr: string;
    location: string;
    t: TGetI18n;
}

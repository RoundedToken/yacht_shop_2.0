import { TGetI18n } from '../../../locales/server';

export interface ICatalog {
    styles: {
        readonly [key: string]: string;
    };
    location: string;
    t: TGetI18n;
}

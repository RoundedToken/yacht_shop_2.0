import { TGetI18n } from '../../../locales/server';

export interface INavBar {
    styles: {
        readonly [key: string]: string;
    };
    t: TGetI18n;
    location: string;
}

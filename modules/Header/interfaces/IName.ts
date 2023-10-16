import { TGetI18n } from '../../../locales/server';

export interface IName {
    styles: {
        readonly [key: string]: string;
    };
    t: TGetI18n;
}

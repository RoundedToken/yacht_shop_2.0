import { TGetI18n } from '../../../locales/server';

export interface IForm {
    styles: {
        readonly [key: string]: string;
    };
    t: TGetI18n;
}

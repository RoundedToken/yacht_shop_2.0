import { TGetI18n } from '../../../locales/server';

export interface IRopeEnds {
    styles: { readonly [key: string]: string };
    t: TGetI18n;
}

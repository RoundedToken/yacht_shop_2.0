import { TGetI18n } from '../../../locales/server';

export type TSideBarProps = {
    styles: { readonly [key: string]: string };
    offListMode?: boolean;
    offFilter?: boolean;
    t: TGetI18n;
};

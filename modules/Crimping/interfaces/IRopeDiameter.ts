import { TGetI18n } from '../../../locales/server';

export interface IRopeDiameter {
    styles: {
        readonly [key: string]: string;
    };
    t: TGetI18n;
}

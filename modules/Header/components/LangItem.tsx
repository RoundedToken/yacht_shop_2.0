import React, { FC } from 'react';
import { ILangItem } from '../interfaces/ILangItem';
import { useChangeLocale, useCurrentLocale } from '../../../locales/client';

const LangItem: FC<ILangItem> = ({ styles, lang }) => {
    const locale = useCurrentLocale();
    const changeLocale = useChangeLocale();
    const isActive = locale === lang;

    return (
        <div className={`${styles.lang__item} ${isActive && styles.lang__active}`} onClick={() => changeLocale(lang)}>
            {lang.toUpperCase()}
        </div>
    );
};

export default LangItem;

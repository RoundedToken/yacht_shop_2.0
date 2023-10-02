import React, { FC } from 'react';
import { ILangItem } from '../interfaces/ILangItem';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';

const LangItem: FC<ILangItem> = ({ styles, lang }) => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const isActive = locale === lang;

    const setLangOnClick = () => {
        router.replace(pathname, { locale: lang });
    };

    return (
        <div className={`${styles.lang__item} ${isActive && styles.lang__active}`} onClick={setLangOnClick}>
            {lang.toUpperCase()}
        </div>
    );
};

export default LangItem;

import React, { FC } from 'react';
import { routeConstants } from '../../../models/enums/EConstants';
import { IName } from '../interfaces/IName';
import Link from 'next/link';
import { useI18n } from '../../../locales/client';

const Name: FC<IName> = ({ styles }) => {
    const t = useI18n();

    return (
        <Link href={routeConstants.MAIN_ROUTE} className={styles.name}>
            {t('mainTitle')}
        </Link>
    );
};

export default Name;

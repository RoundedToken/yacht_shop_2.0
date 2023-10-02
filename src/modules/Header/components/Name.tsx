import React, { FC } from 'react';
import { routeConstants } from '../../../models/enums/EConstants';
import { IName } from '../interfaces/IName';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Name: FC<IName> = ({ styles }) => {
    const t = useTranslations('Header');

    return (
        <Link href={routeConstants.MAIN_ROUTE} className={styles.name}>
            {t('name')}
        </Link>
    );
};

export default Name;

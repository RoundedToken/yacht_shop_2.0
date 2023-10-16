import React, { FC } from 'react';
import { routeConstants } from '../../../models/enums/EConstants';
import { IName } from '../interfaces/IName';
import Link from 'next/link';

const Name: FC<IName> = ({ styles, t }) => {
    return (
        <Link href={routeConstants.MAIN_ROUTE} className={styles.name}>
            {t('mainTitle')}
        </Link>
    );
};

export default Name;

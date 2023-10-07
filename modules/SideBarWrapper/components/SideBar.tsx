'use client';

import React from 'react';
import { TSideBarProps } from '../interfaces/TSideBarProps';
import BrandSelect from '../../BrandSelect/BrandSelect';
import { I18nProviderClient } from '../../../locales/client';
import Sorting from '../../Sorting/Sorting';
import Filter from '../../Filter/Filter';
import ListModeSwitch from './ListModeSwitch';

const SideBar = ({ styles, offFilter = false, offListMode = false }: TSideBarProps) => {
    return (
        <div className={styles.sideBar}>
            <I18nProviderClient>
                {!offListMode && <ListModeSwitch styles={styles} />}

                <BrandSelect />

                <Sorting />

                {!offFilter && <Filter />}
            </I18nProviderClient>
        </div>
    );
};

export default SideBar;

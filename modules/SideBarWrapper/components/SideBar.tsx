import React from 'react';
import { TSideBarProps } from '../interfaces/TSideBarProps';
import BrandSelect from '../../BrandSelect/BrandSelect';
import Sorting from '../../Sorting/Sorting';
import Filter from '../../Filter/Filter';
import ListModeSwitch from './ListModeSwitch';

const SideBar = ({ styles, offFilter = false, offListMode = false, t }: TSideBarProps) => {
    const brandsTitle = t('brands');
    const sortingTitle = t('sorting');
    const filterTitle = t('filter');

    return (
        <div className={styles.sideBar}>
            {!offListMode && <ListModeSwitch styles={styles} />}

            <BrandSelect title={brandsTitle} />

            <Sorting title={sortingTitle} />

            {!offFilter && <Filter title={filterTitle} />}
        </div>
    );
};

export default SideBar;

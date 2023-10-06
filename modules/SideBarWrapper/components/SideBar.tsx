import React from 'react';
import { TSideBarProps } from '../interfaces/TSideBarProps';

const SideBar = ({ styles, offFilter = false, offListMode = false }: TSideBarProps) => {
    return (
        <div className={`${styles.sideBar} sideBar`}>
            {/* <ListModeSwitch styles={styles} /> */}
            {!offListMode && <h1>List</h1>}
            {/* <BrandSelect /> */}
            Brand <br />
            {/* <Sorting /> */}
            Sort <br />
            {/* <Filter /> */}
            {!offFilter && <h1>Filter</h1>}
        </div>
    );
};

export default SideBar;

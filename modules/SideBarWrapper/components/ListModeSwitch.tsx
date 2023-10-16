'use client';

import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TListMode } from '../../../models/types/TListMode';
import gridViewImg from '../../../public/assets/images/gridView.png';
import tableViewImg from '../../../public/assets/images/tableView.png';
import { IListModeSwitch } from '../interfaces/IListModeSwitch';
import { setListMode } from '../../../redux/sideBarSlice/sideBarSlice';
import Image from 'next/image';
import { getListMode } from '../../../redux/sideBarSlice/selectors';

const ListModeSwitch: FC<IListModeSwitch> = ({ styles }) => {
    const listMode = useSelector(getListMode);
    const dispatch = useDispatch();

    const listModeSwitchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setListMode(e.target.value as TListMode));
    };

    return (
        <div className={styles.switchContainer}>
            <label className={listMode === 'table' ? styles.active : undefined}>
                <Image src={tableViewImg} alt="" width={28} height={28} />

                <input
                    checked={listMode === 'table'}
                    type="radio"
                    name="listModeSwitch"
                    value="table"
                    onChange={(e) => listModeSwitchOnChange(e)}
                />
            </label>

            <label className={listMode === 'grid' ? styles.active : undefined}>
                <Image src={gridViewImg} alt="" width={28} height={28} />

                <input
                    checked={listMode === 'grid'}
                    type="radio"
                    name="listModeSwitch"
                    value="grid"
                    onChange={(e) => listModeSwitchOnChange(e)}
                />
            </label>
        </div>
    );
};

export default ListModeSwitch;

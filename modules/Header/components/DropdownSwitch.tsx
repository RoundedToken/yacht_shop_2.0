'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsDropdownDisplay } from '../../../redux/stylesSlice/selectors';
import { setModalType } from '../../../redux/modalSlice/modalSlice';
import { switchModalDisplay } from '../../../redux/stylesSlice/stylesSlice';

const DropdownSwitch = () => {
    const isDropdownDisplay = useSelector(getIsDropdownDisplay);
    const dispatch = useDispatch();

    const switchOnClick = () => {
        dispatch(setModalType('nav'));
        dispatch(switchModalDisplay());
        document.body.style.overflow = 'hidden';
    };

    return <input id="switcher" type="checkbox" checked={isDropdownDisplay} onChange={() => switchOnClick()} />;
};

export default DropdownSwitch;

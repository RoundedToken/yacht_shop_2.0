'use client';

import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BreadcrumbsModal from './components/BreadcrumbsModal';
import LangModal from './components/LangModal';
import SearchModal from './components/SearchModal';
import styles from './MobileModal.module.scss';
import FilterModal from './components/FilterModal';
import { I18nProviderClient } from '../../locales/client';
import { getMobileModalDisplay } from '../../redux/stylesSlice/selectors';
import { getMobileModalType } from '../../redux/modalSlice/selectors';
import { switchMobileModalDisplay } from '../../redux/stylesSlice/stylesSlice';
import { isClient } from '../../utils/isClient';

const MobileModal = () => {
    const modalRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const modalDisplay = useSelector(getMobileModalDisplay);
    const modalType = useSelector(getMobileModalType);

    if (isClient) {
        window.onclick = function (e) {
            if (e.target === modalRef.current) {
                dispatch(switchMobileModalDisplay());
                document.body.style.overflow = 'auto';
            }
        };
    }

    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.style.display = modalDisplay;
        }
    }, [modalDisplay]);

    if (modalDisplay === 'none') {
        return null;
    }

    return (
        <div ref={modalRef} className={styles.modal}>
            <I18nProviderClient>
                <div className={styles.modalContentContainer}>
                    {modalType === 'lang' && <LangModal styles={styles} />}

                    {modalType === 'search' && <SearchModal styles={styles} />}

                    {modalType === 'breadcrumbs' && <BreadcrumbsModal styles={styles} />}

                    {modalType === 'filter' && <FilterModal styles={styles} />}
                </div>
            </I18nProviderClient>
        </div>
    );
};

export default MobileModal;

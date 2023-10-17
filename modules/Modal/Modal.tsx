'use client';

import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import OrderModal from './components/OrderModal';
import PicModal from './components/PicModal';
import { routeConstants } from '../../models/enums/EConstants';
import NavModal from './components/NavModal';
import { getModalType } from '../../redux/modalSlice/selectors';
import { getModalDisplay } from '../../redux/stylesSlice/selectors';
import { getCartResponse } from '../../redux/cartSlice/selectors';
import { useRouter } from 'next/navigation';
import { deleteResponse } from '../../redux/cartSlice/cartSlice';
import { switchModalDisplay } from '../../redux/stylesSlice/stylesSlice';
import { setModalType } from '../../redux/modalSlice/modalSlice';
import { I18nProviderClient } from '../../locales/client';
import { isClient } from '../../utils/isClient';

const Modal = () => {
    const modalRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const modalType = useSelector(getModalType);
    const modalDisplay = useSelector(getModalDisplay);
    const response = useSelector(getCartResponse);
    const router = useRouter();

    const closeOnClick = () => {
        if (response) {
            dispatch(deleteResponse());
            router.push(routeConstants.MAIN_ROUTE);
        }
        dispatch(switchModalDisplay());
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        if (isClient) {
            window.onclick = function (e) {
                if (e.target === modalRef.current) {
                    if (response) {
                        dispatch(deleteResponse());
                        router.push(routeConstants.MAIN_ROUTE);
                    }
                    dispatch(switchModalDisplay());
                    document.body.style.overflow = 'auto';
                }
            };
            window.onkeydown = function (e) {
                if (e.key === 'Escape' && modalDisplay === 'block') {
                    if (response) {
                        dispatch(deleteResponse());
                        router.push(routeConstants.MAIN_ROUTE);
                    }
                    dispatch(switchModalDisplay());
                    document.body.style.overflow = 'auto';
                }
            };
        }
    }, []);

    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.style.display = modalDisplay;
        }
        if (modalDisplay === 'none') {
            dispatch(setModalType('null'));
        }
    }, [modalDisplay, dispatch]);

    useEffect(() => {
        const onResize = () => {
            if ((window.innerWidth <= 1000 || window.innerHeight <= 800) && modalRef.current && modalType === 'nav') {
                modalRef.current.style.display = 'none';
            }
        };

        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalRef.current]);

    return (
        <I18nProviderClient>
            <div ref={modalRef} className={styles.modal}>
                <div
                    style={modalType === 'nav' ? { display: 'none' } : {}}
                    className={modalType === 'order' ? styles.orderModalContainer : styles.modalContentContainer}
                >
                    <div
                        style={modalType === 'order' ? { display: 'none' } : {}}
                        className={styles.modalClose}
                        onClick={closeOnClick}
                    >
                        &times;
                    </div>

                    {modalType === 'order' && <OrderModal styles={styles} />}

                    {modalType === 'pic' && <PicModal styles={styles} />}
                </div>

                <div style={modalType === 'nav' ? {} : { display: 'none' }}>
                    <NavModal />
                </div>
            </div>
        </I18nProviderClient>
    );
};

export default Modal;

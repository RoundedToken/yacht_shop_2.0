'use client';

import React, { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    setCartUpdateFromStorage,
    setProductListCopyFromStorage,
    setProductListFromStorage,
} from '../redux/cartSlice/cartSlice';
import { setFavoritesListFromStorage, setFavoritesUpdateFromStorage } from '../redux/favoritesSlice/favoritesSlice';

const LocalStorageWrapper = ({ children }: { children: ReactNode }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //new version compatibility
        const version = localStorage.getItem('version');

        if (version !== '2.0.0') {
            localStorage.clear();
            localStorage.setItem('version', '2.0.0');
        }

        //CART SLICE
        dispatch(setProductListFromStorage());
        dispatch(setProductListCopyFromStorage());
        dispatch(setCartUpdateFromStorage());

        //FAVORITES SLICE
        dispatch(setFavoritesListFromStorage());
        dispatch(setFavoritesUpdateFromStorage());

        //STORAGE LISTENER
        const takeFromStorage = () => {
            dispatch(setProductListFromStorage());
            dispatch(setFavoritesListFromStorage());
        };

        window.addEventListener('storage', takeFromStorage);

        return () => {
            window.removeEventListener('storage', takeFromStorage);
        };
    }, [dispatch]);

    return <>{children}</>;
};

export default LocalStorageWrapper;

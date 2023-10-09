'use client';

import React, { ReactNode } from 'react';
import styles from '../Crimping.module.scss';
import { setCrimpingIsFetch, setCrimpingParams, setRopeCount } from '../../../redux/crimpingSlice/crimpingSlice';
import { useDispatch } from 'react-redux';

const FormWrapper = ({ children }: { children: ReactNode }) => {
    const dispatch = useDispatch();

    const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { target } = e;

        const inputs = target as unknown as {
            diameter: HTMLInputElement;
            meters: HTMLInputElement;
            centimeters: HTMLInputElement;
            end1: HTMLInputElement;
            end2: HTMLInputElement;
        };

        const diameter = inputs.diameter.value;
        const length = `${Number(inputs.meters.value)}.${inputs.centimeters.value}`;
        const end1 = inputs.end1.value;
        const end2 = inputs.end2.value;

        dispatch(setRopeCount(1));
        dispatch(setCrimpingParams({ diameter, length, end1, end2 }));
        dispatch(setCrimpingIsFetch(true));
    };

    return (
        <form id="crimpingForm" className={styles.formContainer} onSubmit={formOnSubmit}>
            {children}
        </form>
    );
};

export default FormWrapper;

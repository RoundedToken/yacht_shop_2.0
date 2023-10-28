'use client';

import React, { useState } from 'react';
import { I18nProviderClient, useI18n } from '../../../locales/client';
import styles from '../Crimping.module.scss';

const RopeLength = () => {
    const t = useI18n();
    const [meters, setMeters] = useState('0');
    const [centimeters, setCentimeters] = useState('0');

    //VALIDATE
    const metersOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const isValid = /^[0-9]*$/.test(value) && value.length < 4;
        if (isValid) {
            setMeters(value);
        }
    };
    const centimetersOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const isValid = /^[0-9]?[1-9]?$/.test(value);
        if (isValid) {
            setCentimeters(value);
        }
    };
    const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.select();
    };

    return (
        <div className={styles.ropeLengthContainer}>
            <div>{t('rope_length')}</div>

            <input
                aria-label="meters"
                value={meters}
                onChange={(e) => metersOnChange(e)}
                onFocus={(e) => inputOnFocus(e)}
                type="tel"
                name="meters"
                required
            />
            <label htmlFor="meters">{t('m')}</label>

            <input
                aria-label="centimeters"
                value={centimeters}
                onChange={(e) => centimetersOnChange(e)}
                onFocus={(e) => inputOnFocus(e)}
                type="tel"
                name="centimeters"
                required
            />
            <label htmlFor="centimeters">{t('cm')}</label>
        </div>
    );
};

const Wrapped = () => (
    <I18nProviderClient>
        <RopeLength />
    </I18nProviderClient>
);

export default Wrapped;

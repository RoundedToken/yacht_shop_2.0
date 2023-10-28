import React, { FC } from 'react';
import styles from './RadioButton.module.scss';
import { IRadioButton } from './IRadioButton';

const RadioButton: FC<IRadioButton> = ({ value, name, width, height }) => {
    return (
        <label style={{ width: width, height: height }} className={styles.container}>
            <input aria-label={value} type="radio" name={name} value={value} required />

            <span style={{ width: width, height: height }} className={styles.checkmark} />
        </label>
    );
};

export default RadioButton;

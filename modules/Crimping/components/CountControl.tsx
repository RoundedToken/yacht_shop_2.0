import React from 'react';
import styles from '../Crimping.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getRopeCount } from '../../../redux/crimpingSlice/selectors';
import { setRopeCount } from '../../../redux/crimpingSlice/crimpingSlice';

const CountControl = () => {
    const ropeCount = useSelector(getRopeCount);
    const dispatch = useDispatch();

    const ropeCountOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '0') {
            dispatch(setRopeCount(1));
        } else if (value === '') {
            dispatch(setRopeCount(1));
        } else if (/^[0-9][0-9]*$/.test(value)) {
            dispatch(setRopeCount(Number(value)));
        }
    };
    const decrementOnClick = () => {
        if (ropeCount > 1) {
            dispatch(setRopeCount(ropeCount - 1));
        }
    };
    const incrementOnClick = () => {
        if (ropeCount < 99) {
            dispatch(setRopeCount(ropeCount + 1));
        }
    };

    return (
        <div className={styles.countControl}>
            <div className={styles.button} onClick={decrementOnClick}>
                &minus;
            </div>

            <div className={styles.item}>
                <input
                    value={ropeCount}
                    type="tel"
                    maxLength={2}
                    minLength={1}
                    onChange={(e) => ropeCountOnChange(e)}
                />
            </div>

            <div className={styles.button} onClick={incrementOnClick}>
                +
            </div>
        </div>
    );
};

export default CountControl;

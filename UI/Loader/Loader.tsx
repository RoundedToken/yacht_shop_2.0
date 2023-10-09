import React from 'react';
import styles from './Loader.module.scss';

const Loader = ({ className }: { className?: string }) => {
    return (
        <div className={`${styles.spinner} ${className}`}>
            <div className={styles.lds_spinner}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;

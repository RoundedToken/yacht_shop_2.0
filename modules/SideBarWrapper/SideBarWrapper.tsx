import React from 'react';
import styles from './SideBarWrapper.module.scss';
import SideBar from './components/SideBar';
import { TSideBarWrapperProps } from './interfaces/TSideBarWrapperProps';
import MobileToggle from './components/MobileToggle';

const SideBarWrapper = ({
    children,
    offSideBar = false,
    offFilter = false,
    offListMode = false,
    t,
}: TSideBarWrapperProps) => {
    return (
        <div className={styles.body}>
            {!offSideBar && (
                <>
                    <MobileToggle styles={styles} />

                    <SideBar t={t} styles={styles} offFilter={offFilter} offListMode={offListMode} />
                </>
            )}

            <div className={styles.contentContainer}>{children}</div>
        </div>
    );
};

export default SideBarWrapper;

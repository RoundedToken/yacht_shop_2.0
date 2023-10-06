import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from '../Category.module.scss';
import 'react-loading-skeleton/dist/skeleton.css';

const CategoryListSkeleton = () => {
    return (
        <div className={styles.categoryListContainer}>
            {Array(6)
                .fill(0)
                .map((_, i) => (
                    <div key={i} className={styles.categoryItem}>
                        <div className={styles.imageContainer}>
                            <Skeleton containerClassName="skeleton" height={120} style={{ borderRadius: '100%' }} />
                        </div>

                        <Skeleton containerClassName="skeleton" height={23} />
                    </div>
                ))}
        </div>
    );
};

export default CategoryListSkeleton;

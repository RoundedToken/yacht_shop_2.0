'use client';

import React from 'react';
import { useFetchNewsQuery } from '../../../redux/services/webNews';
import { useCurrentLocale } from '../../../locales/client';
import NewsItem from './NewsItem';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SingleNews = ({ index, styles }: { index: number; styles: { readonly [key: string]: string } }) => {
    const lang = useCurrentLocale();
    const { data, isFetching } = useFetchNewsQuery(lang);

    if (isFetching) {
        return (
            <div className={styles.newsItem}>
                <div className={styles.newsTitle}>
                    <Skeleton containerClassName="skeleton" width={188} style={{ lineHeight: '22px' }} />
                </div>

                <div className={styles.newsContent}>
                    <Skeleton containerClassName="skeleton" width={188} style={{ lineHeight: '18px' }} />
                </div>

                <div className={styles.newsDate}>
                    <Skeleton containerClassName="skeleton" width={188} />
                </div>
            </div>
        );
    }

    if (data) {
        const { title, content, date } = data[index];

        return <NewsItem title={title} content={content} date={date} styles={styles} />;
    }

    return null;
};

export default SingleNews;

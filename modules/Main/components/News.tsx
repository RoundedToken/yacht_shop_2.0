'use client';

import React from 'react';
import { useFetchNewsQuery } from '../../../redux/services/webNews';
import { useCurrentLocale } from '../../../locales/client';
import NewsItem from './NewsItem';

const News = ({ styles }: { styles: { readonly [key: string]: string } }) => {
    const lang = useCurrentLocale();
    const { data } = useFetchNewsQuery(lang);

    if (data) {
        return data.slice(2).map((news, i) => (
            <>
                <NewsItem key={news.id} title={news.title} styles={styles} content={news.content} date={news.date} />

                {data.length - 3 !== +i ? <div className={styles.symbol}>&#9679;</div> : null}
            </>
        ));
    }

    return null;
};

export default News;

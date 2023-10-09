import React from 'react';

const NewsItem = ({
    date,
    content,
    title,
    styles,
}: {
    date: string;
    content: string;
    title: string;
    styles: { readonly [key: string]: string };
}) => {
    const newsDate = new Date(date);

    return (
        <div className={styles.newsItem}>
            <div className={styles.newsTitle}>{title}</div>

            <div className={styles.newsContent}>{content}</div>

            <div className={styles.newsDate}>
                {newsDate.toLocaleDateString('en', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                })}
            </div>
        </div>
    );
};

export default NewsItem;

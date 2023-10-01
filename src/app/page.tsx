'use client';

import { useEffect } from 'react';
import { useFetchAllIdQuery } from '../redux/services/navTree';

export default function Home() {
    const { data } = useFetchAllIdQuery('rus');

    useEffect(() => {
        console.log(data);
    }, [data]);
    return <main></main>;
}

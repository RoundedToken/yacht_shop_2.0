'use client';

import { Provider } from 'react-redux';
import React from 'react';
import { reduxStore } from './store';

export const Providers = (props: React.PropsWithChildren) => {
    return <Provider store={reduxStore}>{props.children}</Provider>;
};

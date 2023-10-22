import { Metadata } from 'next';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export const metadata: Metadata = {
    metadataBase: new URL(process.env.URL || ''),
};

export default function RootLayout({ children }: Props) {
    return children;
}

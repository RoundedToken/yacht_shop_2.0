import { setStaticParamsLocale } from 'next-international/server';
import { getStaticParams } from '../../../locales/server';
import Main from '../../../modules/Main/Main';

type Props = {
    params: { locale: string };
};

export function generateStaticParams() {
    return getStaticParams();
}

export default async function MainPage({ params: { locale } }: Props) {
    setStaticParamsLocale(locale);

    return <Main />;
}

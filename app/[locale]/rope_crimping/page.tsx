import { Metadata } from 'next';
import { getI18n, getStaticParams } from '../../../locales/server';
import Crimping from '../../../modules/Crimping/Crimping';
import { setStaticParamsLocale } from 'next-international/server';

type Props = {
    params: { locale: string };
};

export async function generateMetadata(): Promise<Metadata> {
    const t = await getI18n();

    return {
        title: `${t('rope_crimping')}`,
    };
}

export function generateStaticParams() {
    return getStaticParams();
}

export default async function RopeCrimpingPage({ params: { locale } }: Props) {
    setStaticParamsLocale(locale);
    const t = await getI18n();

    return <Crimping t={t} />;
}

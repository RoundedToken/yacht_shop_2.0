import { Metadata } from 'next';
import { getI18n, getStaticParams } from '../../../locales/server';
import Contacts from '../../../modules/Contacts/Contacts';
import { setStaticParamsLocale } from 'next-international/server';

type Props = {
    params: { locale: string };
};

export async function generateMetadata(): Promise<Metadata> {
    const t = await getI18n();

    return {
        title: `${t('contacts')}`,
    };
}

export function generateStaticParams() {
    return getStaticParams();
}

export default async function ContactsPage({ params: { locale } }: Props) {
    setStaticParamsLocale(locale);
    const t = await getI18n();

    return <Contacts t={t} />;
}

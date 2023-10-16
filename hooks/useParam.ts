import { usePathname } from 'next/navigation';

export const useParam = () => usePathname().split('/').at(-1) as string | undefined;

import { redirect } from 'next/navigation';

export default function ProductListRedirect() {
    redirect('/category/0');
}

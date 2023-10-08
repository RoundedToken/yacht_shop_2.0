import { useI18n } from '../../../locales/client';

const ProductNotFound = () => {
    const t = useI18n();

    return t('product_not_found');
};

export default ProductNotFound;

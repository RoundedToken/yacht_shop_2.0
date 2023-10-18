import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './QuickNav.module.scss';
import { getDropdownDisplay } from '../../redux/stylesSlice/selectors';
import { useRouter } from 'next/navigation';
import { switchModalDisplay } from '../../redux/stylesSlice/stylesSlice';
import { clearBrands } from '../../redux/sideBarSlice/sideBarSlice';
import { routeConstants } from '../../models/enums/EConstants';
import { useLocation } from '../../hooks/useLocation';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { INavTreeItem } from '../../models/interfaces/RTKQuery/INavTree';
import { TCategories } from '../../redux/categoriesSlice/categoriesSlice';

const QuickNav = ({
    data,
}: {
    data: {
        tree: INavTreeItem[];
        flatTree: TCategories;
    };
}) => {
    const location = useLocation();
    const dropdownDisplay = useSelector(getDropdownDisplay);
    const router = useRouter();

    const dispatch = useDispatch();

    useEffect(() => {
        const navigateOnClick = (e: MouseEvent) => {
            const idAttribute = (e.target as HTMLElement).getAttribute('id');

            if (idAttribute) {
                const idSplit = idAttribute.split('_');
                if (idSplit[0] === 'navigate') {
                    router.push(
                        idSplit[1] === 'category'
                            ? routeConstants.CATEGORIES_ROUTE + `/${idSplit[2]}`
                            : routeConstants.PRODUCT_LIST_ROUTE + `/${idSplit[2]}`,
                    );
                    dispatch(switchModalDisplay());
                    dispatch(clearBrands(location));
                    document.body.style.overflow = 'auto';
                }
            }
        };

        const closeOnPress = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && dropdownDisplay === 'block') {
                dispatch(switchModalDisplay());
            }
        };

        window.addEventListener('click', navigateOnClick);
        window.addEventListener('keydown', closeOnPress);

        return () => {
            window.removeEventListener('click', navigateOnClick);
            window.removeEventListener('keydown', closeOnPress);
        };
    }, [dispatch, dropdownDisplay, location, router]);

    const closeOnClick = () => {
        dispatch(switchModalDisplay());
        dispatch(clearBrands(location));
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <div className={styles.close} onClick={closeOnClick}>
                &times;
            </div>
            <DropdownMenu.Root open modal={false}>
                <DropdownMenu.Trigger style={{ display: 'none' }}></DropdownMenu.Trigger>
                <DropdownMenu.Portal container={document.getElementById('cont')}>
                    <DropdownMenu.Content className={styles.content}>
                        {data &&
                            data.tree[0].children?.map((child1, i) => (
                                <DropdownMenu.Sub key={i}>
                                    <DropdownMenu.SubTrigger className={styles.item}>
                                        <div
                                            id={
                                                child1.children
                                                    ? `navigate_category_${child1.id} `
                                                    : `navigate_products_${child1.id}`
                                            }
                                        >
                                            <div className={styles.symbol}>&#9658;</div>
                                            {child1.name}
                                        </div>
                                    </DropdownMenu.SubTrigger>

                                    <DropdownMenu.Portal container={document.getElementById('cont')}>
                                        <DropdownMenu.SubContent className={styles.content}>
                                            {child1.children?.map((child2) => (
                                                <DropdownMenu.Sub key={child2.id}>
                                                    <DropdownMenu.SubTrigger className={styles.item}>
                                                        <div
                                                            id={
                                                                child2.children
                                                                    ? `navigate_category_${child2.id} `
                                                                    : `navigate_products_${child2.id}`
                                                            }
                                                        >
                                                            <div className={styles.symbol}>&#9679;</div>
                                                            {child2.name}
                                                        </div>
                                                    </DropdownMenu.SubTrigger>

                                                    <DropdownMenu.Portal container={document.getElementById('cont')}>
                                                        <DropdownMenu.SubContent className={styles.content}>
                                                            {child2.children?.map((child3) => (
                                                                <DropdownMenu.Sub key={child3.id}>
                                                                    <DropdownMenu.SubTrigger className={styles.item}>
                                                                        <div
                                                                            id={
                                                                                child3.children
                                                                                    ? `navigate_category_${child3.id} `
                                                                                    : `navigate_products_${child3.id}`
                                                                            }
                                                                        >
                                                                            <div className={styles.symbol}>&#9679;</div>
                                                                            {child3.name}
                                                                        </div>
                                                                    </DropdownMenu.SubTrigger>

                                                                    <DropdownMenu.Portal
                                                                        container={document.getElementById('cont')}
                                                                    >
                                                                        <DropdownMenu.SubContent
                                                                            className={styles.content}
                                                                        >
                                                                            {child3?.children?.map((child4) => (
                                                                                <DropdownMenu.Item
                                                                                    key={child4.id}
                                                                                    className={styles.item}
                                                                                >
                                                                                    <div
                                                                                        id={
                                                                                            child4.children
                                                                                                ? `navigate_category_${child4.id} `
                                                                                                : `navigate_products_${child4.id}`
                                                                                        }
                                                                                    >
                                                                                        <div className={styles.symbol}>
                                                                                            &#9679;
                                                                                        </div>
                                                                                        {child4.name}
                                                                                    </div>
                                                                                </DropdownMenu.Item>
                                                                            ))}
                                                                        </DropdownMenu.SubContent>
                                                                    </DropdownMenu.Portal>
                                                                </DropdownMenu.Sub>
                                                            ))}
                                                        </DropdownMenu.SubContent>
                                                    </DropdownMenu.Portal>
                                                </DropdownMenu.Sub>
                                            ))}
                                        </DropdownMenu.SubContent>
                                    </DropdownMenu.Portal>
                                </DropdownMenu.Sub>
                            ))}
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>
        </>
    );
};

export default QuickNav;

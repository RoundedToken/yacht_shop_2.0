import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropdownItem from './components/DropdownItem';
import styles from './QuickNav.module.scss';
import { useCurrentLocale } from '../../locales/client';
import { getDropdownDisplay } from '../../redux/stylesSlice/selectors';
import { useRouter } from 'next/navigation';
import { useFetchAllIdQuery } from '../../redux/services/navTree';
import { switchModalDisplay } from '../../redux/stylesSlice/stylesSlice';
import { clearBrands } from '../../redux/sideBarSlice/sideBarSlice';
import { routeConstants } from '../../models/enums/EConstants';
import { useLocation } from '../../hooks/useLocation';

const QuickNav = () => {
    const location = useLocation();
    const lang = useCurrentLocale();
    const dropdownRef = useRef<HTMLUListElement>(null);
    const dropdownDisplay = useSelector(getDropdownDisplay);
    const router = useRouter();
    const { data } = useFetchAllIdQuery(lang);
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
            <div className={styles.categoryDropdown}>
                <ul ref={dropdownRef} className={styles.nestedDropdown}>
                    {data &&
                        data.tree[0].children?.map((child1) => (
                            <DropdownItem styles={styles} treeItem={child1} key={child1.id} level={1}>
                                {child1.children?.map((child2) => (
                                    <DropdownItem styles={styles} treeItem={child2} key={child2.id} level={2}>
                                        {child2.children?.map((child3) => (
                                            <DropdownItem styles={styles} treeItem={child3} key={child3.id} level={3}>
                                                {child3.children?.map((child4) => (
                                                    <DropdownItem
                                                        styles={styles}
                                                        treeItem={child4}
                                                        key={child4.id}
                                                        level={4}
                                                    ></DropdownItem>
                                                ))}
                                            </DropdownItem>
                                        ))}
                                    </DropdownItem>
                                ))}
                            </DropdownItem>
                        ))}
                </ul>
            </div>
        </>
    );
};

export default QuickNav;

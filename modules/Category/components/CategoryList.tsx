import React, { FC } from 'react';
import CategoryItem from './CategoryItem';
import { ICategoryList } from '../interfaces/ICategoryList';
import { getBrands, getCategorySorting } from '../../../redux/sideBarSlice/selectors';
import { useSelector } from 'react-redux';
import { brandFilter } from '../helpers/brandFilter';
import { INavTreeItem } from '../../../models/interfaces/RTKQuery/INavTree';
import { categorySort } from '../helpers/categorySort';

const CategoryList: FC<ICategoryList> = ({ categoryChildren, styles }) => {
    const brands = useSelector(getBrands);
    const filteredChildren = brandFilter(categoryChildren, brands) as INavTreeItem[];
    const sortRules = useSelector(getCategorySorting);
    const sortedChildren = categorySort(filteredChildren, sortRules);

    return (
        <div className={styles.categoryListContainer}>
            {sortedChildren.map((child) => (
                <CategoryItem
                    key={child.id}
                    id={child.id}
                    hasChildren={child.children ? true : false}
                    styles={styles}
                    src={child.src}
                >
                    {child.name}
                </CategoryItem>
            ))}
        </div>
    );
};

export default CategoryList;

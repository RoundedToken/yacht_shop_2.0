import React, { FC } from 'react';
import CategoryItem from './CategoryItem';
import { ICategoryList } from '../interfaces/ICategoryList';

const CategoryList: FC<ICategoryList> = ({ categoryChildren, styles }) => {
    // const brands = useSelector((state: RootState) => state.sideBarSlice.brands);
    // const filteredChildren = brandFilter(categoryChildren, brands) as INavTreeItem[];
    // const sortRules = useSelector((state: RootState) => state.sideBarSlice.categorySorting);
    // const sortedChildren = categorySort(filteredChildren, sortRules);

    return (
        <div className={styles.categoryListContainer}>
            {/* {sortedChildren.map((child) => ( */}
            {categoryChildren.map((child) => (
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

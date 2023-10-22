import { NavNode } from './buildHierarchy';

export function formattingBrands(arr: NavNode[]) {
    for (let item of arr) {
        item.brands = Array.from(new Set(item.brands.flat(Infinity)));

        //Create src
        item.src = `/images/subr_webp/${item.id}.webp`;

        if (item.children) {
            formattingBrands(item.children); //Recursion
        }
    }
    arr.sort((a, b) => (a.name < b.name ? -1 : b.name < a.name ? 1 : 0));
}

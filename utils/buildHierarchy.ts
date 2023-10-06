import { TGroupedNavTreeData } from '../app/api/navTree/route';

export interface NavNode {
    id: number;
    parentId: number;
    name: string;
    routes: Route[];
    brands: string[];
    productCount?: number;
    children?: NavNode[];
    parent?: NavNode;
    src?: string;
}

interface Route {
    id: number;
    name: string;
    hasChildren?: boolean;
}

export function buildHierarchy(arr: TGroupedNavTreeData) {
    var roots: NavNode[] = [],
        children: { [key: number]: NavNode[] } = {};

    // find the top level nodes and hash the children based on parent
    for (var i = 0, len = arr.length; i < len; ++i) {
        var item = arr[i],
            p = item.parentid,
            target = p === null ? roots : children[p] || (children[p] = []);

        target.push({
            id: item.id,
            parentId: item.parentid,
            routes: [{ id: item.id, name: item.name }],
            name: item.name,
            brands: item.brands,
            productCount: item.productCount,
        });
    }

    // function to recursively build the tree
    var findChildren = function (parent: NavNode) {
        if (children[parent.id]) {
            parent.children = children[parent.id];
            parent.routes.forEach((r) => (r.hasChildren = true)); //Add hasChildren for routes
            children[parent.id].forEach((item) => {
                if (item.brands) {
                    //@ts-ignore
                    parent.brands.push(item.brands);
                }
                item.routes.unshift(...parent.routes); //Create routes
            });
            for (let i = 0, len = parent.children.length; i < len; ++i) {
                findChildren(parent.children[i]);
            }
        }
    };

    // enumerate through to handle the case where there are multiple roots
    for (let i = 0, len = roots.length; i < len; ++i) {
        findChildren(roots[i]);
    }

    return roots;
}

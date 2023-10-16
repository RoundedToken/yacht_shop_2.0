export interface IBrandSelectItem {
    styles: {
        readonly [key: string]: string;
    };
    selectedBrands: string[];
    brand: string;
}

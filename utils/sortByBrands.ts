export function sortByBrands(brands: string[], selectedBrands: string[]) {
    const uniqueBrands = Array.from(new Set(brands));

    return uniqueBrands.sort((a, b) =>
        selectedBrands.includes(a) && !selectedBrands.includes(b)
            ? -1
            : !selectedBrands.includes(a) && selectedBrands.includes(b)
            ? 1
            : a > b
            ? 1
            : b > a
            ? -1
            : 0,
    );
}

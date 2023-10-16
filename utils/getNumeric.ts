export function getNumeric(value: string | undefined): number | undefined {
    if (value === undefined) {
        return undefined;
    }

    const parsed = Number(value);

    if (!Number.isNaN(parsed)) {
        return parsed;
    }

    return undefined;
}

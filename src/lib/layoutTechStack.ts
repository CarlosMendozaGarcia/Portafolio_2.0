export type TechInput = {
    name: string;
    proficiency: number;
    type: string;
};

export type TechLayout = TechInput & {
    colStart: number;
    rowStart: number;
    colSpan: number;
    rowSpan: number;
};

export default function layoutTechStack(
    items: TechInput[],
    gridColumns = 20,
    gridRows = 10
): TechLayout[] {
    if (items.length === 0) return [];
    return splitRect(items, 0, 0, gridColumns, gridRows);
}

function splitRect(
    items: TechInput[],
    x: number,
    y: number,
    w: number,
    h: number
): TechLayout[] {
    if (items.length === 1) {
        // +1 porque grid-column-start/grid-row-start son 1-indexados en CSS
        return [{ ...items[0], colStart: x + 1, rowStart: y + 1, colSpan: w, rowSpan: h }];
    }

    const total = items.reduce((sum, t) => sum + t.proficiency, 0);

    // Buscamos el punto de corte que reparte el peso lo más parejo posible
    let bestIndex = 0;
    let bestDiff = Infinity;
    let acc = 0;
    for (let i = 0; i < items.length - 1; i++) {
        acc += items[i].proficiency;
        const diff = Math.abs(acc - total / 2);
        if (diff < bestDiff) {
            bestDiff = diff;
            bestIndex = i;
        }
    }

    const groupA = items.slice(0, bestIndex + 1);
    const groupB = items.slice(bestIndex + 1);
    const weightA = groupA.reduce((s, t) => s + t.proficiency, 0);
    const weightB = groupB.reduce((s, t) => s + t.proficiency, 0);

    if (w >= h && w > 1) {
        const colsA = clamp(Math.round((w * weightA) / (weightA + weightB)), 1, w - 1);
        return [
            ...splitRect(groupA, x, y, colsA, h),
            ...splitRect(groupB, x + colsA, y, w - colsA, h),
        ];
    } else if (h > 1) {
        const rowsA = clamp(Math.round((h * weightA) / (weightA + weightB)), 1, h - 1);
        return [
            ...splitRect(groupA, x, y, w, rowsA),
            ...splitRect(groupB, x, y + rowsA, w, h - rowsA),
        ];
    }

    // Caso extremo: se quedó sin espacio para seguir dividiendo (más items que celdas)
    return [{ ...groupA[0], colStart: x + 1, rowStart: y + 1, colSpan: 1, rowSpan: 1 }];
}

function clamp(n: number, min: number, max: number) {
    return Math.min(Math.max(n, min), max);
}
import type { ShapeDefinition } from '../types';

const VIEWBOX = "0 0 100 100";

export const FRAMES: Record<string, ShapeDefinition> = {
    none: {
        id: 'none',
        viewBox: VIEWBOX,
        path: "", // Empty path
    },
    simple: {
        id: 'simple',
        viewBox: VIEWBOX,
        path: "M 2,2 H 98 V 98 H 2 Z M 5,5 V 95 H 95 V 5 Z", // Thick border
    },
    corners: {
        id: 'corners',
        viewBox: VIEWBOX,
        path: "M 2,2 H 20 M 2,2 V 20 M 98,2 H 80 M 98,2 V 20 M 2,98 H 20 M 2,98 V 80 M 98,98 H 80 M 98,98 V 80",
    }
};

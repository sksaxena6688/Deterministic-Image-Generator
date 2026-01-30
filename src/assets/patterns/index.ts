import type { ShapeDefinition } from '../types';

const VIEWBOX = "0 0 100 100";

export const PATTERNS: Record<string, ShapeDefinition> = {
    solid: {
        id: 'solid',
        viewBox: VIEWBOX,
        path: "M 0,0 H 100 V 100 H 0 Z", // Full Fill
    },
    stripes: {
        id: 'stripes',
        viewBox: VIEWBOX,
        path: "M 0,0 H 100 V 10 H 0 Z M 0,20 H 100 V 30 H 0 Z M 0,40 H 100 V 50 H 0 Z M 0,60 H 100 V 70 H 0 Z M 0,80 H 100 V 90 H 0 Z",
    },
    dots: {
        id: 'dots',
        viewBox: VIEWBOX,
        // Simple 3x3 grid of dots for flat pattern
        path: "M 20,20 h 10 v 10 h -10 z M 50,20 h 10 v 10 h -10 z M 80,20 h 10 v 10 h -10 z M 20,50 h 10 v 10 h -10 z M 50,50 h 10 v 10 h -10 z M 80,50 h 10 v 10 h -10 z M 20,80 h 10 v 10 h -10 z M 50,80 h 10 v 10 h -10 z M 80,80 h 10 v 10 h -10 z",
    }
};

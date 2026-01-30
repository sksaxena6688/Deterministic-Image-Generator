import type { ShapeDefinition } from '../types';

const VIEWBOX = "0 0 100 100";

export const SHAPES: Record<string, ShapeDefinition> = {
    circle: {
        id: 'circle',
        viewBox: VIEWBOX,
        path: "M 50, 50 m -40, 0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0",
    },
    square: {
        id: 'square',
        viewBox: VIEWBOX,
        path: "M 10,10 H 90 V 90 H 10 Z",
    },
    triangle: {
        id: 'triangle',
        viewBox: VIEWBOX,
        path: "M 50,15 L 90,85 H 10 Z",
    },
    arch: {
        id: 'arch',
        viewBox: VIEWBOX,
        path: "M 10,90 V 50 A 40,40 0 0,1 90,50 V 90 Z",
    },
    pill: {
        id: 'pill',
        viewBox: VIEWBOX,
        path: "M 20,50 A 30,30 0 0,1 80,50 A 30,30 0 0,1 20,50 Z",
        defaultRotation: 0,
    }
};

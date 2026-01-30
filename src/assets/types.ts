export interface ShapeDefinition {
    id: string;
    viewBox: string;
    path: string; // SVG path data
    defaultRotation?: number;
}

export interface Palette {
    id: string;
    name: string;
    colors: [string, string, string]; // Exactly 3 colors
}

export type ShapeType = 'circle' | 'square' | 'triangle' | 'arch' | 'pill';
export type FrameType = 'none' | 'simple' | 'corners';
export type PatternType = 'solid' | 'stripes' | 'dots';
export type DetailLevel = 'minimal' | 'decorated' | 'complex';
export type ColorTheme = 'ocean' | 'sunset' | 'forest' | 'mono';

// INPUT: What the user controls
export interface UserOptions {
    baseShape: ShapeType;
    overlayShape: ShapeType;
    frame: FrameType;
    pattern: PatternType;
    detailLevel: DetailLevel;
    theme: ColorTheme;
    showBorder: boolean; // Maybe redundant if Frame is 'none'? Keep for backward compat or strict border toggle
    inverted: boolean;
}

// OUTPUT: What the renderer sees (Strictly deterministic)
export interface RenderState {
    viewBox: string;
    background: string; // Hex code
    layers: RenderLayer[];
}

export interface RenderLayer {
    id: string;
    type: 'path' | 'rect' | 'circle';
    d?: string; // For paths
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    r?: number; // For circles
    fill: string; // Hex code
    stroke?: string; // Hex code
    strokeWidth?: number;
    rotation?: number;
    opacity?: number;
    zIndex: number;
}

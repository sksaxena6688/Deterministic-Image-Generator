import type { UserOptions, RenderState, RenderLayer } from './types';
import { validateOptions } from './rules';
import { SHAPES } from '../assets/shapes/index';
import { FRAMES } from '../assets/frames/index';
import { PATTERNS } from '../assets/patterns/index';
import { PALETTES } from '../assets/palettes';

export function generateImage(options: UserOptions): RenderState {
    const validation = validateOptions(options);
    if (!validation.isValid) {
        return getErrorState();
    }

    const palette = PALETTES[options.theme];
    const baseDef = SHAPES[options.baseShape];
    const overlayDef = SHAPES[options.overlayShape];
    const frameDef = FRAMES[options.frame];
    const patternDef = PATTERNS[options.pattern];

    const layers: RenderLayer[] = [];

    // STRICT 3-COLOR MAPPING
    // 0: Primary (Base Pattern)
    // 1: Secondary (Overlay)
    // 2: Accent (Background/Frame)

    // Inverted logic swaps Primary/Secondary
    const colorPrimary = options.inverted ? palette.colors[1] : palette.colors[0];
    const colorSecondary = options.inverted ? palette.colors[0] : palette.colors[1];
    const colorAccent = palette.colors[2];

    // LAYER 1: Background (Pattern)
    // To keep it flat, "Pattern" is actually the Base Shape's fill texture, 
    // OR we can make the background the pattern.
    // Let's make the 'Base Shape' itself filled with the pattern? 
    // Or render a pattern layer behind everything?
    // Let's try: Background is Accent. Pattern layer is on top of BG, clipped to Base?
    // User Request: "Flat visual style". 
    // Let's implement Pattern as a Rect behind Base, or masked by Base.
    // Simpler: Pattern is a full-size layer at zIndex 5, behind Base (zIndex 10).

    // Actually, let's bind Pattern to the Base Shape.
    // But SVG simple paths don't handle patterns easily without <defs>.
    // To keep it simple and declarative:
    // We will render the Pattern as a clipped layer or just a background layer if 'complex'.
    // Let's make Pattern a background layer (zIndex 5) with colorPrimary.

    if (options.pattern !== 'solid') {
        layers.push({
            id: 'pattern',
            type: 'path',
            d: patternDef.path,
            fill: colorPrimary,
            opacity: 0.2, // Subtle pattern on background
            zIndex: 5
        });
    }

    // LAYER 2: Base Shape
    layers.push({
        id: 'base',
        type: 'path',
        d: baseDef.path,
        fill: colorPrimary,
        zIndex: 10,
    });

    // LAYER 3: Overlay (if not minimal)
    if (options.detailLevel !== 'minimal') {
        layers.push({
            id: 'overlay',
            type: 'path',
            d: overlayDef.path,
            fill: colorSecondary,
            zIndex: 20,
            opacity: 0.9,
        });
    }

    // LAYER 4: Frame (if selected)
    if (options.frame !== 'none') {
        layers.push({
            id: 'frame',
            type: 'path',
            d: frameDef.path,
            fill: colorAccent, // Frame is accent
            zIndex: 30
        });
    }

    // Border Toggle (Legacy support, maybe merge with Frame?)
    // If Frame is 'none' AND showBorder is true, show a simple stroke?
    // Strict rules: "Invalid combinations blocked".
    // Let's say: showBorder is independent.
    if (options.showBorder) {
        layers.push({
            id: 'border',
            type: 'rect',
            x: 0, y: 0, width: 100, height: 100,
            fill: 'none',
            stroke: colorAccent,
            strokeWidth: options.frame === 'none' ? 2 : 0, // Disable thin border if Frame exists
            zIndex: 35
        });
    }

    return {
        viewBox: "0 0 100 100",
        background: colorAccent, // Background is Accent Color
        layers
    };
}

function getErrorState(): RenderState {
    return {
        viewBox: "0 0 100 100",
        background: '#000000',
        layers: [{
            id: 'error',
            type: 'path',
            d: "M 0,0 L 100,100 M 100,0 L 0,100",
            fill: 'none',
            stroke: '#FF0000',
            zIndex: 999
        }]
    };
}

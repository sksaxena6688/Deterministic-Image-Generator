import { generateImage } from './src/logic/engine';
import { UserOptions } from './src/logic/types';

// Simple equality check
function isEqual(a: unknown, b: unknown): boolean {
    return JSON.stringify(a) === JSON.stringify(b);
}

const TEST_OPTIONS: UserOptions = {
    baseShape: 'circle',
    overlayShape: 'square',
    frame: 'simple',      // Added Frame
    pattern: 'dots',      // Added Pattern
    detailLevel: 'decorated',
    theme: 'ocean',
    showBorder: true,
    inverted: false
};

console.log("Running Determinism Check...");

const result1 = generateImage(TEST_OPTIONS);
const result2 = generateImage(TEST_OPTIONS);

if (isEqual(result1, result2)) {
    console.log("PASS: Determinism verified. Output is identical for same input.");
} else {
    console.error("FAIL: Determinism failed!");
    console.error("Result 1:", JSON.stringify(result1));
    console.error("Result 2:", JSON.stringify(result2));
    process.exit(1);
}

console.log("Running Constraint Check (Max 3 Colors)...");
const colors = new Set<string>();
if (result1.background) colors.add(result1.background);
result1.layers.forEach(l => {
    if (l.fill && l.fill !== 'none') colors.add(l.fill);
    if (l.stroke && l.stroke !== 'none') colors.add(l.stroke);
});

console.log(`Unique colors found: ${colors.size} (${Array.from(colors).join(', ')})`);

if (colors.size <= 3) {
    console.log("PASS: Color constraint verified (<= 3 colors).");
} else {
    console.error("FAIL: Too many colors!");
    process.exit(1);
}

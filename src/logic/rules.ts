import type { UserOptions } from './types';
import type { ValidationResult, ConflictConfig } from './rules.types';

// Example strict rules:
// 1. Circle Base cannot have Square Overlay (Constraint Example)
// 2. Minimal detail level cannot be used with 'Mono' theme (Arbitrary Rule)

const CONFLICTS: ConflictConfig[] = [
    {
        baseShape: 'circle',
        forbiddenOverlays: ['square'],
    },
    {
        baseShape: 'triangle',
        forbiddenOverlays: ['circle'],
    }
];

export function validateOptions(options: UserOptions): ValidationResult {
    // Rule 1: Check Conflicts
    const conflict = CONFLICTS.find(c => c.baseShape === options.baseShape);
    if (conflict && conflict.forbiddenOverlays.includes(options.overlayShape)) {
        return {
            isValid: false,
            error: `Invalid Combination: Cannot use ${options.overlayShape} overlay with ${options.baseShape} base.`,
        };
    }

    // Rule 2: Minimal detail + Mono theme is too simple (Example Rule)
    if (options.detailLevel === 'minimal' && options.theme === 'mono') {
        return {
            isValid: false,
            error: `Invalid Combination: Mono theme requires more than 'minimal' detail.`,
        };
    }

    return { isValid: true };
}

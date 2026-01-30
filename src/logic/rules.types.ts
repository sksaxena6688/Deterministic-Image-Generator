import type { UserOptions } from './types';

export type ValidationResult = {
    isValid: boolean;
    error?: string;
};

// A rule serves as a constraint checker
export interface Rule {
    id: string;
    description: string;
    validate: (options: UserOptions) => ValidationResult;
}

// Configuration for invalid combinations (e.g. Circle base cannot have Square overlay)
export interface ConflictConfig {
    baseShape: string;
    forbiddenOverlays: string[];
}

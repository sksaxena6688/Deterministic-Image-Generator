import type { Palette } from './types';

export const PALETTES: Record<string, Palette> = {
    ocean: {
        id: 'ocean',
        name: 'Ocean',
        colors: ['#001f3f', '#0074D9', '#7FDBFF'], // Navy, Blue, Aqua
    },
    sunset: {
        id: 'sunset',
        name: 'Sunset',
        colors: ['#85144b', '#FF4136', '#FFDC00'], // Maroon, Red, Yellow
    },
    forest: {
        id: 'forest',
        name: 'Forest',
        colors: ['#04290c', '#2ECC40', '#01FF70'], // Dark Green, Green, Lime
    },
    mono: {
        id: 'mono',
        name: 'Monochrome',
        colors: ['#111111', '#AAAAAA', '#DDDDDD'], // Black, Gray, Light Gray
    }
};

// This file defines the Framer Property Controls for the ImageGenerator component.
// It is designed to be used in a Framer environment.

// Mocking the types for reference if 'framer' is not installed
// In Framer, you would: import { ControlType } from "framer"

export const propertyControls = {
    baseShape: {
        type: "Enum", // ControlType.Enum
        options: ["circle", "square", "triangle", "arch", "pill"],
        optionTitles: ["Circle", "Square", "Triangle", "Arch", "Pill"],
        defaultValue: "circle",
        title: "Base Shape"
    },
    overlayShape: {
        type: "Enum",
        options: ["circle", "square", "triangle", "arch", "pill"],
        optionTitles: ["Circle", "Square", "Triangle", "Arch", "Pill"],
        defaultValue: "triangle",
        title: "Overlay Shape"
    },
    theme: {
        type: "Enum",
        options: ["ocean", "sunset", "forest", "mono"],
        optionTitles: ["Ocean", "Sunset", "Forest", "Mono"],
        defaultValue: "ocean",
        title: "Theme"
    },
    detailLevel: {
        type: "Enum",
        options: ["minimal", "decorated", "complex"],
        optionTitles: ["Minimal", "Decorated", "Complex"],
        defaultValue: "decorated",
        title: "Detail Level"
    },
    showBorder: {
        type: "Boolean", // ControlType.Boolean
        defaultValue: true,
        title: "Show Border"
    },
    inverted: {
        type: "Boolean",
        defaultValue: false,
        title: "Inverted"
    }
};

/* eslint-disable */
import { useMemo } from 'react';
import { generateImage } from './logic/engine';
import type { UserOptions } from './logic/types';
import { GeneratorCanvas } from './renderer/GeneratorCanvas';

const defaultProps: UserOptions = {
    baseShape: 'circle',
    overlayShape: 'triangle',
    frame: 'none',
    pattern: 'solid',
    detailLevel: 'decorated',
    theme: 'ocean',
    showBorder: true,
    inverted: false,
};

export function FramerImageGenerator(props: UserOptions) {
    const renderState = useMemo(() => generateImage(props), [props]);

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <GeneratorCanvas
                renderState={renderState}
                size={undefined}
                className="framer-generator-svg"
            />
            <style>{`
                .framer-generator-svg {
                    width: 100%;
                    height: 100%;
                    max-width: 100%;
                    max-height: 100%;
                    display: block;
                }
            `}</style>
        </div>
    );
}

export const propertyControls = {
    baseShape: {
        type: "Enum",
        title: "Base Shape",
        options: ["circle", "square", "triangle", "arch", "pill"],
        optionTitles: ["Circle", "Square", "Triangle", "Arch", "Pill"],
        defaultValue: "circle"
    },
    overlayShape: {
        type: "Enum",
        title: "Overlay Shape",
        options: ["circle", "square", "triangle", "arch", "pill"],
        optionTitles: ["Circle", "Square", "Triangle", "Arch", "Pill"],
        defaultValue: "triangle"
    },
    frame: {
        type: "Enum",
        title: "Frame",
        options: ["none", "simple", "corners"],
        optionTitles: ["None", "Simple", "Corners"],
        defaultValue: "none"
    },
    pattern: {
        type: "Enum",
        title: "Pattern",
        options: ["solid", "stripes", "dots"],
        optionTitles: ["Solid", "Stripes", "Dots"],
        defaultValue: "solid"
    },
    theme: {
        type: "Enum",
        title: "Theme",
        options: ["ocean", "sunset", "forest", "mono"],
        optionTitles: ["Ocean", "Sunset", "Forest", "Mono"],
        defaultValue: "ocean"
    },
    detailLevel: {
        type: "Enum",
        title: "Detail Level",
        options: ["minimal", "decorated", "complex"],
        optionTitles: ["Minimal", "Decorated", "Complex"],
        defaultValue: "decorated"
    },
    showBorder: {
        type: "Boolean",
        title: "Show Border",
        defaultValue: true
    },
    inverted: {
        type: "Boolean",
        title: "Inverted",
        defaultValue: false
    }
};

(FramerImageGenerator as any).propertyControls = propertyControls;

FramerImageGenerator.defaultProps = defaultProps;

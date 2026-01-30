import React from 'react';
import type { RenderState, RenderLayer } from '../logic/types';

interface GeneratorCanvasProps {
    renderState: RenderState;
    size?: number;
    className?: string;
}

const RenderLayerItem: React.FC<{ layer: RenderLayer }> = ({ layer }) => {
    const commonProps = {
        fill: layer.fill,
        stroke: layer.stroke,
        strokeWidth: layer.strokeWidth,
        opacity: layer.opacity,
        transform: layer.rotation ? `rotate(${layer.rotation}, 50, 50)` : undefined, // Rotate around center 50,50
        // Note: Transform origin is crucial for rotation checking
    };

    switch (layer.type) {
        case 'path':
            return <path d={layer.d} {...commonProps} />;
        case 'rect':
            return (
                <rect
                    x={layer.x}
                    y={layer.y}
                    width={layer.width}
                    height={layer.height}
                    {...commonProps}
                />
            );
        case 'circle':
            return (
                <circle
                    cx={layer.x}
                    cy={layer.y}
                    r={layer.r}
                    {...commonProps}
                />
            );
        default:
            return null;
    }
};

export const GeneratorCanvas: React.FC<GeneratorCanvasProps> = ({ renderState, size = 300, className }) => {
    return (
        <svg
            viewBox={renderState.viewBox}
            width={size}
            height={size}
            className={className}
            style={{
                backgroundColor: renderState.background,
                // Ensure crisp edges for flat design
                shapeRendering: 'geometricPrecision',
            }}
            xmlns="http://www.w3.org/2000/svg"
        >
            {renderState.layers
                .sort((a, b) => a.zIndex - b.zIndex)
                .map((layer) => (
                    <RenderLayerItem key={layer.id} layer={layer} />
                ))}
        </svg>
    );
};

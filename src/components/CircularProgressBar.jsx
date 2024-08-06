import React from 'react';

// Helper function to calculate circle properties
const calculateCircleProperties = (sqSize, strokeWidth, percentage) => {
    const radius = (sqSize - strokeWidth) / 2;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percentage) / 100;
    return { radius, dashArray, dashOffset };
};

const CircularProgressBar = ({ sqSize = 112, percentage = 70, strokeWidth = 15 }) => {
    const { radius, dashArray, dashOffset } = calculateCircleProperties(sqSize, strokeWidth, percentage);
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    const center = sqSize / 2;

    return (
        <svg
            className="mx-auto"
            width={sqSize}
            height={sqSize}
            viewBox={viewBox}
            fill="none"
        >
            {/* Background circle */}
            <circle
                className="stroke-[#293266]"
                cx={center}
                cy={center}
                r={radius}
                strokeWidth={strokeWidth}
            />
            {/* Animated progress circle */}
            <circle
                className="stroke-[--secondary-bg-color] progress-circle"
                cx={center}
                cy={center}
                r={radius}
                strokeWidth={strokeWidth}
                transform={`rotate(-90 ${center} ${center})`}
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashArray, // Start with full offset
                    strokeLinecap: 'round',
                    // Use CSS variables for animation
                    '--dashArray': dashArray,
                    '--dashOffset': dashOffset,
                }}
            />
        </svg>
    );
};

export default CircularProgressBar;
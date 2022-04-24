import React from 'react';

export default function Numbers(prop) {
    return (
        <div style={{ backgroundColor: prop.bool ? 'green' : 'red' }}>
            <p style={{ fontSize: `${prop.fontSize}px` }}>
                {prop.numbers
                    .sort((a, b) => {
                        return a - b;
                    })
                    .map((val, i) => {
                        return i < prop.numbers.length - 1 ? val + ', ' : val;
                    })}
            </p>
        </div>
    );
}

import React from 'react';
import Numbers from './Components/Numbers';

export default function App() {
    const data = [
        { numbers: [56, 8, 3454, 12, 569, 5367, 3426, 569, 123, 45, 47, 56789], fontSize: 20, bool: false },
        { numbers: [7, 4, 7, 8, 5, 23, 876, 8, 34, 9, 6, 3325, 1], fontSize: 10, bool: true },
    ];

    return (
        <div>
            {data.map((val, i) => {
                return <Numbers key={i} numbers={val.numbers} bool={val.bool} fontSize={val.fontSize} />;
            })}
        </div>
    );
}

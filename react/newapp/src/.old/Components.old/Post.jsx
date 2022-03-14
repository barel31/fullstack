import React from 'react';

export default function Post(props) {
    return (
        <div className="MyBorder" style={{ border: '1px solid black' }}>
            <h1>name: {props.name}</h1>
            <h2>price: {props.price}</h2>
            <button style={{ color: 'red' }} onClick={() => {props.delete(props.index)}}>X</button>
        </div>
    );
}

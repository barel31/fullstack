import React from 'react';
import Edit from './Edit';

export default function Post(props) {
    return (
        <div>
            <h1>post</h1>
            <h2>name:{props.name}</h2>
            <h2>price:{props.price}</h2>
            <Edit />
        </div>
    );
}

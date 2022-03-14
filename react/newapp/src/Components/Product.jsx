import React from 'react';
import './Product.css';

export default function Product(props) {
    return (
        <div className="product">
            <p>
                {props.name} price = {props.price} &nbsp;
            <button
                onClick={() => {
                    props.add(props.index);
                }}
            >
                +
            </button>
            </p>
        </div>
    );
}

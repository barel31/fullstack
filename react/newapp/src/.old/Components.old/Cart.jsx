import React, { useState } from 'react';
import '../App.css';
import './Cart.css';

export default function Cart(props) {
    const sum = () => {
        let summary = 0;
        props.list.map((e, i) => {
            summary += e.price | 0;
        });
        return summary;
    };

    return (
        <div className='cart'>
            <div className='left'>
                <h3>Cart</h3>
                <img className='icons' src='./cart.png' alt='cart' />
            </div>
            <div className='right'>
                <ol>
                    {props.list.map((element, i) => {
                        return (
                            <li key={i}>
                                {element.name} {element.price}
                            </li>
                        );
                    })}
                </ol>
                <h3>Total = {sum()}</h3>
                <button onClick={() => {props.clear()}}>Buy</button>
            </div>
        </div>
    );
}

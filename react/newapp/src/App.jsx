import React, { useState } from 'react';
import Product from './Components/Product';
import Cart from './Components/Cart';
import './App.css';

const PAGE_PRODUCT = true;
const PAGE_CART = false;

export default function App() {
    const products = [
        { name: 'Computer', price: '100' },
        { name: 'Paper', price: '1' },
        { name: 'Pen', price: '10' },
    ];

    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCT);

    const add = (index) => {
        // todo sum the repeated products
        setCart([...cart, products[index]]);
    };

    const cartPage = () => {
        return page === PAGE_CART ? <Cart list={cart} clear={clearCart} /> : null;
    };

    const clearCart = () => {
        setCart([]);
    };

    const productPage = () => {
        return page === PAGE_PRODUCT ? (
            <>
                <div className='productsList'>
                    <h2>List of Products</h2>
                    {products.map((val, i) => {
                        return <Product key={i} name={val.name} price={val.price} add={add} index={i} />;
                    })}
                </div>
                <div className='emptyDiv'></div>
            </>
        ) : null;
    };

    return (
        <div className='App'>
            <div className='head'>
                <img
                    src='./home.png'
                    alt='home'
                    className='icons'
                    onClick={() => {
                        setPage(PAGE_PRODUCT);
                    }}
                />
                <h1>SV-SHOP</h1>
                <img
                    src='./cart.png'
                    alt='cart'
                    className='icons'
                    onClick={() => {
                        setPage(PAGE_CART);
                    }}
                />
            </div>
            <div className='middle'>
                {cartPage()}
                {productPage()}
            </div>
        </div>
    );
}

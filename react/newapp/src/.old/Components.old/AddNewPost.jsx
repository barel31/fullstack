import React, { useState } from 'react';
import './AddNewPost.css';

export default function AddNewPost(props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    // const changeName = (element)=>{
    //     element.target.value
    //     setName(element.target.value)
    // }

    const validName = () => {
        if (name.length > 4) {
            return <p style={{ color: 'red' }}>ERROR</p>;
        } else {
            return null;
        }
    };

    const validPrice = () => {
        if (Number(price) > 100 || Number(price) < 0) {
            return <p style={{ color: 'red' }}>ERROR</p>;
        } else {
            return null;
        }
    };

    return (
        <div className="MainAdd">
            <h1>Add New Post</h1>
            <input
                onChange={(element) => {
                    setName(element.target.value);
                }}
                type="text"
                placeholder="post name"
            />
            <br />
            {validName()}
            <input
                onChange={(element) => {
                    setPrice(element.target.value);
                }}
                type="number"
                placeholder="post price"
            />
            <br />
            {validPrice()}
            <button
                onClick={() => {
                    props.add(name, price);
                }}
            >
                Create
            </button>
        </div>
    );
}
// name.length <= 4
// 1 <> 100

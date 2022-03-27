import React, { useState } from 'react';
import { Consumer } from '../ContextAPI.js';

export default function Edit() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    return (
        <div>
            <h6>edit your post</h6>
            <input
                onChange={(e) => {
                    setName(e.target.value);
                }}
                type='text'
                placeholder='name'
            />
            <input
                onChange={(e) => {
                    setPrice(e.target.value);
                }}
                type='text'
                placeholder='price'
            />
            <Consumer>
                {(changePost) => {
                    return (
                        <button
                            onClick={() => {
                                changePost(name, price);
                            }}
                        >
                            change the post
                        </button>
                    );
                }}
            </Consumer>
        </div>
    );
}

import React, { useState } from 'react';
import './Open.css';

const PAGE_GAME = 1;

export default function Open(props) {
    const [name, setName] = useState(' ');

    const validName = () => {
        if (name !== '') return null;
        else return <p style={{ color: 'red', margin: 0 }}>You have to enter a name</p>;
    };

    return (
        <div className='open'>
            <h1>Ready for WAR</h1>
            {validName()}
            <input onInput={(e) => setName(e.target.value)} type='text' name='name' id='name' placeholder='Enter your name' />
            <button
                className='button-next'
                onClick={() => {
                    if (!name.trim().length) {
                        alert('You have to enter your name to play');
                        return;
                    }
                    props.setPage(PAGE_GAME);
                    props.init({ playerName: name });
                }}
            >
                Start
            </button>
        </div>
    );
}

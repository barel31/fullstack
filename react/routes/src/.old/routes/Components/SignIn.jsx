import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const [valid, setValid] = useState('');
    const [showValidMessage, setValidMessage] = useState(false);
    const nav = useNavigate();

    const checkPass = () => {
        if (valid === '12345') {
            nav('/page3');
            setValidMessage(false);
        } else setValidMessage(true);
    };

    const showError = () => {
        if (showValidMessage) return <p>Not valid passowrd</p>;
    };

    return (
        <div>
            <input type='password' name='password' placeholder='password' onChange={(e) => setValid(e.target.value)} />
            <button onClick={checkPass}>Enter</button>
            {showError()}
        </div>
    );
}

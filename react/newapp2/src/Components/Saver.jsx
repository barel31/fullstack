import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Saver(props) {
    const navigate = useNavigate();
    const [cancel, setCancel] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [tries, setTries] = useState(3);

    const msg = () => {
        if (props.type === '100') return 'Police 100';
        return props.type === '101' ? 'Ambulance 101' : 'Fire Fighter 102';
    };

    const CancelBtnHandler = () => {
        if (cancel) {
            if (password !== confirmPassword) alert('Password don`t match');
            else if (password !== props.password) {
                setTries(tries - 1);
                if (tries) alert('Wrong password! you have ' + (tries - 1) + ' tries more.');
                else alert('Wrong password, you can`t cancel the call!');
            } else navigate('/');
        } else if (password === '') setCancel(true);
    };

    const CancelHandler = () => {
        return cancel ? (
            <>
                <div>
                    <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    <input
                        type='password'
                        placeholder='Confirm Password'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
            </>
        ) : null;
    };

    return (
        <div className='Saver'>
            <p>{msg()}</p>
            <p>{props.fullname}</p>
            <button onClick={() => CancelBtnHandler()} disabled={tries ? false : true}>
                Cancel
            </button>
            {CancelHandler()}
        </div>
    );
}

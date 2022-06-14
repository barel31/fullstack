import React, { useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Context from '../Context';

export default function HomePage() {
    const nav = useNavigate();
    const { validUser, setUserName, userName, setPassword } = useContext(Context);

    useEffect(() => {
        setUserName('');
        setPassword('');
    }, []);

    const valid = () => {
        const result = validUser();
        if (result === 1) nav('/Admin');
        else if (result === 2) nav(`/${userName}`);
        else if (result === -1) alert('invalid user or password');
    };

    return (
        <div className='HomePage'>
            <h1>SV-BANK</h1>
            <input type='text' placeholder='User Name' onChange={(e) => setUserName(e.target.value)} />
            <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            <Link to='/register'>
                <p>Create new user</p>
            </Link>
            <button onClick={() => valid()}>ENTER</button>
        </div>
    );
}

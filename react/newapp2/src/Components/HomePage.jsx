import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';

export default function HomePage() {
    const navigate = useNavigate();
    const { fullname, setFullname, setPassword, validMsgs, validFullname, validPassword } = useContext(Context);

    if (validFullname() && validPassword()) {
        navigate(`/${fullname}`);
    }

    return (
        <div className='HomePage'>
            {validFullname() && validPassword() ? null : (
                <>
                <h2>Register</h2>
                    {validMsgs(1)}
                    <input type='text' placeholder='Fullname' onChange={(e) => setFullname(e.target.value)} />
                    {validMsgs(2)}
                    <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                </>
            )}
        </div>
    );
}

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';

export default function Header() {
    const navigate = useNavigate();

    const { menu, setMenu, type, setType, logo } = useContext(Context);

    return (
        <div className='Header'>
            <div className='MenuContent'>
                <button onClick={() => setMenu(!menu)}>M</button>
                <button
                    style={{ display: !menu ? 'none' : 'block', opacity: type === '101' ? 0.8 : 1 }}
                    onClick={() => {
                        setType('101');
                        setMenu(false);
                        navigate('/101');
                    }}>
                    101
                </button>
                <button
                    style={{ display: !menu ? 'none' : 'block', opacity: type === '100' ? 0.8 : 1 }}
                    onClick={() => {
                        setType('100');
                        setMenu(false);
                        navigate('/100');
                    }}>
                    100
                </button>
                <button
                    style={{ display: !menu ? 'none' : 'block', opacity: type === '102' ? 0.8 : 1 }}
                    onClick={() => {
                        setType('102');
                        setMenu(false);
                        navigate('/102');
                    }}>
                    102
                </button>
            </div>
            <p>{logo()}</p>
            <p>{type}</p>
        </div>
    );
}

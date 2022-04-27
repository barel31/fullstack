import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Context from '../Context';

export default function Saver() {
    const navigate = useNavigate();
    const { type } = useContext(Context);

    return (
        <div className='Saver'>
            <Header />
            <button className='HelpBtn' onClick={() => navigate(`/${type}`)}>Help</button>
        </div>
    );
}

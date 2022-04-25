import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Opening(props) {
    const navigate = useNavigate();

    return (
        <div className='Opening'>
            {props.menu()}
            <button className='Help' onClick={() => navigate(`/${props.type}`)}>HELP</button>
        </div>
    );
}

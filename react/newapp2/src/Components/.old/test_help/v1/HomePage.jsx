import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage(props) {
    const navigate = useNavigate();

    if (props.fullname === '') {
        useEffect(() => {
            navigate('/signup');
        }, []);
    } else {
        useEffect(() => {
            navigate(`/${props.fullname}`);
        }, []);
    }

    return (
        <div className='HomePage'>
            <h1>works</h1>
        </div>
    );
}

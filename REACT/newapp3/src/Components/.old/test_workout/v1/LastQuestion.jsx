import React from 'react';
import { useNavigate } from 'react-router-dom';

function LastQuestion(props) {
    const navigate = useNavigate();

    const yes = () => {
        navigate(`/training/${props.fullName.replace(' ', '_')}`);
    };

    const no = () => {
        props.resetUser();
        navigate('/');
    };

    return (
        <div>
            <h1>Ready?</h1>
            <button onClick={() => yes()}>Yes</button>
            <button onClick={() => no()}>No</button>
        </div>
    );
}

export default LastQuestion;

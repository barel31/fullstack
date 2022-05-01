import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Workout(props) {
    const navigate = useNavigate();

    const success = () => {
        props.finishWorkout();
        navigate(-1);
    };

    return (
        <div>
            <h1>
                Workout N.O {props.activeWorkout.id}
                <br />
                {props.activeWorkout.km} Km ?
            </h1>
            <button onClick={() => success()}>Success</button>
            <button onClick={() => navigate(-1)}>Failure</button>
        </div>
    );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function WorkPrepare(props) {
    const navigate = useNavigate();

    const NextBtnHandler = () => {
        navigate('/confirm');
    };

    return (
        <div>
            <h1>How many workout a week</h1>
            <select name='workoutPerWeek' id='workoutPerWeek' onChange={(e) => props.setWorkoutWeek(e.target.value)}>
                {[...Array(7)].map((v, i) => {
                    return (
                        <option key={i + 1} value={i + 1}>
                            {i + 1}
                        </option>
                    );
                })}
            </select>
            <h1>How many years you have been training?</h1>
            <select name='workoutPerYear' id='workoutPerYear' onChange={(e) => props.setWorkoutYear(e.target.value)}>
                {[...Array(30)].map((v, i) => {
                    return (
                        <option key={i + 1} value={i + 1}>
                            {i + 1}
                        </option>
                    );
                })}
            </select>
            <button onClick={() => NextBtnHandler()}>Next</button>
        </div>
    );
}

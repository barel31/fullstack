import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';

export default function Training() {
    const nav = useNavigate();

    const {
        perWeek,
        years,
        startWorkout,
        finishedWorkouts,
        resetWorkouts,
        resetWorkoutCounter,
        setActiveWorkout,
    } = useContext(Context);

    const workouts = [((years * 5) / perWeek).toFixed(1)];
    if (resetWorkoutCounter) {
        workouts[0] = (workouts[0] * 1.15).toFixed(1);
    }
    for (let i = 0; i < perWeek; i++) workouts.push((workouts[i] * 1.15).toFixed(1));

    return (
        <div className='Training'>
            <h1>Welcome Trainer</h1>
            <button onClick={() => (startWorkout(workouts) !== -1 ? nav('/training/workout') : resetWorkouts())}>
                Start
            </button>
            <div className='Workouts'>
                {Array(perWeek)
                    .fill(null)
                    .map((_, i) => {
                        return (
                            <div
                                onClick={() => {
                                    if (!finishedWorkouts.includes(i)) {
                                        setActiveWorkout(i);
                                        nav('/training/workout');
                                    }
                                }}
                                key={i}
                                style={{ backgroundColor: finishedWorkouts.includes(i) ? 'white' : 'lightblue', cursor: !finishedWorkouts.includes(i) ? 'pointer' : 'auto' }}>
                                Workout N.O {i + 1} <br />
                                {workouts[i]} Km
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export function Workout() {
    const nav = useNavigate();

    const { fullname, activeWorkout, workoutsDetails, setFinishedWorkouts, finishedWorkouts } = useContext(Context);

    return (
        <div className='Workout'>
            <h1>
                Workout N.O {activeWorkout + 1}
                <br />
                KM {workoutsDetails[activeWorkout]}
            </h1>
            <button
                onClick={() => {
                    nav(`/training/${fullname}`);
                    setFinishedWorkouts([...finishedWorkouts, activeWorkout]);
                }}>
                Success
            </button>
            <button onClick={() => nav(`/training/${fullname}`)}>Failure</button>
        </div>
    );
}

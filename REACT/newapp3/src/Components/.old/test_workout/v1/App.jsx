import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import WorkPrepare from './Components/WorkPrepare';
import HomePage from './Components/HomePage';
import LastQuestion from './Components/LastQuestion';
import Trainer from './Components/Trainer';
import Workout from './Components/Workout';

export default function App() {
    //Hooks
    const [userId, setUserId] = useState('');
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState('Male');
    const [workoutWeek, setWorkoutWeek] = useState('1');
    const [workoutYear, setWorkoutYear] = useState('1');
    const [finished, setFinished] = useState([]);
    const [activeWorkout, setActiveWorkout] = useState({});
    const [lastWorkout, setLastWorkout] = useState(1);

    const resetUser = () => {
        setWorkoutWeek('');
        setWorkoutYear('');
    };

    const finishWorkout = () => {
        if (finished.length === (workoutWeek | 0) - 1) {
            setFinished([]);
            setLastWorkout((lastWorkout * 1.15).toFixed(1));
        } else setFinished([...finished, activeWorkout.id - 1]);
    };

    return (
        <div className='App'>
            <HashRouter>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <HomePage
                                gender={gender}
                                userId={userId}
                                fullName={fullName}
                                setFullName={setFullName}
                                setGender={setGender}
                                setUserId={setUserId}
                            />
                        }
                    />
                    <Route
                        path='/work_prepare'
                        element={<WorkPrepare setWorkoutWeek={setWorkoutWeek} setWorkoutYear={setWorkoutYear} />}
                    />
                    <Route
                        path='/confirm'
                        element={
                            <LastQuestion
                                resetUser={resetUser}
                                setWorkoutWeek={setWorkoutWeek}
                                setWorkoutYear={setWorkoutYear}
                                fullName={fullName}
                            />
                        }
                    />
                    <Route
                        path={`/training/${fullName.replace(' ', '_')}`}
                        element={
                            <Trainer
                                workoutYear={workoutYear}
                                workoutWeek={workoutWeek}
                                setFinished={setFinished}
                                finished={finished}
                                setActiveWorkout={setActiveWorkout}
                                lastWorkout={lastWorkout}
                                setLastWorkout={setLastWorkout}
                            />
                        }
                    />
                    <Route
                        path={`/workout`}
                        element={
                            <Workout
                                workoutYear={workoutYear}
                                workoutWeek={workoutWeek}
                                activeWorkout={activeWorkout}
                                finishWorkout={finishWorkout}
                            />
                        }
                    />
                </Routes>
            </HashRouter>
        </div>
    );
}

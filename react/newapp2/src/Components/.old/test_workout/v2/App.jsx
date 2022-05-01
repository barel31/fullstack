import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Training, { Workout } from './Components/Training';
import Context from './Context';
import './App.css';

export default function App() {
    const [id, setId] = useState(0);
    const [fullname, setFullname] = useState('');
    const [gender, setGender] = useState('');
    // const [perWeek, setPerWeek] = useState(0);
    const [perWeek, setPerWeek] = useState(4);
    // const [years, setYears] = useState(0);
    const [years, setYears] = useState(2);
    const [validSignIn, setValidSignIn] = useState(false);
    const [activeWorkout, setActiveWorkout] = useState(0);
    const [finishedWorkouts, setFinishedWorkouts] = useState([]);
    const [workoutsDetails, setWorkoutsDetails] = useState([]);
    const [resetWorkoutCounter, setResetWorkoutCounter] = useState(0);

    const validClient = () => {
        if (id > 999999999 || id < 100000000) {
            alert('ID have to be with 9 digits length');
            return false;
        }

        if (fullname.length < 4) {
            alert('Fullname have to be atleast with 4 characters length');
            return false;
        }
        let space = false;
        for (let i = 0; i < fullname.length; i++) {
            if (fullname[i] === ' ') {
                if (space) {
                    alert('Only 1 space are allowed in the fullname');
                    return false;
                }
                space = true;
                continue;
            }
            if (fullname[i] >= 'a' && fullname[i] <= 'z') continue;
            alert('Only small letters');
            return false;
        }

        if (gender !== 'Male' && gender !== 'Female') {
            alert('Invalid gender');
            return false;
        }

        return true;
    };

    const startWorkout = (workouts) => {
        setWorkoutsDetails(workouts);
        
        const firstWorkout = () => {
            for (let i = 0; i < perWeek; i++) {
                if (finishedWorkouts.includes(i)) continue;
                return i;
            }
            return -1;
        };

        setActiveWorkout(firstWorkout());
        return firstWorkout();
    };

    const resetWorkouts = () => {
        setFinishedWorkouts([]);
        setResetWorkoutCounter(resetWorkoutCounter + 1);
    };

    return (
        <div className='App'>
            <Context.Provider
                value={{
                    setFinishedWorkouts,
                    finishedWorkouts,
                    setActiveWorkout,
                    activeWorkout,
                    startWorkout,
                    setId,
                    id,
                    setFullname,
                    fullname,
                    setGender,
                    gender,
                    validClient,
                    setValidSignIn,
                    validSignIn,
                    setPerWeek,
                    perWeek,
                    setYears,
                    years,
                    setWorkoutsDetails,
                    workoutsDetails,
                    resetWorkouts,
                    setResetWorkoutCounter,
                    resetWorkoutCounter,
                }}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path={`/training/${fullname}`} element={<Training />} />
                    <Route path={`/training/aaaa`} element={<Training />} />
                    <Route path={`/training/workout`} element={<Workout />} />
                </Routes>
            </Context.Provider>
        </div>
    );
}

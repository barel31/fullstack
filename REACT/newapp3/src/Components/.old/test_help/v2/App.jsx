import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Saver from './Components/Saver';
import Message from './Components/Message';
import Context from './Context';
import './App.css';

export default function App() {
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('101');
    const [menu, setMenu] = useState(false);
    const [cancel, setCancel] = useState(false);
    const [cancelPassword, setCancelPassword] = useState('');
    const [cancelPasswordConfirm, setCancelPasswordConfrim] = useState('');
    const [cancelTries, setCancelTries] = useState(3);

    const validFullname = () => {
        if (fullname.length < 4) return false;
        for (let i = 0; i < fullname.length; i++) {
            if (fullname[i] >= '0' && fullname[i] <= '9') return false;
        }
        return true;
    };

    const validPassword = () => {
        if (password.length < 8) return false;
        let alpha = false;
        let num = false;
        for (let i = 0; i < password.length; i++) {
            if (password[i] >= '0' && password[i] <= '9') num = true;
            if ((password[i] >= 'a' && password[i] <= 'z') || (password[i] >= 'A' && password[i] <= 'Z')) alpha = true;
        }
        return alpha && num;
    };

    const validMsgs = (n) => {
        let flag = false;
        if (n === 1 && !validFullname() && fullname !== '') flag = true;
        else if (n === 2 && !validPassword() && password !== '') flag = true;
        return flag ? <p style={{ color: 'red', margin: 0 }}>Invalid input!</p> : null;
    };

    const logo = () => {
        if (type === '100') return 'A';
        if (type === '101') return 'B';
        return 'C';
    };

    const cancelHandler = () => {
        return cancel ? (
            <>
                <input type='password' placeholder='Password' onChange={(e) => setCancelPassword(e.target.value)} />
                <input
                    type='password'
                    placeholder='Confrim Password'
                    onChange={(e) => setCancelPasswordConfrim(e.target.value)}
                />
            </>
        ) : null;
    };

    const validCancelHandler = () => {
        if (cancelTries) {
            if (cancelPassword !== '' && cancelPassword === cancelPasswordConfirm && cancelPassword === password)
                return true;

            setCancelTries(cancelTries - 1);
            alert(`Incorrect password (${cancelTries}/3)`);
        } else alert('You don`t have any tries left');

        return false;
    };

    return (
        <div className='App'>
            <Context.Provider
                value={{
                    fullname,
                    setFullname,
                    password,
                    setPassword,
                    validFullname,
                    validPassword,
                    validMsgs,
                    menu,
                    setMenu,
                    type,
                    setType,
                    logo,
                    setCancel,
                    cancelHandler,
                    cancelPassword,
                    cancelPasswordConfirm,
                    cancelTries,
                    validCancelHandler,
                    cancel,
                }}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path={fullname} element={<Saver />} />
                    <Route path={type} element={<Message />} />
                </Routes>
            </Context.Provider>
        </div>
    );
}

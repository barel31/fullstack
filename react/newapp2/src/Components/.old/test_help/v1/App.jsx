import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Signup from './Components/Signup';
import Opening from './Components/Opening';
import Saver from './Components/Saver';

export default function App() {
    // Hooks
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('101');
    const [menuOpen, setMenuOpen] = useState(false);

    const logo = () => {
        if (type === '100') return 'A';
        return type === '101' ? 'B' : 'C';
    };

    const menu = () => {
        return (
            <>
                <div className='Menu'>
                    <div className='MenuContent'>
                        <button className='BtnMenu' onClick={() => setMenuOpen(!menuOpen)}>
                            M
                        </button>
                        <button
                            style={{ display: menuOpen ? 'block' : 'none', opacity: type === '101' ? 0.8 : 1.0 }}
                            onClick={() => {
                                setType('101');
                                setMenuOpen(false);
                            }}>
                            101
                        </button>
                        <button
                            style={{ display: menuOpen ? 'block' : 'none', opacity: type === '100' ? 0.8 : 1.0 }}
                            onClick={() => {
                                setType('100');
                                setMenuOpen(false);
                            }}>
                            100
                        </button>
                        <button
                            style={{ display: menuOpen ? 'block' : 'none', opacity: type === '102' ? 0.8 : 1.0 }}
                            onClick={() => {
                                setType('102');
                                setMenuOpen(false);
                            }}>
                            102
                        </button>
                    </div>
                    <p>
                        {logo()} {type}
                    </p>
                </div>
            </>
        );
    };
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage fullname={fullname} password={password} />} />
                    <Route path='/signup' element={<Signup setFullname={setFullname} setPassword={setPassword} />} />
                    <Route
                        path={fullname}
                        element={<Opening fullname={fullname} password={password} type={type} menu={menu} />}
                    />
                    <Route
                        path={type}
                        element={<Saver fullname={fullname} password={password} type={type} menu={menu} />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

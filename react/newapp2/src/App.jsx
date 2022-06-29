import React from 'react';
// import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import NavBar from './Components/NavBar';

const cards = [
    {
        content: 'I use PAUSE for the last three months and I found myself more productive than ever.',
        from: 'Bar Levi',
        about: 'Freelance Programmer',
    },
    {
        content:
            'At first I was worried about the access to camera thing, I read the terms of privacy and heard recommendations from friends so I decided to try the free trial. Since I find myself much more energetic and efficient, highly recommend!.',
        from: 'Melanie Cruise',
        about: 'Engineering Student, MIT',
    },
    {
        content:
            'Since I use pause I feel more alert, I did not know the importance of microbreak and how it can change my work day. The reports have also helped me understand when I am more productive.',
        from: 'Tom Yorke',
        about: 'Communication Student, Harvard',
    },
];

export default function App() {
    return (
        <div className='App'>
            <h1 className='title'>User Review</h1>
            <p>
                We can talk and talk... but what really matters is <span>your opinion</span> of PAUSE
            </p>
            <NavBar />
            <div className='cards'></div>
        </div>
    );
}

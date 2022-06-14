import React from 'react';
// import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Content from './Components/Content';
import NavBar from './Components/NavBar';

const pages = [
    {
        // route: 'birth',
        route: '', // homepage
        title: 'קריאת מפת לידה',
        content: 'אני אור אליהו ואני מלך ובראל אחי הוא משרת שלי ואתם נתיניי בעם שלי ומשלמים לי מיסים😒',
    },
    { route: 'hand', title: 'קריאת כף יד', content: 'טוב כן זה עמוד שני ונכון זה רק משפט אחד👍' },
    { route: 'quality', title: 'חיי איכות', content: '' },
    { route: 'prays', title: 'תפילות וסגולות', content: '' },
    { route: 'legendery', title: 'נדירים', content: '' },
    { route: 'about', title: 'אודות', content: 'שמי אור אליהו ואני אוהב אוכל' },
];
pages.titles = () => pages.map((v) => v.title);
pages.routes = () => pages.map((v) => v.route);

export default function App() {
    return (
        <div className='App'>
            <div id='background-wrap'>
                <div className='x1'>
                    <div className='cloud'></div>
                </div>
                <div className='x2'>
                    <div className='cloud'></div>
                </div>
                <div className='x3'>
                    <div className='cloud'></div>
                </div>
                <div className='x4'>
                    <div className='cloud'></div>
                </div>
                <div className='x5'>
                    <div className='cloud'></div>
                </div>
            </div>
            <h1 className='title'>אור השמיים</h1>
            <div className='container'>
                <Routes>
                    {pages.map((v, i) => (
                        <Route key={i} path={`/${v.route}`} element={<Content content={v.content} />} />
                    ))}
                </Routes>
                <NavBar buttons={pages.titles()} routes={pages.routes()} />
            </div>
        </div>
    );
}

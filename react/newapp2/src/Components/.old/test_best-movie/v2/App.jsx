import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Context from './Context';
import './App.css';

export default function App() {
    const [movies, setMovies] = useState([
        new Movie('Movie2', 'Description movie 2', 'https://via.placeholder.com/150/FF00FF/', [2]),
        new Movie('Movie1', 'Description movie 1', 'https://via.placeholder.com/150/FF0000/', [1]),
        new Movie('Movie4', 'Description movie 4', 'https://via.placeholder.com/150/00FF00/', [4]),
        new Movie('Movie5', 'Description movie 5', 'https://via.placeholder.com/150/00FFFF/', [5]),
        new Movie('Movie3', 'Description movie 3', 'https://via.placeholder.com/150/ACFE0F/', [3]),
    ]);
    const [activeMovie, setActiveMovie] = useState(movies.sort((a, b) => b.rating() - a.rating())[0]);

    const rateMovie = (score) => {
        activeMovie.rating(score);
        setMovies([...movies]);
    };

    return (
        <div className='App'>
            <Context.Provider value={{ movies, activeMovie, setActiveMovie, rateMovie }}>
                <Routes>
                    <Route path='/homepage' element={<HomePage />} />
                    {movies.map((v, i) => {
                        return <Route key={i} path={`/${v.name}`} element={<HomePage active={v} />} />
                    })}
                </Routes>
            </Context.Provider>
        </div>
    );
}

class Movie {
    constructor(name, desc, img, rates = []) {
        this.name = name;
        this.desc = desc;
        this.img = img;
        this.rates = rates;
    }

    rating(rate = undefined) {
        if (rate) this.rates.push(rate);

        let sum = 0;
        this.rates.map((v) => (sum += v));
        return (sum / this.rates.length).toFixed(1);
    }
}

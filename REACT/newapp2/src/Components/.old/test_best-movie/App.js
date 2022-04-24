import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import './App.css';

export default function App() {
    const [movies, setMovies] = useState([
        new Movie('c movie3', 'movie 3 desk here', 'https://via.placeholder.com/100/FFFF00/', [3], 1),
        new Movie('d movie4', 'movie 4 desk here', 'https://via.placeholder.com/100/FF0000/', [4], 2),
        new Movie('b movie2', 'movie 2 desk here', 'https://via.placeholder.com/100/FFFFFF/', [2], 3),
        new Movie('a movie1', 'movie 1 desk here', 'https://via.placeholder.com/100/0000FF/', [1], 4),
        new Movie('e movie5', 'movie 5 desk here', 'https://via.placeholder.com/100/008000/', [5], 5),
    ]);

    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage movies={movies} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

class Movie {
    constructor(name, desc, img, rates, id) {
        this.name = name;
        this.desc = desc;
        this.img = img;
        this.rates = rates;
        this.id = id;
    }

    rating() {
        let sum = 0;
        this.rates.forEach((v) => {
            sum += v;
        });
        return sum / this.rates.length;
    }

    rate(score) {
        this.rates.push(score);
    }
}

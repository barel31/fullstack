import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';

export default function HomePage(props) {
    const nav = useNavigate();
    const { movies, setActiveMovie } = useContext(Context);

    return (
        <div className='HomePage'>
            <h1>BM</h1>
            <div className='Top'>
                {movies
                    .sort((a, b) => b.rating() - a.rating())
                    .slice(0, 3)
                    .map((v, i) => {
                        return (
                            <div
                                key={i}
                                style={{ backgroundImage: `url(${v.img})` }}
                                onClick={() => {
                                    setActiveMovie(movies[i]);
                                    nav(`/${movies[i].name}`);
                                }}>
                                {v.name}
                            </div>
                        );
                    })}
            </div>
            <div className='Contents'>
                <MovieContent active={props.active ? props.active : false} />
                <Movies />
            </div>
        </div>
    );
}

function MovieContent(props) {
    const { activeMovie, rateMovie } = useContext(Context);

    const movie = props.active ? props.active : activeMovie;

    return (
        <div className='MovieContent'>
            <h3 className='Left'>Movie name: {movie.name}</h3>
            <div className='Img' style={{ backgroundImage: `url(${movie.img})` }}></div>
            <p className='Left'>{movie.desc}</p>
            <p className='Right'>{movie.rating()}</p>
            <div className='Rates'>
                {Array(5)
                    .fill(null)
                    .map((_, i) => {
                        return (
                            <div key={i} onClick={() => rateMovie(i + 1)}>
                                {i + 1}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

function Movies() {
    const nav = useNavigate();
    const { movies } = useContext(Context);

    return (
        <div className='Movies'>
            <p>All movies</p>
            {movies.map((v, i) => {
                return (
                    <div key={i} style={{ backgroundImage: `url(${v.img})` }} onClick={() => nav(`/${v.name}`)}>
                        {v.name}
                    </div>
                );
            })}
        </div>
    );
}

import { useState } from 'react';

export default function HomePage(props) {
    const [refresh, setRefresh] = useState(false);

    const getByNameMovies = () => {
        let tmp = props.movies;
        return tmp.sort((a, b) => a.name.localeCompare(b.name));
    };

    const getTopMovies = () => {
        let tmp = props.movies;
        tmp.sort((a, b) => b.rating() - a.rating());
        return tmp.slice(0, 3);
    };

    const getByBestMovie = (index = null) => {
        let tmp = props.movies;
        tmp.sort((a, b) => b.rating() - a.rating());
        return index ? tmp[index].id : tmp;
    };

    const [activeMovieId, setActiveMovieId] = useState(getByBestMovie(0));

    const activeMovieIndex = (id = activeMovieId) => {
        return props.movies.findIndex((v) => v.id === id);
    };

    return (
        <div className='HomePage'>
            <h1>BM</h1>
            <div className='Top'>
                {getTopMovies().map((v, i) => {
                    return (
                        <div
                            key={i}
                            style={{ backgroundImage: `url(${v.img})` }}
                            onClick={() => setActiveMovieId(v.id)}>
                            <h2>{v.name}</h2>
                        </div>
                    );
                })}
            </div>
            <div className='Content'>
                <div className='Movie'>
                    <h2>Movie name: {props.movies[activeMovieIndex()].name}</h2>
                    <div
                        className='MovieImg'
                        style={{ backgroundImage: `url(${props.movies[activeMovieIndex()].img})` }}></div>
                    <p>{props.movies[activeMovieIndex()].desc}</p>
                    <p>{props.movies[activeMovieIndex()].rating().toFixed(1)}</p>
                    <div className='Rate'>
                        {Array(5)
                            .fill(null)
                            .map((_, i) => {
                                return (
                                    <div
                                        key={i}
                                        onClick={() => {
                                            props.movies[activeMovieIndex()].rate(i + 1);
                                            setRefresh(!refresh);
                                        }}>
                                        {i + 1}
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <div className='MovieList'>
                    <p>All Movies</p>
                    {getByNameMovies().map((v, i) => {
                        return (
                            <div
                                key={i}
                                style={{ backgroundImage: `url(${v.img})` }}
                                onClick={() => setActiveMovieId(v.id)}>
                                {v.name}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

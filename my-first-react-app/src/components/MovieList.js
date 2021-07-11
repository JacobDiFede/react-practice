import {
    useState,
    useEffect
} from 'react';

import MovieService from '../services/movie.Service';

export const MovieList = () => {
    const [movieData, setMovieData] = useState();
    const [selectedMovie, setSelectedMovie] = useState();
    const movieService = new MovieService();

    useEffect(() => {
        getMoviesByTitle('John Wick');
    }, [])

    const getMoviesByTitle = async (title) => {
        const movieList = await movieService.getMoviesByTitle(title);

        setMovieData(movieList.Search);
    }

    const getMovieById = async (id) => {
        const movie = await movieService.getMovieById(id);
        setSelectedMovie(movie);
        console.log(id);
    }

    const logMovieInfo = (id) => {
        getMovieById(id);
        console.log (`${selectedMovie}`, selectedMovie);
    }

    const renderMovieList = () => {
        return movieData.map((movie, index) => (
            <div className="movie-card" key={index}>
                <img src={movie.Poster} alt={`${movie.Title} poster`}/>
                <h5>{movie.Title}</h5>
                <button onClick={ () => logMovieInfo(movie.imdbID)}>show details</button>
            </div>
        ))
};

    return (
        <div className="movie-list-container">
            { movieData && renderMovieList() }
        </div>
    )
}
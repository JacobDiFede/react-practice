import {
    useState,
    useEffect
} from 'react';

import { Modal } from './Modal';
import { MovieDetails } from './MovieDetails';

import MovieService from '../services/movie.Service';


export const MovieList = () => {
    const [movieData, setMovieData] = useState();
    const [selectedMovie, setSelectedMovie] = useState();
    const movieService = new MovieService();

    useEffect(() => {
        getMoviesByTitle('Star Wars');
    }, [])

    const getMoviesByTitle = async (title) => {
        const movieList = await movieService.getMoviesByTitle(title);

        setMovieData(movieList.Search);
    }

    const closeModal = () => setSelectedMovie(null);

    const renderMovieList = () => {
        return movieData.map((movie, index) => (
            <div className="movie-card" key={index}>
                <img src={movie.Poster} alt={`${movie.Title} poster`}/>
                <h5>{movie.Title}</h5>
                <button onClick={ () => setSelectedMovie(movie.imdbID)}>Show Details</button>
            </div>
        ))
};

    return (
        <div className="movie-list-container">
            { movieData && renderMovieList() }
            { selectedMovie && (
                <Modal showModal={!!selectedMovie} closeModal={closeModal}>
                    <MovieDetails id={selectedMovie}/>
                </Modal>
            ) }
        </div>
    )
}
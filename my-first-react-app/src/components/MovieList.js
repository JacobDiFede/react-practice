import { useState } from 'react';
import { Modal } from './Modal';
import { MovieDetails } from './MovieDetails';
import { SearchBar } from './SearchBar';
import MovieService from '../services/movie.Service';

export const MovieList = () => {
    const [movieData, setMovieData] = useState();
    const [selectedMovie, setSelectedMovie] = useState();
    const movieService = new MovieService();
    const [pages, setPages] = useState();
    const [movieTitle, setMovieTitle] = useState();
    const [currentPage, setCurrentPage] = useState();

    const getMoviesByTitle = async (title) => {
        setMovieTitle(title);
        const movieList = await movieService.getMoviesByTitle(title);

        setPages(Math.ceil(movieList.totalResults / 10));
        setMovieData(movieList.Search);
    }

    const getMoviesByPage = async (page) => {
        setCurrentPage(page);
        const movieList = await movieService.getMoviesByTitle(movieTitle, page);
        console.log("movieListByPage: ", movieList);
        setMovieData(movieList.Search);
    }

    const closeModal = () => setSelectedMovie(null);

    const onSearch = (title) => {
        getMoviesByTitle(title);
    }

    const renderPagination = () => {
        let PaginationButton = [];
        for(let i = 0; i < pages; i++) {
            PaginationButton.push(
                <button
                        onClick={() => getMoviesByPage( i + 1)}
                        disabled={i + 1 === currentPage}
                        >{ i + 1 }</button>
            )
        }
        return (
            <div>
                {
                    PaginationButton
                }
            </div>
        )
    }

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
            <SearchBar onSearch={onSearch}/>
            { movieData && renderMovieList() }
            { selectedMovie && (
                <Modal showModal={!!selectedMovie} closeModal={closeModal}>
                    <MovieDetails id={selectedMovie}/>
                </Modal>
            ) }
            {pages && renderPagination()}
        </div>
    )
}
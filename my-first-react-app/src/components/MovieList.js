import { useState } from 'react';
import { Modal } from './Modal';
import { MovieDetails } from './MovieDetails';
import { SearchBar } from './SearchBar';
import MovieService from '../services/movie.Service';
import { MovieCard } from './MovieCard';
import UserMovieListService from '../services/userMovieList.service';
import Pagination from './Pagination';

export const MovieList = () => {
    const [movieData, setMovieData] = useState();
    const [selectedMovie, setSelectedMovie] = useState();
    const movieService = new MovieService();
    const userMovieListService = new UserMovieListService();
    const [pages, setPages] = useState();
    const [movieTitle, setMovieTitle] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    const getMoviesByTitle = async (title) => {
        setMovieTitle(title);
        const movieList = await movieService.getMoviesByTitle(title);
        setPages(Math.ceil(movieList.totalResults / 10));
        setMovieData(movieList.Search);
    }

    const getMoviesByPage = async (page) => {
        setCurrentPage(page);
        const movieList = await movieService.getMoviesByTitle(movieTitle, page);
        setMovieData(movieList.Search);
    }

    const addMovieToUserList = (movie) => {
        userMovieListService.addMovieToList(movie);
    }

    const closeModal = () => setSelectedMovie(null);

    const onSearch = (title) => {
        getMoviesByTitle(title);
    }

    const renderMovieList = () => {
        return movieData.map((movie, index) => (
            <MovieCard movie={movie} setSelectedMovie={setSelectedMovie} addMovieToUserList={addMovieToUserList} MovieList={MovieList}/>
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
            { pages &&
                <Pagination pages={pages} getMoviesByPage={getMoviesByPage} currentPage={currentPage}/>
            }
        </div>
    )
}
import UserMovieListService from "../services/userMovieList.service";
import { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";
import { MovieDetails } from "./MovieDetails";
import { Modal } from "./Modal";

export const UserMovieList = () => {
    const [selectedMovie, setSelectedMovie] = useState();
    const [movieList, setMovieList] = useState([]);
    const userMovieListService = new UserMovieListService();

    useEffect(() => {
        getUserMovieList()
    }, [])

    const getUserMovieList = () => {
        const userMovieList = userMovieListService.getMovieList();
        setMovieList(userMovieList ? userMovieList.list : []); 
    }

    const closeModal = () => setSelectedMovie(null);

    const deleteMovieFromList = (movie) => {
        const movieList = JSON.parse(localStorage.getItem('movieList'));
        const updatedList= movieList.list.filter((movieFromList) => movieFromList.imdbID !== movie.imdbID);
        if (updatedList.length) {
            movieList.list = updatedList;
            localStorage.setItem('movieList', JSON.stringify(movieList));
        } else {
            localStorage.removeItem('movieList');
        }
        setMovieList(updatedList);
    }

    return (
        <div>
            {
                movieList && movieList.map((movie) => {
                    return (
                        <div>
                            <MovieCard movie={movie} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} onDeleteClick={deleteMovieFromList} />
                            { selectedMovie && (
                            <Modal showModal={!!selectedMovie} closeModal={closeModal}>
                                <MovieDetails id={selectedMovie}/>
                            </Modal>
                            ) }
                        </div>
                    )
                })
            }
        </div>
    )
}
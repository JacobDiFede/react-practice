import UserMovieListService from "../services/userMovieList.service";
import { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";
import { MovieDetails } from "./MovieDetails";
import { Modal } from "./Modal";

export const UserMovieList = () => {
    const [selectedMovie, setSelectedMovie] = useState();
    const [movieList, setMovieList] = useState();
    const userMovieListService = new UserMovieListService();

    useEffect(() => {
        getUserMovieList()
    }, [])

    const getUserMovieList = () => {
        const userMovieList = userMovieListService.getMovieList();
        setMovieList(userMovieList);
    }

    const closeModal = () => setSelectedMovie(null);

    return (
        <div>
            {console.log(movieList)}
            {
                movieList && movieList.list.map((movie) => {
                    return (
                        <div>
                            <MovieCard movie={movie} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />
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
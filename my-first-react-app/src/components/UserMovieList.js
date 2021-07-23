import UserMovieListService from "../services/userMovieList.service";
import { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";
import { MovieDetails } from "./MovieDetails";

export const UserMovieList = () => {
    const [movieList, setMovieList] = useState();
    const userMovieListService = new UserMovieListService();

    useEffect(() => {
        getUserMovieList()
    }, [])

    const getUserMovieList = () => {
        const userMovieList = userMovieListService.getMovieList();
        setMovieList(userMovieList);
    }

    return (
        <div>
            {console.log(movieList)}
            {
                movieList && movieList.list.map((movie) => {
                    return (
                        <div>
                            <MovieCard movie={movie}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
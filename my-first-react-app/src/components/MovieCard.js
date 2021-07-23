import { useState } from "react"
import { MovieDetails } from "./MovieDetails"

export const MovieCard = ({ movie, setSelectedMovie, addMovieToUserList }) => {
    return (
        <div className="movie-card" key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} poster`}/>
            <h5>{movie.Title}</h5>
            <button onClick={ () => setSelectedMovie(movie.imdbID)}>Show Details</button>
            <button onClick={ () => addMovieToUserList(movie)}>Add To My List</button>
        </div>
    )
}
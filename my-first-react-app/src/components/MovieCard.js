import Button from 'react-bootstrap/Button';

export const MovieCard = ({ movie, setSelectedMovie, addMovieToUserList, onDeleteClick }) => {
    return (
        <div className="movie-card" key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} poster`}/>
            <h5>{movie.Title}</h5>
            <Button 
                variant="info"
                onClick={ () => setSelectedMovie(movie.imdbID)}>Show Details</Button>
            { addMovieToUserList && 
            <Button 
                variant="success"
                onClick={ () => addMovieToUserList(movie)}>Add To My List</Button>
            }
            {
                onDeleteClick &&
                <Button 
                    variant="danger"
                    onClick={ () => onDeleteClick(movie)}
                >Remove From List</Button>
            }
        </div>
    )
}
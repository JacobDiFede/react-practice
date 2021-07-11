export const MovieDetails = ({ movie }) => {
    const {
        Poster,
        Title,
        Rated,
        Runtime,
        Genre,
        Plot,
        Actors,
        imdbRating,
    } = movie;

    return (
        <div className="movie-details-container">
            <img src={Poster} alt={Title} />
            <div className="information-container"> 
                <div className="title-container">
                    <h2>{Title}</h2>
                    <span>{imdbRating}</span>
                </div>
                <div className="button-container">
                    <div className="button">{ Rated }</div>
                    <div className="button">{ Runtime }</div>
                    <div className="button">{ Genre }</div>
                </div>
                <div className="description-container">
                    <h3>Plot</h3>
                    <p>{ Plot }</p>
                </div>
                <div className="description-container">
                    <h3>Actors</h3>
                    <p>{ Actors }</p>
                </div>
            </div>
        </div>
    )
}

// const MovieCard = (props) => {
//     return (
//       <div className="MovieCard"> 
//       <img src={props.posterUrl}/>
//       <p><strong>{props.Title}</strong></p>
//       <p>{props.Type}</p>
//       <p>{props.Rated}</p>
//       <p>{props.Runtime}</p>
//       <p>{props.Genre}</p>
//       <p><strong> Plot </strong></p>
//       <p>{props.Plot}</p>
//       <p><strong> Actors </strong></p>
//       <p>{props.Actors}</p>
//       <p><strong>{props.Ratting}</strong></p>
//       </div>
//     )
//   }
  
//   ReactDOM.render(
//     <div>
//       <MovieCard 
//       posterUrl="https://observer.com/wp-content/uploads/sites/2/2021/03/1_XCgGfAxXI5I1xuNzawF9kw@2x.jpeg?resize=970,606"
//       Title="Batman v Superman: Dawn of Justice"
//       Type="Movie"
//       Rated="PG-13"
//       Runtime="183 min"
//       Genre="Action, Adventure, Sci-Fi"
//       Plot="Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs."
//       Actors="Ben Affleck, Henry Cavill, Amy Adams, Jesse Eisenberg"
//       Ratting="6.4"
//       ></MovieCard>
//     </div>,
//     document.getElementById('root')
//   )
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const MovieCard = (props) => {
  return (
    <div className="MovieCard"> 
    <img src={props.posterUrl}/>
    <p><strong>{props.Title}</strong></p>
    <p>{props.Type}</p>
    <p>{props.Rated}</p>
    <p>{props.Runtime}</p>
    <p>{props.Genre}</p>
    <p><strong> Plot </strong></p>
    <p>{props.Plot}</p>
    <p><strong> Actors </strong></p>
    <p>{props.Actors}</p>
    <p><strong>{props.Ratting}</strong></p>
    </div>
  )
}

ReactDOM.render(
  <div>
    <MovieCard 
    posterUrl="https://observer.com/wp-content/uploads/sites/2/2021/03/1_XCgGfAxXI5I1xuNzawF9kw@2x.jpeg?resize=970,606"
    Title="Batman v Superman: Dawn of Justice"
    Type="Movie"
    Rated="PG-13"
    Runtime="183 min"
    Genre="Action, Adventure, Sci-Fi"
    Plot="Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs."
    Actors="Ben Affleck, Henry Cavill, Amy Adams, Jesse Eisenberg"
    Ratting="6.4"
    ></MovieCard>
  </div>,
  document.getElementById('root')
)

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

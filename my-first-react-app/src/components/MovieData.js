import React, { useState } from `react`;

export const setMovieData = async () => {
    const [movies, setMovies] = useState ([]);
    
    const apiKey = `b1114fdf`

    const url = `https://www.omdbapi.com/?s=avengers&apikey=${apiKey}`;
  
    const response = await fetch(url)
    .then(resonse => response.json())
    .catch(err => console.log(err));
  
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  
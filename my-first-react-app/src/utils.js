let myMovieList;
let myMovie;

export async function fetchMovieDataByName(title) {
    const response = await fetch(`http://www.omdbapi.com/?s=${title}&apikey=`);
    myMovieList = response.json();
}

export async function fetchMovieDataById(id) {
    const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=`);
    myMovie = response.json();
}

await fetchMovieDataByName("star wars");
await fetchMovieDataById("tt0080684");

console.log(await myMovieList);
console.log(await myMovie);
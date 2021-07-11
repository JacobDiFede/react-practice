export default class MovieService {
    async getMoviesByTitle(title) {
        const apiKey = `b1114fdf`

        const url = `https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`;
  
        const response = await fetch(url)
        .then(response => response.json())
        .catch(err => console.log(err));

        return response 

    }

    async getMovieById(id) {
        const apiKey = `b1114fdf`

        const url = `https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`;
  
        const response = await fetch(url)
        .then(response => response.json())
        .catch(err => console.log(err));

        return response 
        
    }
}
import axios from 'axios';

const apiKey = `b1114fdf`;
export default class MovieService {
    async getMoviesByTitle(title) {
        const url = `https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`;
  
        return axios.get(url)
            .then((res) => res.data)
            .catch((err) => console.error(err));
    }

    async getMovieById(id) {
        const url = `https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`;
  
        return axios.get(url)
            .then((res) => res.data)
            .catch((err) => console.error(err));
    }
}
import axios  from "axios";

const API_KEY = process.env.FILM_REACT_APP;
const BASE_URL = "https://api.themoviedb.org/3"

const tmdb = axios.create ({
    baseURL:BASE_URL,
    params:{
        api_key:API_KEY,
        language:"fr-FR"
    }
})

// je cree une state pour les film populaire 

export const getPopularMovies = async () => {
    const response = await tmdb.get("/movie/popular")
    return response.data.results
}

export const getMovieDetails = async (movieId) => {

    const response = await tmdb.get(`/movie/${movieId}`)
}
import axios from 'axios';



const API_KEY = import.meta.env.VITE_TMDB_API_KEY as string;
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'fr-FR',
  },
});

// Récupérer les films populaires
export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await tmdb.get('/movie/popular');
  return response.data.results;
};

// Récupérer les détails d'un film
export const getMovieDetails = async (movieId: number): Promise<Movie> => {
  const response = await tmdb.get(`/movie/${movieId}`);
  return response.data;
};

// Types pour les réponses API
export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
}
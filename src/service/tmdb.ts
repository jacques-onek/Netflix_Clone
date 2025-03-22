// import axios from 'axios';

import { MediaItem, MediaResponse, MovieVideoResponse } from "../type/type";


const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_API_KEY



// const tmdb = axios.create({
//   baseURL: BASE_URL,
//   params: {
//     api_key: API_KEY,
//     language: 'fr-FR',
//   },
// });


// endpoints 

// Fetching movies data 
// -------------------------------------------------------------------------------

// EndPoint pour les films populaires utilise dans le composant moviehub 

export const fetchMovies = async (): Promise<MediaItem[]> => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data: MediaResponse = await res.json();
  return data.results;
};


// EndPoint pour le trending des films 

export const fetchTrending = async (): Promise<MediaItem[]> => {
  const res = await fetch(`${BASE_URL}/trending/all/week?api_key=${API_KEY}`);
  const data: MediaResponse = await res.json();
  return data.results;
};

// film les mieux note  

export const fetchTopRatedMovies = async (): Promise<MediaItem[]> => {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  const data : MediaResponse = await res.json();
  return data.results
};


// filtre par genre 

export const fetchMoviesByGenre = async (genreId:number|string) => {
  const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
  const data : MediaResponse = await res.json();
  return  data.results
};

// details du film 


export const fetchMovieDetails = async (movieId:string|number)  => {
  const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
  const data = await res.json();
  return data
};

// fetcher les video du film 

export const fetchMovieTrailer = async (movieId:string|number) => {
  const res = await fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`);
  const data:MovieVideoResponse = await res.json()
  const trailers = data.results?.filter((d) => d.type === "Trailer" && d.site === "YouTube");
  return trailers.length > 0 ? `https://www.youtube.com/embed/${trailers[0].key}?autoplay=1&rel=0` : null;
};

// fetcher les film recommande suivant le datails du film 

export const fetchMovieRecommendations = async (movieId:string|number)=>  {
  const res = await fetch(`${BASE_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}`);
  return res.json();
};


// recherche des film ou series 

export const fetchSearchResults = async (query:string|number) => {
  const res = await fetch(`${BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}`);
  return res.json();
};


// casting des film ou serie pour afficher les acteur etc... 

export const fetchMovieCast = async (movieId:string|number) => {
  const res = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
  return res.json();
};
// _______________________________________________________________

// pour fetcher les series 
// --------------------------------------------------------------------------------

// series populaire 

export const fetchTVShows = async (): Promise<MediaItem[]> => {
  const res = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
  const data: MediaResponse = await res.json();
  return data.results;
};


// serie en cour de diffusion  

export const fetchAiringTVShows = async (): Promise<MediaItem[]> => {
  const res = await fetch(`${BASE_URL}/tv/on_the_air?api_key=${API_KEY}`);
  const data: MediaResponse = await res.json();
  return data.results;
};

// serie par tendances 

export const fetchTrendingTVShows = async () => {
  const res = await fetch(`${BASE_URL}/trending/tv/week?api_key=${API_KEY}`);
  return res.json();
};

// serie le mieux notee  

export const fetchTopRatedTVShows = async () => {
  const res = await fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}`);
  return res.json();
};

// filtre les seiries par genre 

export const fetchTVShowsByGenre = async (genreId:string|number) => {
  const res = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=${genreId}`);
  return res.json();
};

// details de la seris tv  

export const fetchTVShowDetails = async (tvId:string|number) => {
  const res = await fetch(`${BASE_URL}/tv/${tvId}?api_key=${API_KEY}`);
  return res.json();
};


// bande d'annonce d'un film 

export const fetchTVShowTrailer = async (tvId:string|number) => {
  const res = await fetch(`${BASE_URL}/tv/${tvId}/videos?api_key=${API_KEY}`);
  return res.json();
};

// serie Tv recommande 

export const fetchTVShowRecommendations = async (tvId:string|number) => {
  const res = await fetch(`${BASE_URL}/tv/${tvId}/recommendations?api_key=${API_KEY}`);
  return res.json();
};


// casting du serie 

export const fetchTVShowCast = async (tvId:string|number) => {
  const res = await fetch(`${BASE_URL}/tv/${tvId}/credits?api_key=${API_KEY}`);
  return res.json();
};

// recherche des series Tv 

export const fetchTVSearchResults = async (query:string) => {
  const res = await fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${query}`);
  return res.json();
};


// Types pour les réponses API
export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
}
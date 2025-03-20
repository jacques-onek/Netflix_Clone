import { useQueries } from "@tanstack/react-query";
import { fetchMovies, fetchTrending, fetchTVShows,fetchTopRatedMovies,fetchAiringTVShows,fetchTrendingTVShows } from "../../service/tmdb";

export const useMediaData = () => {
  const queries = useQueries({
    queries: [
      { queryKey: ["trending"], queryFn: fetchTrending },
      { queryKey: ["movies"], queryFn: fetchMovies },
      { queryKey: ["TopRatedMovies"], queryFn: fetchTopRatedMovies },
      { queryKey: ["tvShows"], queryFn: fetchTVShows },
      { queryKey: ["diffusion"], queryFn: fetchAiringTVShows },
      { queryKey: ["tendanceTv"], queryFn: fetchTrendingTVShows },
    ],
  });

  return {
    trending: queries[0].data || [],
    movies: queries[1].data || [],
    TopRatedmovies: queries[2].data || [],
    tvShows: queries[3].data || [],
    isLoading: queries.some(q => q.isLoading),
    isError: queries.some(q => q.isError),
  };
};

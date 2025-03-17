import { useQueries } from "@tanstack/react-query";
import { fetchMovies, fetchTrending, fetchTVShows } from "../../service/tmdb";

export const useMediaData = () => {
  const queries = useQueries({
    queries: [
      { queryKey: ["trending"], queryFn: fetchTrending },
      { queryKey: ["movies"], queryFn: fetchMovies },
      { queryKey: ["tvShows"], queryFn: fetchTVShows },
    ],
  });

  return {
    trending: queries[0].data || [],
    movies: queries[1].data || [],
    tvShows: queries[2].data || [],
    isLoading: queries.some(q => q.isLoading),
    isError: queries.some(q => q.isError),
  };
};

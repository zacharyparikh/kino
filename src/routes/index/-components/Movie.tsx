import { useQuery } from "@tanstack/react-query";
import { movieOptions } from "../../-queryOptions/movie";
import { watchlistQueryOptions } from "../../-queryOptions/watchlist";
import { MovieItem } from "../../-components/MovieItem";

interface MovieProps {
  id: string;
}

export function Movie({ id }: MovieProps) {
  const movieQuery = useQuery(movieOptions(id));
  const watchlistQuery = useQuery(watchlistQueryOptions);

  const isInWatchlist = (movieId: string) => watchlistQuery.data?.has(movieId);

  if (!movieQuery.data) {
    return null;
  }

  return <MovieItem movie={movieQuery.data} inWatchlist={isInWatchlist(id)} />;
}

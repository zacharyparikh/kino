import { useMutation, useQueryClient } from "@tanstack/react-query";
import { imageSizes, imagesBaseUrl } from "../-utils/images";
import { Movie } from "../search/-types/movie";
import { api } from "../-utils/api";
import { Button } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

const getReleaseYear = (releaseDate: string) => releaseDate.split("-")[0];

interface MovieItemProps {
  movie: Movie;
  inWatchlist?: boolean;
}

export function MovieItem({
  movie: {
    poster_path: posterPath,
    title,
    release_date: releaseDate,
    overview,
    id,
  },
  inWatchlist,
}: MovieItemProps) {
  const queryClient = useQueryClient();
  const watchlistMutation = useMutation({
    mutationFn() {
      const path = `/watchlist/${id.toString()}`;

      if (inWatchlist) {
        return api.delete(path);
      }

      return api.post(path);
    },

    async onSettled() {
      return queryClient.invalidateQueries({ queryKey: ["watchlist"] });
    },
  });

  const { isPending } = watchlistMutation;

  return (
    <li className="my-8 flex gap-2 rounded-lg border border-none bg-secondary-container p-4 text-on-secondary-container dark:bg-secondary-container-dark dark:text-on-secondary-container-dark">
      {posterPath && (
        <img src={`${imagesBaseUrl}${imageSizes.poster.small}${posterPath}`} />
      )}
      <div className="flex flex-grow flex-col gap-2">
        <div className="grid grid-flow-col">
          <div className="flex gap-2">
            <h3>{title}</h3>
            {releaseDate && (
              <span className="leading-6">{getReleaseYear(releaseDate)}</span>
            )}
          </div>
          {typeof inWatchlist === "boolean" && (
            <Button
              className="justify-self-end"
              variant="outlined"
              onClick={() => {
                watchlistMutation.mutate();
              }}
              startIcon={
                (isPending ? !inWatchlist : inWatchlist) ? <Remove /> : <Add />
              }
              disabled={isPending}
            >
              Watchlist
            </Button>
          )}
        </div>
        <div>{overview}</div>
      </div>
    </li>
  );
}

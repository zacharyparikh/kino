import { queryOptions } from "@tanstack/react-query";
import { api } from "../-utils/api";
import { movieSchema } from "../search/-types/movie";

export const movieOptions = (movieId: string) =>
  queryOptions({
    queryKey: ["movie", movieId],

    async queryFn() {
      const response = await api.get("movie", { params: { id: movieId } });
      return movieSchema.parse(response.data);
    },
  });

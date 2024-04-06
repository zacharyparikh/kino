import { z } from "zod";
import { api } from "../-utils/api";

const movieSchema = z.object({
  title: z.string(),
  backdrop_path: z.string(),
});

export async function fetchMovie(movieId: string) {
  const response = await api.get("movie", { params: { id: movieId } });
  return movieSchema.parse(response.data);
}

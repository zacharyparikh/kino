import { z } from "zod";
import { movieSchema } from "../-types/movie";
import { api } from "../../-utils/api";

const searchSchema = z.object({
  results: z.array(movieSchema),
});

export async function fetchSearch(query: string, page: number) {
  const response = await api.get("search/movies", {
    params: { query, page: String(page) },
  });
  return searchSchema.parse(response.data);
}

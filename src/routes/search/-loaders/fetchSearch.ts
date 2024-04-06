import { z } from "zod";
import { resultSchema } from "../-types/result";
import { api } from "../../-utils/api";

const searchSchema = z.object({
  results: z.array(resultSchema),
});

export async function fetchSearch(query: string, page: number) {
  const response = await api.get("search/movies", {
    params: { query, page: String(page) },
  });
  return searchSchema.parse(response.data);
}

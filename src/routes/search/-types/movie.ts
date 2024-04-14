import { z } from "zod";

export const movieSchema = z.object({
  id: z.number(),
  overview: z.string(),
  backdrop_path: z.string().nullable(),
  poster_path: z.string().nullable(),
  release_date: z.string().nullable(),
  title: z.string(),
  popularity: z.number(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export type Movie = z.infer<typeof movieSchema>;

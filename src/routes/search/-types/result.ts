import { z } from "zod";

export const resultSchema = z.object({
  id: z.number(),
  media_type: z.enum(["movie", "person"]),
  overview: z.string(),
  poster_path: z.string(),
  release_date: z.string(),
  title: z.string(),
  popularity: z.number(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export type Result = z.infer<typeof resultSchema>;

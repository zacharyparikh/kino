export interface Result {
  id: number;
  media_type: "movie" | "person";
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
}

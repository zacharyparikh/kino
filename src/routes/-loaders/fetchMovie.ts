import { baseUrl } from "../-utils/baseUrl";

interface Movie {
  title: string;
  backdrop_path: string;
}

export async function fetchMovie(movieId: string) {
  const url = new URL("movie", baseUrl);
  url.searchParams.set("id", movieId);
  const response = await fetch(url);
  return (await response.json()) as Movie | null;
}

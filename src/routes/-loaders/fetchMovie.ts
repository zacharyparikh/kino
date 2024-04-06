import { baseUrl } from "../-utils/baseUrl";

export async function fetchMovie(movieId: string) {
  const url = new URL("movie", baseUrl);
  url.searchParams.set("id", movieId);
  const response = await fetch(url);
  return response.json();
}

import { baseUrl } from "./baseUrl";

export async function fetchSearch(query: string) {
  const url = new URL("search/movies", baseUrl);
  url.searchParams.set("query", query);
  const response = await fetch(url);
  return response.json();
}

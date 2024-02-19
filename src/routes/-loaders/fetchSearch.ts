import { baseUrl } from "./baseUrl";

export async function fetchSearch(query: string, page: number) {
  const url = new URL("search/movies", baseUrl);
  const searchParams = new URLSearchParams({ query, page: String(page) });
  url.search = "?" + searchParams;

  const response = await fetch(url);
  return response.json();
}

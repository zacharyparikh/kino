import { Result } from "../-types/result";
import { baseUrl } from "../../-utils/baseUrl";

interface Search {
  results: Result[];
}

export async function fetchSearch(
  query: string,
  page: number,
): Promise<Search | null> {
  const url = new URL("search/movies", baseUrl);
  const searchParams = new URLSearchParams({ query, page: String(page) });
  url.search = "?" + searchParams.toString();

  const response = await fetch(url);
  return (await response.json()) as Search;
}

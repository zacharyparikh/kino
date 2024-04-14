import { queryOptions } from "@tanstack/react-query";
import { z } from "zod";
import { api } from "../-utils/api";

const watchlistSchema = z.array(z.string());

export const watchlistQueryOptions = queryOptions({
  queryKey: ["watchlist"],

  async queryFn() {
    const response = await api.get("watchlist");
    return watchlistSchema.parse(response.data);
  },

  select: (data) => new Set(data),
});

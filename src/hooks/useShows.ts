import { useQuery } from "@tanstack/react-query";
import { fetchShowsFromCalendar, Show } from "@/data/shows";

export function useShows(limit?: number) {
  return useQuery<Show[]>({
    queryKey: ["shows"],
    queryFn: fetchShowsFromCalendar,
    staleTime: 5 * 60 * 1000, // 5 minutes
    select: (data) => (limit ? data.slice(0, limit) : data),
  });
}

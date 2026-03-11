import { supabase } from "@/integrations/supabase/client";

export interface Show {
  date: string;
  time: string;
  venue: string;
  location: string;
  type: "indoor" | "outdoor";
}

export async function fetchShowsFromCalendar(): Promise<Show[]> {
  const { data, error } = await supabase.functions.invoke("google-calendar");

  if (error) {
    console.error("Error fetching shows from calendar:", error);
    return [];
  }

  return data?.shows || [];
}

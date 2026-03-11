/*
  UPCOMING SHOWS DATA
  
  Add new shows to this array as they are booked.
  Shows are automatically sorted by date, and past shows are filtered out.
  
  Each show entry:
  - date: "YYYY-MM-DD" format
  - time: Display time string (e.g. "8:00 PM")
  - venue: Name of the venue
  - location: City, State
  - type: "indoor" | "outdoor" (used for fun Insiders/Outsiders label)
*/

export interface Show {
  date: string;
  time: string;
  venue: string;
  location: string;
  type: "indoor" | "outdoor";
}

const shows: Show[] = [
  // Add upcoming shows here. Example entries below:
  {
    date: "2026-04-05",
    time: "8:00 PM",
    venue: "The Blue Note Lounge",
    location: "Jackson, MS",
    type: "indoor",
  },
  {
    date: "2026-04-19",
    time: "6:00 PM",
    venue: "Reservoir Park Amphitheater",
    location: "Brandon, MS",
    type: "outdoor",
  },
  {
    date: "2026-05-03",
    time: "9:00 PM",
    venue: "Hal & Mal's",
    location: "Jackson, MS",
    type: "indoor",
  },
  {
    date: "2026-05-17",
    time: "5:00 PM",
    venue: "Duling Hall Courtyard",
    location: "Jackson, MS",
    type: "outdoor",
  },
];

export function getUpcomingShows(limit?: number): Show[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = shows
    .filter((show) => new Date(show.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return limit ? upcoming.slice(0, limit) : upcoming;
}

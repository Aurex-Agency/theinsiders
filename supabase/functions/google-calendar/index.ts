import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('GOOGLE_CALENDAR_API_KEY');
    if (!apiKey) {
      throw new Error('GOOGLE_CALENDAR_API_KEY is not configured');
    }

    const calendarId = 'oliviasings2@gmail.com';
    const now = new Date().toISOString();

    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?key=${apiKey}&timeMin=${now}&singleEvents=true&orderBy=startTime&maxResults=50`;

    const response = await fetch(url);
    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Google Calendar API error [${response.status}]: ${errorBody}`);
    }

    const data = await response.json();

    const shows = (data.items || []).map((event: any) => {
      const start = event.start?.dateTime || event.start?.date || '';
      const dateStr = start.substring(0, 10); // YYYY-MM-DD

      // Parse time from dateTime or default
      let time = '';
      if (event.start?.dateTime) {
        const d = new Date(event.start.dateTime);
        time = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'America/Chicago' });
      }

      // Try to extract location or use summary for venue
      const summary = event.summary || 'TBA';
      const location = event.location || '';

      // Determine indoor/outdoor from description or default
      const desc = (event.description || '').toLowerCase();
      const titleLower = summary.toLowerCase();
      let type: 'indoor' | 'outdoor' = 'indoor';
      if (desc.includes('outdoor') || desc.includes('outsider') || titleLower.includes('outdoor') || titleLower.includes('outsider')) {
        type = 'outdoor';
      }

      return {
        date: dateStr,
        time: time || 'TBA',
        venue: summary,
        location: location || 'TBA',
        type,
      };
    });

    return new Response(JSON.stringify({ shows }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching calendar:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: message, shows: [] }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

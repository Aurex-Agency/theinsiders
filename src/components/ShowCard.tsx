import { FC } from "react";
import { format, parseISO } from "date-fns";
import { MapPin, Clock } from "lucide-react";
import type { Show } from "@/data/shows";

interface ShowCardProps {
  show: Show;
}

const ShowCard: FC<ShowCardProps> = ({ show }) => {
  const dateObj = parseISO(show.date);
  const month = format(dateObj, "MMM").toUpperCase();
  const day = format(dateObj, "d");
  const weekday = format(dateObj, "EEEE");

  return (
    <div className="glass-card flex items-center gap-4 group hover:scale-[1.02] transition-transform duration-200">
      {/* Date block */}
      <div className="shrink-0 w-16 h-16 rounded-lg bg-primary/15 flex flex-col items-center justify-center border border-primary/20">
        <span className="text-[10px] font-bold tracking-widest text-primary">{month}</span>
        <span className="text-2xl font-heading text-primary leading-none">{day}</span>
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h3 className="font-heading text-foreground text-sm sm:text-base truncate">{show.venue}</h3>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-muted-foreground mt-0.5">
          {show.location && show.location !== "TBA" && (
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {show.location}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {weekday}, {show.time}
          </span>
        </div>
      </div>

      {/* Indoor/Outdoor badge */}
      <span
        className={`shrink-0 text-[10px] font-bold tracking-wide px-2 py-1 rounded-full ${
          show.type === "indoor"
            ? "bg-primary/15 text-primary"
            : "bg-secondary/15 text-secondary"
        }`}
      >
        {show.type === "indoor" ? "INSIDERS" : "OUTSIDERS"}
      </span>
    </div>
  );
};

export default ShowCard;

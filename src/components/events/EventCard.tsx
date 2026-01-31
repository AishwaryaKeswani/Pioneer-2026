import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Event } from "@/data/events";
import { cn } from "@/lib/utils";

interface EventCardProps {
  event: Event;
  variant?: "default" | "large";
}

export const EventCard = ({ event, variant = "default" }: EventCardProps) => {
  const Icon = event.icon;
  const isLarge = variant === "large";

  return (
    <Link
      to={`/events/${event.id}`}
      className={cn(
        "block h-full group perspective-1000",
        isLarge ? "md:col-span-1" : ""
      )}
    >
      <div
        className={cn(
          "relative h-full rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 transform-style-3d",
          isLarge ? "hover:scale-[1.02]" : ""
        )}
      >
        {/* Neon Border Glow */}
        <div
          className={cn(
            "absolute -inset-[2px] rounded-2xl transition-all duration-500 animate-gradient-xy",
            isLarge
              ? "bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 blur-lg opacity-60 group-hover:opacity-100 group-hover:blur-2xl"
              : "bg-gradient-to-r from-sky-400 via-purple-600 to-sky-400 blur-md opacity-40 group-hover:opacity-80 group-hover:blur-lg"
          )}
        />

        {/* Card */}
        <div className="relative h-full bg-card/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden flex flex-col">
          
          {/* Image */}
          <div
            className={cn(
              "relative overflow-hidden shrink-0",
              isLarge ? "h-64 md:h-72" : "h-48"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />

            <img
              src={event.image}
              alt={event.title}
              className="
                w-full h-full object-cover
                transition-transform duration-700
                group-hover:scale-110
              "
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 z-20 flex gap-2">
              <span
                className={cn(
                  "px-3 py-1 text-xs font-montserrat font-semibold uppercase tracking-wider backdrop-blur-md rounded-full border",
                  isLarge
                    ? "text-cyan-100 bg-cyan-500/20 border-cyan-400/30"
                    : "text-white bg-primary/60 border-white/20"
                )}
              >
                {event.type}
              </span>

              <span className="px-3 py-1 text-xs font-montserrat font-semibold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                {event.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div
            className={cn(
              "p-6 flex flex-col flex-grow relative z-20",
              isLarge ? "p-8" : ""
            )}
          >
            <div className="mb-auto">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    isLarge
                      ? "bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/30 group-hover:bg-cyan-500/20"
                      : "bg-primary/10 text-primary ring-1 ring-primary/30 group-hover:bg-primary/20"
                  )}
                >
                  <Icon className={cn("w-5 h-5", isLarge && "w-6 h-6")} />
                </div>

                <h3
                  className={cn(
                    "font-bold font-playfair text-foreground transition-colors group-hover:text-primary",
                    isLarge ? "text-2xl md:text-3xl" : "text-xl"
                  )}
                >
                  {event.title}
                </h3>
              </div>

              <p
                className={cn(
                  "text-muted-foreground font-montserrat",
                  isLarge ? "text-base line-clamp-4" : "text-sm line-clamp-3"
                )}
              >
                {event.shortDescription}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-sm font-montserrat font-semibold tracking-wider uppercase text-muted-foreground group-hover:text-white transition-colors">
              <span>Explore</span>
              <ArrowRight className="w-5 h-5 text-primary transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

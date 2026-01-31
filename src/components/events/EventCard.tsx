import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Event } from "@/data/events";
import { cn } from "@/lib/utils";

interface EventCardProps {
  event: Event;
  variant?: 'default' | 'large';
}

export const EventCard = ({ event, variant = 'default' }: EventCardProps) => {
  const Icon = event.icon;
  const isLarge = variant === 'large';

  return (
    // Removed outer Link to allow interactive buttons inside
    <div className={cn("block h-full group perspective-1000", isLarge ? "md:col-span-1" : "")}>
      <div className={cn(
          "relative h-full rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 transform-style-3d",
           isLarge ? "hover:scale-[1.02]" : ""
        )}>
        {/* Animated Neon Border Glow */}
        <div className={cn(
          "absolute -inset-[2px] rounded-2xl transition-all duration-500 animate-gradient-xy",
          isLarge 
            ? "bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 blur-lg opacity-60 group-hover:opacity-100 group-hover:blur-2xl" 
            : "bg-gradient-to-r from-sky-400 via-purple-600 to-sky-400 blur-md opacity-40 group-hover:opacity-80 group-hover:blur-lg"
        )}></div>

        {/* Card Content */}
        <div className="relative h-full bg-card/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden flex flex-col">
          
          {/* Image Container - Linked to Details */}
          <Link to={`/events/${event.id}`} className={cn("relative overflow-hidden shrink-0 block", isLarge ? "h-64 md:h-72" : "h-48")}>
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10"></div>
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            {/* Type badge */}
            <div className="absolute top-4 left-4 z-20 flex gap-2">
              <span className={cn(
                  "px-3 py-1 text-xs font-montserrat font-semibold uppercase tracking-wider backdrop-blur-md rounded-full border",
                  isLarge 
                    ? "text-cyan-100 bg-cyan-500/20 border-cyan-400/30" 
                    : "text-white bg-primary/60 border-white/20"
              )}>
                {event.type}
              </span>
               <span className="px-3 py-1 text-xs font-montserrat font-semibold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                {event.category}
              </span>
            </div>
          </Link>

          {/* Text Content - Linked to Details */}
          <div className={cn("p-6 flex flex-col flex-grow relative z-20", isLarge ? "p-8" : "")}>
            <Link to={`/events/${event.id}`} className="mb-auto block">
              <div className="flex items-center gap-3 mb-4">
                <div className={cn(
                    "p-2 rounded-lg transition-colors", 
                    isLarge 
                      ? "bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/30 group-hover:bg-cyan-500/20" 
                      : "bg-primary/10 text-primary ring-1 ring-primary/30 group-hover:bg-primary/20"
                  )}>
                  <Icon className={cn("w-5 h-5", isLarge ? "w-6 h-6" : "")} />
                </div>
                <h3 className={cn(
                    "font-bold font-playfair text-foreground transition-colors group-hover:text-primary",
                    isLarge ? "text-2xl md:text-3xl" : "text-xl"
                  )}>
                  {event.title}
                </h3>
              </div>
              <p className={cn(
                  "text-muted-foreground font-montserrat",
                  isLarge ? "text-base line-clamp-4" : "text-sm line-clamp-3"
                )}>
                {event.shortDescription}
              </p>
            </Link>
            
            {/* Footer Actions: Explore & Register */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between gap-3">
              {/* Explore Link */}
              <Link 
                to={`/events/${event.id}`} 
                className="flex items-center gap-2 text-sm font-montserrat font-semibold tracking-wider uppercase text-muted-foreground hover:text-white transition-colors group/link"
              >
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform text-primary" />
              </Link>

              {/* Register Button */}
              <a 
                href={event.registrationLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg",
                  isLarge 
                    ? "bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-black border border-cyan-500/30 hover:shadow-cyan-500/25" 
                    : "bg-primary/10 text-primary hover:bg-primary hover:text-white border border-primary/30 hover:shadow-primary/25"
                )}
                onClick={(e) => e.stopPropagation()} // Prevent triggering other click events if any
              >
                <span>Register</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
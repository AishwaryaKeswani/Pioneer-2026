import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { EventCard } from "@/components/events/EventCard";
import { events, Event } from "@/data/events";
import { cn } from "@/lib/utils";

type FilterType = 'all' | 'central' | 'departmental';

const Events = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  // Separate events by type
  const centralEvents = events.filter(e => e.type === 'central');
  const departmentalEvents = events.filter(e => e.type === 'departmental');

  // Helper to determine which sections to show based on filter
  const showCentral = filter === 'all' || filter === 'central';
  const showDepartmental = filter === 'all' || filter === 'departmental';

  const FilterButton = ({ type, label }: { type: FilterType; label: string }) => (
    <button
      onClick={() => setFilter(type)}
      className={cn(
        "px-6 py-2 rounded-full font-montserrat text-sm font-semibold tracking-wider uppercase transition-all duration-300 border",
        filter === type
          ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
          : "bg-card/30 text-muted-foreground border-white/10 hover:bg-card/50 hover:text-white"
      )}
    >
      {label}
    </button>
  );

  return (
    <Layout>
      <section className="relative py-24 overflow-hidden animated-gradient-bg min-h-screen">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
           <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="font-montserrat text-muted-foreground text-sm md:text-base uppercase tracking-widest mb-4">
            Competition & Innovation
          </p>
        </div>
          <h1
  className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-center"
  style={{ animationDelay: "0.1s" }}
>
  <span className="gradient-text">Festival</span> Events
</h1>

            <p className="text-lg text-muted-foreground font-montserrat animate-fade-in mb-8" style={{ animationDelay: "0.2s" }}>
              Discover the main stage central events and specific departmental challenges.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <FilterButton type="all" label="All Events" />
              <FilterButton type="central" label="Central" />
              <FilterButton type="departmental" label="Departmental" />
            </div>
          </div>

          <div className="space-y-20">
            {/* Section 1: Central Events (Bigger Cards) */}
            {showCentral && centralEvents.length > 0 && (
              <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center gap-4 mb-8">
                   <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                   <h2 className="text-2xl md:text-3xl font-playfair font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 uppercase tracking-wider">
                    Central Events
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                </div>
                
                {/* Wider grid for central events */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 place-items-center">
                  {centralEvents.map((event, index) => (
                    // Using variant="large" here
                    <div key={event.id} className="w-full max-w-xl" style={{ animationDelay: `${0.1 * index}s` }}>
                       <EventCard event={event} variant="large" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 2: Departmental Events (Standard Cards) */}
            {showDepartmental && departmentalEvents.length > 0 && (
              <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
                 <div className="flex items-center gap-4 mb-8">
                   <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                   <h2 className="text-xl md:text-2xl font-playfair font-bold text-center text-muted-foreground uppercase tracking-wider">
                    Departmental Events
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                </div>

                {/* Denser grid for departmental events */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {departmentalEvents.map((event, index) => (
                    <div key={event.id} style={{ animationDelay: `${0.1 * index}s` }}>
                      <EventCard event={event} variant="default" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
           {/* Empty State */}
           {!showCentral && !showDepartmental && (
              <div className="text-center py-20 text-muted-foreground font-montserrat">
                No events found for this filter.
              </div>
            )}
        </div>
      </section>
    </Layout>
  );
};

export default Events;
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { events } from "@/data/events";
import { ArrowLeft, Download, Sparkles } from "lucide-react";

const EventDetails = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const event = events.find((e) => e.id === eventId);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!event) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-playfair font-bold mb-4 gradient-text">Event Not Found</h1>
          <Link to="/events" className="text-primary hover:underline flex items-center gap-2 font-montserrat">
            <ArrowLeft className="w-4 h-4" /> Back to Events
          </Link>
        </div>
      </Layout>
    );
  }

  const Icon = event.icon;

  return (
    <Layout>
      <section className="relative pt-32 pb-24 overflow-hidden animated-gradient-bg min-h-screen">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-40 animate-pulse-glow"></div>
            <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl opacity-40 animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <Link to="/events" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group font-montserrat tracking-wider uppercase text-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to all events
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Content */}
            <div className="order-2 lg:order-1 animate-slide-right">
                {/* Category & Date Pills */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="px-4 py-1.5 text-xs font-montserrat font-bold uppercase tracking-wider text-white bg-primary/80 backdrop-blur-md rounded-full border border-primary/30 flex items-center gap-2">
                        <Icon className="w-4 h-4" /> {event.category}
                    </span>
                     <span className="px-4 py-1.5 text-xs font-montserrat font-bold uppercase tracking-wider text-foreground/80 bg-card/50 backdrop-blur-md rounded-full border border-white/10">
                        {event.date}
                    </span>
                </div>

              <h1 className="font-playfair text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-primary-foreground to-white bg-clip-text text-transparent drop-shadow-sm">
                {event.title}
              </h1>
              <p className="font-montserrat text-xl text-primary tracking-[0.2em] uppercase mb-8">
                 {event.tagline}
              </p>

              <div className="glass-card p-8 rounded-2xl border-white/10 bg-card/50 backdrop-blur-md mb-10">
                 <p className="text-lg text-muted-foreground font-montserrat leading-relaxed whitespace-pre-line">
                    {event.fullDescription}
                 </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Primary Register Button (Glow effect) */}
                <a href="#register" className="glow-button flex items-center justify-center gap-3 text-base md:text-lg px-8 py-4 font-montserrat tracking-wider">
                  <Sparkles className="w-5 h-5" />
                  REGISTER NOW
                </a>

                {/* Secondary Problem Statement Button (Outline with gradient border hover) */}
                <a href="#problem-statement" className="group relative flex items-center justify-center gap-3 px-8 py-4 font-montserrat font-bold tracking-wider text-base md:text-lg text-foreground hover:text-white overflow-hidden rounded-full transition-all duration-300">
                    <div className="absolute inset-0 rounded-full border-2 border-primary/50 group-hover:border-transparent transition-all duration-300"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 blur-md transition-all duration-300 z-0"></div>
                    <div className="absolute inset-[2px] rounded-full bg-background z-10 group-hover:bg-transparent transition-all duration-300"></div>
                  <span className="relative z-20 flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    PROBLEM STATEMENT
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column: Image Placeholder with Neon Glow */}
            <div className="order-1 lg:order-2 animate-slide-left">
              <div className="relative group rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-square max-h-[600px] mx-auto">
                 {/* Animated Neon Border Glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary via-purple-500 to-secondary rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-all duration-500 animate-pulse-glow"></div>
                
                <div className="relative h-full w-full bg-card/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 p-2">
                   <div className="h-full w-full rounded-2xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                         {/* Overlay Text/Watermark */}
                        <div className="absolute bottom-8 left-8 z-20">
                             <h2 className="text-3xl font-playfair font-bold text-white mb-2">{event.title}</h2>
                             <p className="text-primary font-montserrat tracking-widest uppercase text-sm">{event.category}</p>
                        </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventDetails;
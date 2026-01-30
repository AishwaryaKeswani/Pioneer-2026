import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { events } from "@/data/events";
import { ArrowLeft, Download, Sparkles, Trophy, ClipboardList, UserPlus, Phone } from "lucide-react";

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
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl opacity-40 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <Link to="/events" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group font-montserrat tracking-wider uppercase text-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to all events
          </Link>

          {/* --- Main Hero Section (Existing Layout) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
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
          

              <div className="glass-card p-8 rounded-2xl border-white/10 bg-card/50 backdrop-blur-md mb-10">
                <p className="text-lg text-muted-foreground font-montserrat leading-relaxed whitespace-pre-line">
                  {event.fullDescription}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="https://pages.razorpay.com/pl_S6r8iPhNuvOpxJ/view" className="glow-button flex items-center justify-center gap-3 text-base md:text-lg px-8 py-4 font-montserrat tracking-wider">
                  <Sparkles className="w-5 h-5" />
                  REGISTER NOW
                </a>

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

            {/* Right Column: Image Placeholder */}
            <div className="order-1 lg:order-2 animate-slide-left">
              <div className="relative group rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-square max-h-[600px] mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary via-purple-500 to-secondary rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-all duration-500 animate-pulse-glow"></div>
                <div className="relative h-full w-full bg-card/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 p-2">
                  <div className="h-full w-full rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-8 left-8 z-20">
                      <h2 className="text-3xl font-playfair font-bold text-white mb-2">{event.title}</h2>
                      <p className="text-primary font-montserrat tracking-widest uppercase text-sm">{event.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- New Information Sections --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 1. Prize Distribution */}
            <div className="group relative rounded-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -inset-[1px] bg-gradient-to-r from-gold via-amber-500 to-gold rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
              <div className="relative h-full glass-card p-8 bg-card/40 backdrop-blur-md border-white/10 rounded-2xl overflow-hidden">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-gold/10 text-gold group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="w-8 h-8 animate-bounce-gentle" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground">Prize Pool</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-gold/10 transition-colors">
                    <span className="font-montserrat font-bold text-gold">1st Prize</span>
                    <span className="font-playfair font-bold text-xl">{event.prizes.first}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <span className="font-montserrat font-semibold text-gray-300">2nd Prize</span>
                    <span className="font-playfair font-bold text-lg">{event.prizes.second}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <span className="font-montserrat font-semibold text-gray-300">3rd Prize</span>
                    <span className="font-playfair font-bold text-lg">{event.prizes.third}</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                    <span className="font-montserrat text-sm uppercase tracking-wider text-muted-foreground">Total Pool</span>
                    <span className="font-playfair font-bold text-2xl text-gold">{event.prizes.total}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Registration Details */}
            <div className="group relative rounded-2xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
              <div className="relative h-full glass-card p-8 bg-card/40 backdrop-blur-md border-white/10 rounded-2xl">
                 <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 group-hover:rotate-12 transition-transform duration-300">
                    <UserPlus className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground">Registration</h3>
                </div>
                
                <div className="space-y-6">
                   <div className="flex flex-col gap-2">
                      <span className="text-sm font-montserrat uppercase tracking-wider text-muted-foreground">Registration Fee</span>
                      <span className="text-xl font-bold font-playfair">{event.registrationDetails.fee}</span>
                   </div>
                   <div className="flex flex-col gap-2">
                      <span className="text-sm font-montserrat uppercase tracking-wider text-muted-foreground">Team Size</span>
                      <span className="text-xl font-bold font-playfair">{event.registrationDetails.teamSize}</span>
                   </div>
                   
                   <a href="#register" className="inline-flex items-center justify-center w-full py-3 mt-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-montserrat font-bold tracking-wide transition-colors">
                      Register Now
                   </a>
                </div>
              </div>
            </div>

            {/* 3. Rules & Regulations */}
            <div className="group relative rounded-2xl animate-fade-in md:col-span-2 lg:col-span-1" style={{ animationDelay: '0.4s' }}>
              <div className="absolute -inset-[1px] bg-gradient-to-r from-red-500 via-pink-500 to-red-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
              <div className="relative h-full glass-card p-8 bg-card/40 backdrop-blur-md border-white/10 rounded-2xl">
                 <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-red-500/10 text-red-400 group-hover:scale-105 transition-transform duration-300">
                    <ClipboardList className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground">Rules & Regulations</h3>
                </div>
                
                <ul className="space-y-3">
                  {event.rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground font-montserrat text-sm">
                       <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                       {rule}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4. Contact Information */}
            <div className="group relative rounded-2xl animate-fade-in md:col-span-2 lg:col-span-1" style={{ animationDelay: '0.5s' }}>
              <div className="absolute -inset-[1px] bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
              <div className="relative h-full glass-card p-8 bg-card/40 backdrop-blur-md border-white/10 rounded-2xl">
                 <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-green-500/10 text-green-400 group-hover:rotate-12 transition-transform duration-300">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground">Contact Us</h3>
                </div>
                
                <div className="grid gap-4">
                  {event.coordinators.map((coordinator, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-green-500/10 transition-colors group/item">
                       <div>
                          <p className="font-bold font-montserrat text-foreground">{coordinator.name}</p>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">Event Coordinator</p>
                       </div>
                       <a href={`tel:${coordinator.phone}`} className="text-green-400 hover:text-green-300 font-mono text-sm">
                          {coordinator.phone}
                       </a>
                    </div>
                  ))}
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
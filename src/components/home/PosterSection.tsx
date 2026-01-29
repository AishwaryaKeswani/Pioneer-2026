export const PosterSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 text-center">
        {/* Welcome Text */}
        <div className="mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold font-playfair">
            <span className="gradient-text">Welcome to the</span>
            <br />
            <span className="text-foreground">National Tech Event</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-montserrat">
            Join Us Today
          </p>
        </div>

        {/* Poster with Gradient Framer Effect */}
        <div className="relative max-w-4xl mx-auto group perspective-1000">
          {/* Animated Gradient Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-75 blur transition duration-500 group-hover:opacity-100 group-hover:blur-xl animate-pulse-glow"></div>
          
          <div className="relative bg-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 transform group-hover:scale-[1.01]">
            <div className="aspect-video w-full bg-black/50 flex items-center justify-center relative overflow-hidden">
              {/* Placeholder for Poster Image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 z-0"></div>
              
              {/* Replace src with your actual poster image */}
              <img 
                src="/placeholder.svg" 
                alt="Pioneer 2026 Event Poster" 
                className="w-full h-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
              
              {/* Hover Overlay Text (Optional) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                <span className="text-white font-playfair text-2xl font-bold tracking-widest border border-white/30 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md">
                  EXPLORE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
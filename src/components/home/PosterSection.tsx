import { Download } from "lucide-react";

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
            {/* Removed aspect-video constraint here */}
            <div className="w-full bg-black/50 flex items-center justify-center relative overflow-hidden">
              {/* Placeholder for Poster Image Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 z-0"></div>
              
              {/* Image updated to w-full h-auto for natural sizing */}
              <img 
                src="/images/home/poster.jpeg" 
                alt="Pioneer 2026 Event Poster" 
                className="relative z-10 w-full h-auto object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />              
            </div>
          </div>
        </div>

      </div>


         {/* Download Button */}
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <a 
            href="/images/home/poster.jpeg" 
            download="Pioneer2026_Poster.jpg"
            className="glow-button flex items-center gap-3 px-8 py-3 rounded-full font-montserrat font-bold tracking-wider text-sm md:text-base group hover:scale-105 transition-all duration-300"
          >
            <Download className="w-5 h-5 group-hover:translate-y-2 transition-transform" />
            Download Poster
          </a>
        </div>
    </section>
  );
};
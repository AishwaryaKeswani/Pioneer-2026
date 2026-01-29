import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient-bg">
      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="font-montserrat text-muted-foreground text-sm md:text-base uppercase tracking-widest mb-4">
            viviota PRESENTS
          </p>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="gradient-text">Pune Startup</span>
            <br />
            <span className="text-foreground">Fest</span>
          </h1>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="font-montserrat text-xl md:text-2xl text-muted-foreground mb-2">
            January 2026
          </p>
          <p className="font-montserrat text-2xl md:text-3xl text-foreground font-semibold mb-8">
            17th & 18th
          </p>
        </div>

        <div
          className="animate-fade-in-scale"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#register"
            className="glow-button font-montserrat text-base md:text-lg px-10 py-4 inline-block"
          >
            REGISTER NOW
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
    </section>
  );
};

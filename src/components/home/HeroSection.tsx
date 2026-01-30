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
      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="font-montserrat text-muted-foreground text-sm md:text-base uppercase tracking-widest mb-4">
            KITCOEK PRESENTS
          </p>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h1 className="font-samarkan text-5xl md:text-7xl lg:text-9xl font-bold mb-6">
            {/* Sky Blue to Purple Gradient */}
            <span className="bg-gradient-to-r from-sky-400 to-purple-600 bg-clip-text text-transparent">
              Pioneer
            </span>
            <br />
            <span className="text-foreground">2026</span>
          </h1>
        </div>

        {/* Updated Date Layout: Month/Year | Date */}
        <div className="animate-fade-in flex justify-center mb-10" style={{ animationDelay: "0.6s" }}>
          <div className="relative group cursor-default">
            {/* Animated Gradient Glow Background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-purple-600 to-sky-400 rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-500 group-hover:blur-md animate-gradient-xy"></div>
            
            {/* Main Glass Card */}
            <div className="relative glass-card px-8 py-4 rounded-xl border border-white/10 bg-black/80 backdrop-blur-xl flex items-center gap-6">
              
              {/* Left Side: Month & Year */}
              <div className="flex flex-col items-end justify-center">
                <span className="font-montserrat text-xl md:text-2xl font-bold text-gray-200 tracking-wider">
                  FEB
                </span>
                <span className="font-montserrat text-sm md:text-base text-gray-400 tracking-widest">
                  2026
                </span>
              </div>

              {/* Partition Line */}
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

              {/* Right Side: Date (Bigger & White) */}
              <div className="flex items-baseline">
                <span className="font-playfair text-5xl md:text-7xl font-bold text-white drop-shadow-lg leading-none">
                  21
                </span>
                <span className="font-playfair text-2xl md:text-3xl font-bold text-white/90 ml-1">
                  st
                </span>
              </div>

            </div>
          </div>
        </div>

        <div
          className="animate-fade-in-scale mb-12"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#register"
            className="glow-button font-montserrat text-base md:text-lg px-10 py-4 inline-block"
          >
            REGISTER NOW
          </a>
        </div>

        {/* Banner Text */}
        <div className="animate-slide-down mt-8" style={{ animationDelay: "1s" }}>
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-full opacity-50"></div>
            <h2 className="relative text-xl md:text-3xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white uppercase tracking-wider">
              welcome to 29th edition of pioneer
            </h2>
          </div>
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
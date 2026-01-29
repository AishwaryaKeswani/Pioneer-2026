import { Layout } from "@/components/layout/Layout";

// 1. Featured Sponsors Data (4 Items)
const featuredSponsors = [
  { name: "TechGiant Corp", logo: "/placeholder.svg" },
  { name: "InnovateLabs", logo: "/placeholder.svg" },
  { name: "FutureVentures", logo: "/placeholder.svg" },
  { name: "GlobalSystems", logo: "/placeholder.svg" },
];

// 2. Partners Data (~40 Items generated for layout demonstration)
const partners = Array.from({ length: 40 }).map((_, i) => ({
  name: `Partner ${i + 1}`,
  logo: "/placeholder.svg",
}));

const Sponsors = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 animated-gradient-bg relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Sponsors & Partners</span>
          </h1>
          <p
            className="font-montserrat text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Collaborating with industry visionaries to power the future of innovation.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card min-h-screen">
        <div className="container mx-auto px-4">
          
          {/* --- Category 1: Featured Sponsors --- */}
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-16 justify-center animate-fade-in">
              <div className="h-px w-12 md:w-32 bg-gradient-to-r from-transparent to-cyan-500/50"></div>
              <h2 className="font-playfair text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-white uppercase tracking-wider drop-shadow-sm">
                Featured Sponsors
              </h2>
              <div className="h-px w-12 md:w-32 bg-gradient-to-l from-transparent to-cyan-500/50"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-10 md:gap-16">
              {featuredSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="relative group w-full max-w-[300px] h-[180px] md:w-[350px] md:h-[220px] animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Neon Gradient Outline (Intense for Featured) */}
                  <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 opacity-60 group-hover:opacity-100 blur-md transition-all duration-500 animate-gradient-xy group-hover:blur-xl"></div>

                  {/* Card Content */}
                  <div className="relative h-full w-full glass-card flex items-center justify-center p-8 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                    {/* Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-[85%] max-h-[85%] object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- Category 2: Our Partners --- */}
          <div>
            <div className="flex items-center gap-4 mb-16 justify-center animate-fade-in">
              <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-primary/30"></div>
              <h2 className="font-playfair text-2xl md:text-4xl font-bold text-center text-muted-foreground uppercase tracking-wider">
                Our Partners
              </h2>
              <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-primary/30"></div>
            </div>

            {/* Grid for 40 items */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 place-items-center">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="relative group w-full h-[100px] md:h-[120px] animate-fade-in"
                  style={{ animationDelay: `${0.2 + (index * 0.05)}s` }} // Staggered animation
                >
                  {/* Neon Gradient Outline (Appears on Hover) */}
                  <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-primary via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300"></div>

                  {/* Card Content */}
                  <div className="relative h-full w-full glass-card flex items-center justify-center p-4 bg-card/40 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-[80%] max-h-[80%] object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Sponsors;
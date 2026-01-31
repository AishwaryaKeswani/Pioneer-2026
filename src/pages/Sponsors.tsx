import { Layout } from "@/components/layout/Layout";

// 1. Featured Sponsors Data (4 Items)
const featuredSponsors = [
  { name: "Honda Big", logo: "/images/sponsors/honda.jpeg" },
  { name: "IDBI", logo: "/images/sponsors/idbi.jpeg" },
  { name: "Mahindra", logo: "/images/sponsors/mahindra.jpeg" },
  { name: "SBI", logo: "/images/sponsors/sbi.png" },
];

// 2. Partners Data (40 Different Images)
const partners = [
  { name: "TPE", logo: "images/sponsors/tpe.jpeg" },
  { name: "Maruti Sujuki", logo: "images/sponsors/maruti.jpeg" },
  { name: "Vanita Agro", logo: "images/sponsors/vanita.jpeg" },
  { name: "Mahindra", logo: "images/sponsors/mahindrasports.jpeg" },
  { name: "Shanti", logo: "images/sponsors/shanti.jpeg" },
  { name: "yezdi", logo: "images/sponsors/yezdi.jpeg" },
  { name: "Superhero", logo: "images/sponsors/superhero.jpeg" },
  { name: "Menon Bearings", logo: "images/sponsors/menon.jpeg" },
  { name: "Manchester", logo: "images/sponsors/manchester.jpeg" },
  { name: "mahalaxmi ", logo: "images/sponsors/mahalaxmi motors.jpeg" },
  { name: "synergic", logo: "images/sponsors/synergy.jpeg" },
  { name: "37", logo: "images/sponsors/vision.jpeg" },
  { name: "mayura steel", logo: "images/sponsors/mayura.jpeg" },
  { name: "RV Exhaust System", logo: "images/sponsors/RV Exhaust.jpeg" },
  { name: "Steel & profile", logo: "images/sponsors/steel&profile.jpeg" },
  { name: "venkateshwar", logo: "images/sponsors/vekentehwar.jpeg" },
  { name: "HEM Electroniques", logo: "images/sponsors/hem electroniques.jpeg" },
  { name: "Ghatage Roofying", logo: "images/sponsors/ghatage.jpeg" },
  { name: "18", logo: "images/sponsors/dharti.jpeg" },
  { name: "19", logo: "images/sponsors/KR motors.jpeg" },
  { name: "20", logo: "images/sponsors/tata chetan.jpeg" },
  { name: "21", logo: "images/sponsors/aaira.jpeg" },
  { name: "22", logo: "images/sponsors/tumbledry.jpeg" },
  { name: "23", logo: "images/sponsors/adms.jpeg" },
  { name: "24", logo: "images/sponsors/bank.jpeg" },
  { name: "25", logo: "images/sponsors/sg phyto.jpeg" },
  { name: "26", logo: "images/sponsors/rh house.jpeg" },
  { name: "27", logo: "images/sponsors/aan purn.jpeg" },
  { name: "28", logo: "images/sponsors/puja fabriceters.jpeg" },
  { name: "29", logo: "images/sponsors/natural grp.jpeg" },
  { name: "30", logo: "images/sponsors/ravikiran.jpeg" },
  { name: "31", logo: "images/sponsors/mirachi.jpeg" },
  { name: "32", logo: "images/sponsors/languageberg.jpeg" },
  { name: "33", logo: "images/sponsors/infogrow.jpeg" },
  { name: "34", logo: "images/sponsors/procom.jpeg" },
  { name: "35", logo: "images/sponsors/walawakar.jpeg" },
];

const Sponsors = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 animated-gradient-bg relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Our Proud Sponsors</span>
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
                  {/* Neon Gradient Outline */}
                  <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 opacity-60 group-hover:opacity-100 blur-md transition-all duration-500 animate-gradient-xy group-hover:blur-xl"></div>

                  {/* Card Content */}
                  <div className="relative h-full w-full glass-card flex items-center justify-center p-8 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
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

          {/* --- Category 2: Our Partners (4 per row, Full Color) --- */}
          <div>
            <div className="flex items-center gap-4 mb-16 justify-center animate-fade-in">
              <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-primary/30"></div>
              <h2 className="font-playfair text-2xl md:text-4xl font-bold text-center text-muted-foreground uppercase tracking-wider">
                Our Partners
              </h2>
              <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-primary/30"></div>
            </div>

            {/* 4 Columns Grid - Full Color Display */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="relative group w-full h-[100px] md:h-[120px] animate-fade-in"
                  style={{ animationDelay: `${0.2 + (index * 0.05)}s` }}
                >
                  <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-primary via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300"></div>

                  <div className="relative h-full w-full glass-card flex items-center justify-center p-4 bg-card/40 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1">
                    {/* Removed grayscale and opacity-60 - now full color */}
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-[80%] max-h-[80%] object-contain transition-all duration-300 group-hover:scale-110"
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
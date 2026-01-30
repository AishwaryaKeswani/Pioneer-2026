const sponsors = [
  { name: "TechCorp", logo: "public/images/home/tpe.jpeg" },
  { name: "InnovateLabs", logo: "public/images/home/maruti.jpeg "},
  { name: "FutureVentures", logo: "public/images/home/vanita.jpeg" },
  { name: "StartupHub", logo: "public/images/home/mahindrasports.jpeg" },
  { name: "GrowthPartners", logo: "public/images/home/a5.webp" },
  { name: "TechCorp", logo: "public/images/home/" },
  { name: "InnovateLabs", logo: "public/images/home/maruti.jpeg "},
  { name: "FutureVentures", logo: "public/images/home/vanita.jpeg" },
  { name: "StartupHub", logo: "public/images/home/mahindrasports.jpeg" },
  { name: "GrowthPartners", logo: "public/images/home/a5.webp" },
  { name: "TechCorp", logo: "public/images/home/tpe.jpeg" },
  { name: "InnovateLabs", logo: "public/images/home/maruti.jpeg "},
  { name: "FutureVentures", logo: "public/images/home/vanita.jpeg" },
  { name: "StartupHub", logo: "public/images/home/mahindrasports.jpeg" },
  { name: "GrowthPartners", logo: "public/images/home/a5.webp" },
  { name: "TechCorp", logo: "public/images/home/tpe.jpeg" },
  { name: "InnovateLabs", logo: "public/images/home/maruti.jpeg "},
  { name: "FutureVentures", logo: "public/images/home/vanita.jpeg" },
  { name: "StartupHub", logo: "public/images/home/mahindrasports.jpeg" },
  { name: "GrowthPartners", logo: "public/images/home/a5.webp" },
  { name: "TechCorp", logo: "public/images/home/tpe.jpeg" },
  { name: "InnovateLabs", logo: "public/images/home/maruti.jpeg "},
  { name: "FutureVentures", logo: "public/images/home/vanita.jpeg" },
  { name: "StartupHub", logo: "public/images/home/mahindrasports.jpeg" },
  { name: "GrowthPartners", logo: "public/images/home/a5.webp" },
  { name: "TechCorp", logo: "public/images/home/tpe.jpeg" },
  { name: "InnovateLabs", logo: "public/images/home/maruti.jpeg "},
  { name: "FutureVentures", logo: "public/images/home/vanita.jpeg" },
  { name: "StartupHub", logo: "public/images/home/mahindrasports.jpeg" },
  { name: "GrowthPartners", logo: "public/images/home/a5.webp" },
  { name: "TechCorp", logo: "public/images/home/tpe.jpeg" },
  { name: "InnovateLabs", logo: "public/images/home/maruti.jpeg "},
  { name: "FutureVentures", logo: "public/images/home/vanita.jpeg" },
  { name: "StartupHub", logo: "public/images/home/mahindrasports.jpeg" },
  { name: "GrowthPartners", logo: "public/images/home/a5.webp" },
  { name: "TechCorp", logo: "public/images/home/tpe.jpeg" },
  { name: "InnovateLabs", logo: "public/images/home/maruti.jpeg "},
  { name: "FutureVentures", logo: "public/images/home/vanita.jpeg" },
  { name: "StartupHub", logo: "public/images/home/mahindrasports.jpeg" },
  { name: "GrowthPartners", logo: "public/images/home/a5.webp" },

  
];

export const SponsorsMarquee = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center">
          <span className="gradient-text">Our Sponsors</span>
        </h2>
      </div>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-content">
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="flex-shrink-0 w-40 h-20 glass-card flex items-center justify-center px-6 grayscale hover:grayscale-0 transition-all duration-600"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={`${sponsor.name}-dup-${index}`}
              className="flex-shrink-0 w-40 h-20 glass-card flex items-center justify-center px-6 grayscale hover:grayscale-0 transition-all duration-600"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

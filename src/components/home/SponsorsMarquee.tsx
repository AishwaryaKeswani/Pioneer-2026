const sponsors = [
  { name: "TechCorp", logo: "public/images/home/tpe.jpeg" },
  { name: "InnovateLabs", logo: "public/images/home/maruti.jpeg"},
  { name: "FutureVentures", logo: "public/images/home/vanita.jpeg" },
  { name: "StartupHub", logo: "public/images/home/a4.jpg" },
  { name: "GrowthPartners", logo: "public/images/home/a5.webp" },
  { name: "TechCorp", logo: "public/images/home/a6.webp" },
  { name: "InnovateLabs", logo: "public/images/home/a7.jpg "},
  { name: "FutureVentures", logo: "public/images/home/a8.jpg" },
  { name: "StartupHub", logo: "public/images/home/a9.webp" },
  { name: "GrowthPartners", logo: "public/images/home/a10.webp" },
  { name: "TechCorp", logo: "public/images/home/a11.webp" },
  { name: "InnovateLabs", logo: "public/images/home/a12.jpg"},
  { name: "FutureVentures", logo: "public/images/home/a13.jpg" },
  { name: "StartupHub", logo: "public/images/home/a14.jpg" },
  { name: "GrowthPartners", logo: "public/images/home/a15.jpg" },
  { name: "TechCorp", logo: "public/images/home/a16.jpg" },
  { name: "InnovateLabs", logo: "public/images/home/a17.jpg "},
  { name: "FutureVentures", logo: "public/images/home/a18.jpg" },
  { name: "StartupHub", logo: "public/images/home/a19.jpg" },
  { name: "GrowthPartners", logo: "public/images/home/a20.jpg" },
  { name: "TechCorp", logo: "public/images/home/a21.jpg" },
  { name: "InnovateLabs", logo: "public/images/home/a22.jpg "},
  { name: "FutureVentures", logo: "public/images/home/a23.jpg" },
  { name: "StartupHub", logo: "public/images/home/a24.jpg" },
  { name: "GrowthPartners", logo: "public/images/home/a25.jpg" },
  { name: "TechCorp", logo: "public/images/home/a26.jpg" },
  { name: "InnovateLabs", logo: "public/images/home/a27.jpg "},
  { name: "FutureVentures", logo: "public/images/home/a28.jpg" },
  { name: "StartupHub", logo: "public/images/home/a29.jpg" },
  { name: "GrowthPartners", logo: "public/images/home/a30.jpg" },
  { name: "TechCorp", logo: "public/images/home/a31.jpg" },
  { name: "InnovateLabs", logo: "public/images/home/a32.jpg "},
  { name: "FutureVentures", logo: "public/images/home/a33.jpg" },
  { name: "StartupHub", logo: "public/images/home/a34.jpg" },
  { name: "GrowthPartners", logo: "public/images/home/a35.jpg" },
  { name: "TechCorp", logo: "public/images/home/a36.jpg" },
  { name: "InnovateLabs", logo: "public/images/home/a37.jpg "},
  { name: "FutureVentures", logo: "public/images/home/a38.jpg" },
  { name: "StartupHub", logo: "public/images/home/a39.jpg" },
  { name: "GrowthPartners", logo: "public/images/home/a40.jpg" },

  
];

export const SponsorsMarquee = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center">
          <span className="gradient-text">Our Sponsors</span>
        </h2>
      </div>

      <div className="marquee">
        <div className="marquee-content">
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="flex-shrink-0 w-40 h-20 glass-card flex items-center justify-center px-6"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="marquee-content" aria-hidden="true">
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={`${sponsor.name}-dup-${index}`}
              className="flex-shrink-0 w-40 h-20 glass-card flex items-center justify-center px-6"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

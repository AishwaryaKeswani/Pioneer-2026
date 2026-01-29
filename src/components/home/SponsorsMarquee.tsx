const sponsors = [
  { name: "TechCorp", logo: "/placeholder.svg" },
  { name: "InnovateLabs", logo: "/placeholder.svg" },
  { name: "FutureVentures", logo: "/placeholder.svg" },
  { name: "StartupHub", logo: "/placeholder.svg" },
  { name: "GrowthPartners", logo: "/placeholder.svg" },
  { name: "VentureOne", logo: "/placeholder.svg" },
  { name: "ScaleUp", logo: "/placeholder.svg" },
  { name: "InvestNow", logo: "/placeholder.svg" },
];

export const SponsorsMarquee = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center">
          <span className="gradient-text">Past Patronages</span>
        </h2>
      </div>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-content">
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="flex-shrink-0 w-40 h-20 glass-card flex items-center justify-center px-6 grayscale hover:grayscale-0 transition-all duration-300"
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
              className="flex-shrink-0 w-40 h-20 glass-card flex items-center justify-center px-6 grayscale hover:grayscale-0 transition-all duration-300"
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

import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const sponsorTiers = [
  {
    tier: "Title Sponsor",
    sponsors: [{ name: "TechGiant Corp", logo: "/placeholder.svg" }],
    size: "large",
  },
  {
    tier: "Platinum",
    sponsors: [
      { name: "InnovateLabs", logo: "/placeholder.svg" },
      { name: "FutureVentures", logo: "/placeholder.svg" },
    ],
    size: "medium",
  },
  {
    tier: "Gold",
    sponsors: [
      { name: "StartupHub", logo: "/placeholder.svg" },
      { name: "GrowthPartners", logo: "/placeholder.svg" },
      { name: "VentureOne", logo: "/placeholder.svg" },
    ],
    size: "medium",
  },
  {
    tier: "Silver",
    sponsors: [
      { name: "ScaleUp", logo: "/placeholder.svg" },
      { name: "InvestNow", logo: "/placeholder.svg" },
      { name: "TechStart", logo: "/placeholder.svg" },
      { name: "DigitalFirst", logo: "/placeholder.svg" },
    ],
    size: "small",
  },
  {
    tier: "Bronze",
    sponsors: [
      { name: "LocalTech", logo: "/placeholder.svg" },
      { name: "CityStartups", logo: "/placeholder.svg" },
      { name: "NewAge", logo: "/placeholder.svg" },
      { name: "CloudNine", logo: "/placeholder.svg" },
      { name: "DataDriven", logo: "/placeholder.svg" },
    ],
    size: "small",
  },
];

const sponsorshipPackages = [
  {
    tier: "Title",
    price: "₹10,00,000",
    benefits: [
      "Exclusive title branding",
      "Main stage naming rights",
      "5 VIP passes",
      "Premium booth location",
      "Speaking slot at main event",
      "Full page ad in event materials",
      "Social media spotlight",
      "Logo on all materials",
    ],
    featured: true,
  },
  {
    tier: "Platinum",
    price: "₹5,00,000",
    benefits: [
      "Co-branding opportunities",
      "3 VIP passes",
      "Large booth space",
      "Panel discussion seat",
      "Half page ad",
      "Social media mentions",
      "Logo on website",
    ],
    featured: false,
  },
  {
    tier: "Gold",
    price: "₹2,50,000",
    benefits: [
      "2 VIP passes",
      "Medium booth space",
      "Quarter page ad",
      "Social media mentions",
      "Logo on website",
    ],
    featured: false,
  },
  {
    tier: "Silver",
    price: "₹1,00,000",
    benefits: [
      "2 General passes",
      "Small booth space",
      "Logo on website",
      "Event mentions",
    ],
    featured: false,
  },
];

const Sponsors = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 animated-gradient-bg relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Our Sponsors</span>
          </h1>
          <p className="font-montserrat text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Partnering with industry leaders to create extraordinary experiences
          </p>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Current Sponsors</span>
          </h2>

          {sponsorTiers.map((tier, tierIndex) => (
            <div key={tier.tier} className="mb-16 last:mb-0">
              <h3 className="font-montserrat text-xl font-semibold text-center text-muted-foreground mb-8">
                {tier.tier}
              </h3>
              <div
                className={`flex flex-wrap justify-center gap-6 ${
                  tier.size === "large" ? "max-w-md" : tier.size === "medium" ? "max-w-2xl" : "max-w-4xl"
                } mx-auto`}
              >
                {tier.sponsors.map((sponsor, index) => (
                  <div
                    key={sponsor.name}
                    className={`glass-card flex items-center justify-center p-6 hover-lift animate-fade-in ${
                      tier.size === "large"
                        ? "w-64 h-32"
                        : tier.size === "medium"
                        ? "w-48 h-24"
                        : "w-36 h-20"
                    }`}
                    style={{ animationDelay: `${(tierIndex * 0.2) + (index * 0.1)}s` }}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Become a Sponsor */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Become a Sponsor</span>
            </h2>
            <p className="font-montserrat text-muted-foreground text-lg max-w-2xl mx-auto">
              Join our growing family of sponsors and connect with the next
              generation of entrepreneurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipPackages.map((pkg, index) => (
              <div
                key={pkg.tier}
                className={`glass-card p-6 hover-lift animate-fade-in ${
                  pkg.featured ? "ring-2 ring-primary relative" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.featured && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-montserrat font-bold text-xl text-foreground mb-2">
                    {pkg.tier}
                  </h3>
                  <p className="font-playfair text-3xl font-bold gradient-text">
                    {pkg.price}
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="glow-button font-montserrat text-sm w-full text-center block"
                >
                  Contact Us
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Sponsors */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Past Sponsors</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-32 h-16 glass-card flex items-center justify-center grayscale hover:grayscale-0 transition-all animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <img
                  src="/placeholder.svg"
                  alt={`Past Sponsor ${i + 1}`}
                  className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sponsors;

import { useEffect, useRef, useState } from "react";

const speakers = [
  {
    name: "Sanjay Mehta",
    role: "Angel Investor",
    organization: "100X.VC",
    image: "/placeholder.svg",
  },
  {
    name: "Priya Sharma",
    role: "Founder & CEO",
    organization: "TechVentures",
    image: "/placeholder.svg",
  },
  {
    name: "Rahul Kapoor",
    role: "Managing Partner",
    organization: "StartupFund India",
    image: "/placeholder.svg",
  },
  {
    name: "Ananya Desai",
    role: "Venture Partner",
    organization: "Blume Ventures",
    image: "/placeholder.svg",
  },
  {
    name: "Vikram Singh",
    role: "Serial Entrepreneur",
    organization: "Ex-Flipkart",
    image: "/placeholder.svg",
  },
  {
    name: "Meera Patel",
    role: "Investment Director",
    organization: "Sequoia Capital",
    image: "/placeholder.svg",
  },
];

export const SpeakersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Past Speakers</span>
          </h2>
          <p className="font-montserrat text-muted-foreground text-lg">
            Learn from industry leaders and visionaries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={speaker.name}
              className={`glass-card p-6 hover-lift text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              {/* Profile Image */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-[2px]">
                  <div className="w-full h-full rounded-full bg-card overflow-hidden">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-montserrat font-semibold text-lg text-foreground mb-1">
                {speaker.name}
              </h3>
              <p className="text-primary text-sm mb-1">{speaker.role}</p>
              <p className="text-muted-foreground text-sm">
                {speaker.organization}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

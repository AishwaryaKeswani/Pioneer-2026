import { useEffect, useRef, useState } from "react";

const zones = [
  { name: "Agriculture", color: "from-green-500 to-emerald-400" },
  { name: "Green-zone", color: "from-teal-500 to-cyan-400" },
  { name: "Student", color: "from-blue-500 to-indigo-400" },
  { name: "Defence", color: "from-orange-500 to-red-400" },
];

export const CompetitionZones = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Competition</span>
              <br />
              <span className="text-foreground">Zones</span>
            </h2>
            <p className="font-roboto text-muted-foreground text-lg leading-relaxed mb-6">
              Explore diverse sectors and showcase your innovative solutions in
              our specialized competition tracks. Each zone offers unique
              opportunities to tackle real-world challenges and win exciting
              prizes.
            </p>
            <a
              href="/events"
              className="font-montserrat text-primary hover:text-secondary transition-colors inline-flex items-center gap-2"
            >
              View All Events →
            </a>
          </div>

          {/* Right - Zone Names */}
          <div className="space-y-4">
            {zones.map((zone, index) => (
              <div
                key={zone.name}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{
                  transitionDelay: `${index * 0.15}s`,
                }}
              >
                <h3
                  className={`font-playfair text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${zone.color} bg-clip-text text-transparent hover:scale-105 transition-transform cursor-default`}
                >
                  {zone.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

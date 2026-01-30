import { Trophy } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export const PrizePoolSection = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const target = 500000;
      const duration = 1500;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse-glow ${2 + Math.random() * 2}s infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Trophy Icon */}
        <div
          className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-card mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
          style={{
            boxShadow: "0 0 60px -10px hsl(var(--gold) / 0.5)",
          }}
        >
          <Trophy className="h-12 w-12 text-gold" />
        </div>

        {/* Prize Pool Text */}
        <h2 className="font-montserrat text-lg md:text-xl text-muted-foreground uppercase tracking-widest mb-4">
          Prize Pool Worth
        </h2>

        <div
          className={`font-playfair text-6xl md:text-8xl lg:text-9xl font-bold transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="gradient-text-gold">₹{count.toLocaleString()}</span>
        </div>

        <p className="font-montserrat text-xl md:text-2xl text-muted-foreground mt-6">
          Win Big. Build Bigger.
        </p>
      </div>
    </section>
  );
};

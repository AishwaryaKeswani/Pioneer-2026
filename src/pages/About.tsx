import { Layout } from "@/components/layout/Layout";
import { useEffect, useRef, useState } from "react";
import {
  Users,
  Trophy,
  Lightbulb,
  TrendingUp,
  BookOpen,
  Building,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const offerings = [
  {
    icon: Users,
    title: "Networking",
    description:
      "Connect with entrepreneurs, investors, and industry experts from across the country.",
  },
  {
    icon: BookOpen,
    title: "Mentorship",
    description:
      "Get guidance from successful founders and seasoned business professionals.",
  },
  {
    icon: Trophy,
    title: "Pitch Competitions",
    description:
      "Showcase your ideas and compete for prizes worth ₹3,50,000.",
  },
  {
    icon: TrendingUp,
    title: "Investment Connections",
    description:
      "Meet angel investors and VCs looking for their next big investment.",
  },
  {
    icon: Lightbulb,
    title: "Knowledge Sessions",
    description:
      "Learn from expert-led workshops and panel discussions on trending topics.",
  },
  {
    icon: Building,
    title: "Exhibition Space",
    description:
      "Showcase your startup to thousands of visitors in our exhibition hall.",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Attendees" },
  { value: 350000, prefix: "₹", label: "Prize Pool" },
  { value: 50, suffix: "+", label: "Startups" },
  { value: 20, suffix: "+", label: "Investors" },
  { value: 15, suffix: "+", label: "Sponsors" },
  { value: 2, suffix: "", label: "Days of Innovation" },
];

const About = () => {
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isStatsVisible) {
          setIsStatsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isStatsVisible]);

  useEffect(() => {
    if (isStatsVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            setCounters((prev) => {
              const newCounters = [...prev];
              newCounters[index] = stat.value;
              return newCounters;
            });
            clearInterval(timer);
          } else {
            setCounters((prev) => {
              const newCounters = [...prev];
              newCounters[index] = Math.floor(current);
              return newCounters;
            });
          }
        }, duration / steps);
      });
    }
  }, [isStatsVisible]);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 animated-gradient-bg relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">About Us</span>
          </h1>
          <p className="font-montserrat text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Where Innovation Meets Opportunity
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="gradient-text">Our Story</span>
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Pune Startup Fest is the flagship entrepreneurship event organized
                by E-CELL, bringing together the brightest minds in the startup
                ecosystem. What started as a small gathering of aspiring
                entrepreneurs has grown into one of Maharashtra's largest startup
                festivals.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our mission is to foster innovation, provide a platform for
                budding entrepreneurs to showcase their ideas, and create
                meaningful connections between startups, investors, and industry
                leaders.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With each edition, we aim to push boundaries, introduce new
                competitions, and provide unparalleled opportunities for learning
                and growth in the startup space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="gradient-text">What We Offer</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div
                key={offering.title}
                className="glass-card p-8 text-center hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                  <offering.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-foreground mb-3">
                  {offering.title}
                </h3>
                <p className="text-muted-foreground">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section ref={statsRef} className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="gradient-text">By The Numbers</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 ${
                  isStatsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="font-playfair text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.prefix}
                  {counters[index].toLocaleString()}
                  {stat.suffix}
                </div>
                <p className="font-montserrat text-muted-foreground text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-CELL Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">
              <span className="gradient-text">About E-CELL</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              E-CELL is the entrepreneurship cell dedicated to nurturing the
              startup culture and fostering innovation among students. Through
              workshops, mentorship programs, and events like Pune Startup Fest,
              we aim to create a thriving ecosystem for aspiring entrepreneurs.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Venue */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Venue</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            {/* Map Placeholder */}
            <div className="aspect-video bg-muted rounded-xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <p className="font-montserrat">Google Maps Embed</p>
              </div>
            </div>

            {/* Address */}
            <div>
              <h3 className="font-montserrat font-bold text-xl text-foreground mb-4">
                Event Location
              </h3>
              <p className="text-muted-foreground mb-6">
                Convention Center
                <br />
                Hinjewadi, Pune
                <br />
                Maharashtra, India - 411057
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button font-montserrat text-sm inline-block"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

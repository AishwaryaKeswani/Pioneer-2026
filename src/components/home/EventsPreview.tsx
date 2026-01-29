import { useEffect, useRef, useState } from "react";
import { Calendar, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const events = [
  {
    title: "BullRun",
    category: "Investment",
    date: "Jan 17, 2026",
    teamSize: "2-4 members",
    description:
      "Test your stock market prowess in this exciting trading simulation.",
  },
  {
    title: "CEO Challenge",
    category: "Leadership",
    date: "Jan 17, 2026",
    teamSize: "Individual",
    description:
      "Step into the shoes of a CEO and make critical business decisions.",
  },
  {
    title: "BrandScan",
    category: "Marketing",
    date: "Jan 18, 2026",
    teamSize: "2-3 members",
    description:
      "Analyze and present brand strategies to win the marketing showdown.",
  },
];

export const EventsPreview = () => {
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
    <section ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Featured Events</span>
          </h2>
          <p className="font-montserrat text-muted-foreground text-lg">
            Compete, learn, and win amazing prizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={event.title}
              className={`glass-card overflow-hidden hover-lift gradient-border transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 0.15}s`,
              }}
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="font-playfair text-3xl font-bold gradient-text">
                  {event.title}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">
                  {event.category}
                </Badge>
                <h3 className="font-montserrat font-semibold text-xl text-foreground mb-2">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-primary" />
                    {event.teamSize}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/events"
            className="glow-button font-montserrat inline-block"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

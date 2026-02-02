import { Layout } from "@/components/layout/Layout";
import { useEffect, useRef, useState, useCallback } from "react";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const offerings = [
 
  {
    icon: BookOpen,
    title: "Learning",
    description:
      "Opportunities to learn, innovate, and grow",
  },
  {
    icon: Trophy,
    title: "Creativity",
    description:
      "A platform to showcase talent and innovation",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "Commitment to growth and success",
  }
];

const stats = [
  { value: 500, suffix: "+", label: "Attendees" },
  { value: 500000, prefix: "₹", label: "Prize Pool" },
  { value: 50, suffix: "+", label: "Startups" },
  { value: 30, suffix: "+", label: "Investors" },
  { value: 30, suffix: "+", label: "Sponsors" },
  { value: 2, suffix: "", label: "Days of Innovation" },
];

// Expanded list to showcase enjoyment & behind-the-scenes
const galleryImages = [
  "/images/home/a13.jpg",
  "/images/home/a14.jpg",
  "/images/home/a22.jpg",
  "/images/home/a23.jpg",
  "/images/home/a26.jpg",
  "/images/home/a28.jpg",
  "/images/home/a30.jpg",
  "/images/home/a32.jpg",
  "/images/home/a34.jpg",
  "/images/home/a35.jpg",
];

const About = () => {
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const statsRef = useRef<HTMLElement>(null);

  // Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide logic
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
      }, 4000); // 4 seconds per slide
    }
  }, [isPaused]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    startTimer(); // Reset timer on manual interaction
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    startTimer(); // Reset timer on manual interaction
  };

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
            Fueling Entrepreneurship through Innovation
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
               <div className="flex justify-center gap-4">
                 <div className="max-w-4xl mx-auto text-center">
                  <p>
               Established in 1983 by a cadre of visionary industrialists, seasoned professionals, and esteemed educationalists, the Kolhapur Institute of Technology’s College of Engineering Kolhapur(Empowered Autonomous) stands as a premier institution in the realm of Engineering and Management education. Pioneering as the first self-financed engineering college in Maharashtra, the institute boasts a distinguished identity shaped by the extensive exposure and wisdom of its founders. Elevating its stature, the institute has been honoured with an "A+ Grade Status with CGPA 3.33" by The National Assessment and Accreditation Council (NAAC), Bengaluru. Furthermore, it has attained accreditation for six departments—Civil Engineering, Computer Science & Engineering, Environmental Engineering, Electronics Engineering, Mechanical Engineering, and Bio Technology Engineering from the prestigious National Board of Accreditation (NBA), New Delhi, a governmental body renowned for accrediting programs in institutes.

Notably, the institute has secured Permanent Affiliation from Shivaji University Kolhapur and proudly holds Autonomous status. Undeniably committed to excellence, the institution has shepherded more than 15,000 engineers to success, seamlessly bridging the gap between academia and industry through campus placements and fostering a legion of entrepreneurs. In Western Maharashtra, it stands tall as a beacon of prominence and success in the realm of Engineering Education, diligently delivering optimal results for its students and stakeholders.</p>

              
            </div>
            </div>
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

      {/* pioneer Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">
              <span className="gradient-text">About Pioneer 2026</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
Since its inception in 1998, Pioneer has been a prestigious national-level technical event that serves as a platform for innovation, creativity, and intellectual discourse. Organized by our college, Pioneer brings together bright minds from across the country to showcase their skills and knowledge.

Pioneer features two flagship events: Prakalp, a project presentation where participants exhibit their groundbreaking technical projects, and Abhivyakti, a paper presentation that allows students to present their research, ideas, and solutions to contemporary challenges in the world of technology.

Over the years, Pioneer has grown into a renowned event, fostering collaboration, learning, and competition among future engineers and technologists. With a rich legacy of over two decades, Pioneer continues to inspire, challenge, and recognize excellence in technical fields, making it one of the most awaited events in the academic calendar. This year also marks the excitement of Battle Blitz, a competitive online gaming event.
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

      
      {/* Glimpses of Pioneer (Optimized Auto-Slider) */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Glimpses of Pioneer</span>
            </h2>
            <p className="font-montserrat text-muted-foreground text-lg">
              Reliving the moments of innovation, joy, and behind-the-scenes magic.
            </p>
          </div>

          <div 
            className="relative max-w-5xl mx-auto group"
            onMouseEnter={() => setIsPaused(true)} 
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Main Slider Container */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden glass-card border-white/10 shadow-2xl">
              {/* Slides */}
              <div 
                className="absolute inset-0 flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {galleryImages.map((src, index) => (
                  <div key={index} className="relative min-w-full h-full">
                    <img 
                      src={src} 
                      alt={`Pioneer Memory ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay Gradient for text readability if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40"></div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-primary hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 z-20"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-primary hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 z-20"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      startTimer();
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? "w-8 bg-primary" 
                        : "bg-white/50 hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



    </Layout>
  );
};

export default About;

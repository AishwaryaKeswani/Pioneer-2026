import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { PrizePoolSection } from "@/components/home/PrizePoolSection";
import { SponsorsMarquee } from "@/components/home/SponsorsMarquee";
import { CountdownTimer } from "@/components/home/CountdownTimer";
import { PosterSection } from "@/components/home/PosterSection";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Expanded list to showcase enjoyment & behind-the-scenes
const galleryImages = [
  "/images/BTS/img15.jpeg",
  "/images/BTS/img16.jpeg",
  "/images/BTS/img17.jpeg",
  "/images/BTS/img18.jpeg",
  "/images/BTS/img19.jpeg",
  "/images/BTS/img20.jpeg",
  "/images/BTS/img1.jpeg",
  "/images/BTS/img2.jpeg",
  "/images/BTS/img3.jpeg",
  "/images/BTS/img4.jpeg",
  "/images/BTS/img5.jpeg",
  "/images/BTS/img6.jpeg",
  "/images/BTS/img7.jpeg",
  "/images/BTS/img11.jpeg",
  "/images/BTS/img12.jpeg",
  "/images/BTS/img13.jpeg",
  
];

// Slider state and logic moved inside the Index component (kept here for reference)

const Index = () => {
  // Slider State (moved inside component)
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-slide logic
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current as any);
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
      }, 4000); // 4 seconds per slide
    }
  }, [isPaused, galleryImages.length]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current as any);
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

  return (
    <Layout>
      {/* 1. Hero (Heading, Date, Button, Banner Text) */}
      <HeroSection />
      
      {/* 2. Timer (Days remaining) */}
      <CountdownTimer />
      
      {/* 3. Prize Pool */}
      <PrizePoolSection />
      
      {/* 4, 5 & 6. Welcome Text, Join Us, & Poster */}
      <PosterSection />

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
      
      {/* 7. Sponsors */} 
      <SponsorsMarquee />
    </Layout>
  );
};
export default Index;
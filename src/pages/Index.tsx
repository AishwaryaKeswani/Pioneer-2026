import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { PrizePoolSection } from "@/components/home/PrizePoolSection";
import { SponsorsMarquee } from "@/components/home/SponsorsMarquee";
import { CountdownTimer } from "@/components/home/CountdownTimer";
import { PosterSection } from "@/components/home/PosterSection";

const Index = () => {
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
      
      {/* 7. Sponsors */}
      <SponsorsMarquee />
    </Layout>
  );
};

export default Index;
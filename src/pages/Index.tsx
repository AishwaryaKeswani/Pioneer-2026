import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { PrizePoolSection } from "@/components/home/PrizePoolSection";
import { SpeakersSection } from "@/components/home/SpeakersSection";
import { SponsorsMarquee } from "@/components/home/SponsorsMarquee";
import { CompetitionZones } from "@/components/home/CompetitionZones";
import { EventsPreview } from "@/components/home/EventsPreview";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PrizePoolSection />
      <SpeakersSection />
      <SponsorsMarquee />
      <CompetitionZones />
      <EventsPreview />
    </Layout>
  );
};

export default Index;

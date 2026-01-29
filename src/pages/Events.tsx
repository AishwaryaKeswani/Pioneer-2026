import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Calendar, Users, MapPin, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const allEvents = [
  {
    id: 1,
    title: "BullRun",
    category: "Investment",
    date: "Jan 17, 2026",
    location: "Main Hall",
    teamSize: "2-4 members",
    description:
      "Test your stock market prowess in this exciting trading simulation. Make strategic investments and outperform your competitors.",
    filter: "All Events",
  },
  {
    id: 2,
    title: "CEO Challenge",
    category: "Leadership",
    date: "Jan 17, 2026",
    location: "Conference Room A",
    teamSize: "Individual",
    description:
      "Step into the shoes of a CEO and make critical business decisions that will determine the fate of your company.",
    filter: "All Events",
  },
  {
    id: 3,
    title: "BrandScan",
    category: "Marketing",
    date: "Jan 18, 2026",
    location: "Marketing Arena",
    teamSize: "2-3 members",
    description:
      "Analyze and present brand strategies to win the marketing showdown. Showcase your creative and analytical skills.",
    filter: "All Events",
  },
  {
    id: 4,
    title: "Pitch Competition",
    category: "Startup",
    date: "Jan 18, 2026",
    location: "Main Stage",
    teamSize: "2-5 members",
    description:
      "Present your startup idea to a panel of investors and win funding opportunities for your venture.",
    filter: "All Events",
  },
  {
    id: 5,
    title: "Startup Exhibition",
    category: "Networking",
    date: "Jan 17-18, 2026",
    location: "Exhibition Hall",
    teamSize: "Per Startup",
    description:
      "Showcase your startup to thousands of visitors, investors, and potential partners.",
    filter: "All Events",
  },
  {
    id: 6,
    title: "AI Innovation Summit",
    category: "AI Expo",
    date: "Jan 17, 2026",
    location: "Tech Arena",
    teamSize: "Open to all",
    description:
      "Explore the latest in artificial intelligence and machine learning with demos and talks.",
    filter: "AI Expo 2026",
  },
  {
    id: 7,
    title: "AI Startup Showcase",
    category: "AI Expo",
    date: "Jan 18, 2026",
    location: "Innovation Hub",
    teamSize: "Per Startup",
    description:
      "Present your AI-powered solutions to industry experts and potential investors.",
    filter: "AI Expo 2026",
  },
  {
    id: 8,
    title: "Panel Discussions",
    category: "Knowledge",
    date: "Jan 17-18, 2026",
    location: "Various Rooms",
    teamSize: "Open to all",
    description:
      "Join thought-provoking discussions with industry leaders on the future of startups.",
    filter: "All Events",
  },
  {
    id: 9,
    title: "Networking Sessions",
    category: "Networking",
    date: "Jan 17-18, 2026",
    location: "Networking Lounge",
    teamSize: "Open to all",
    description:
      "Connect with fellow entrepreneurs, investors, and mentors in structured networking sessions.",
    filter: "All Events",
  },
];

const filters = ["All Events", "AI Expo 2026"];

const Events = () => {
  const [activeFilter, setActiveFilter] = useState("All Events");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = allEvents.filter((event) => {
    const matchesFilter =
      activeFilter === "All Events" || event.filter === activeFilter;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 animated-gradient-bg relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Discover Events</span>
          </h1>
          <p className="font-montserrat text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Explore our lineup of competitions, workshops, and networking opportunities
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 border-b border-border bg-card sticky top-16 md:top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background border-border"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter)}
                  className="font-montserrat"
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className="glass-card overflow-hidden hover-lift gradient-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="font-playfair text-2xl font-bold gradient-text">
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
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  {/* Meta */}
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      {event.teamSize}
                    </div>
                  </div>

                  <a
                    href="#register"
                    className="glow-button font-montserrat text-sm w-full text-center block"
                  >
                    Register
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No events found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Events;

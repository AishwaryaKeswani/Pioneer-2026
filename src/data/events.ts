import { Calendar, Code, Cpu, Database, Globe, Lightbulb, Bot, Trophy } from "lucide-react";

export interface Event {
  id: string;
  title: string;
  tagline: string;
  category: string;
  // New property to distinguish event types
  type: 'central' | 'departmental';
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: any;
  date: string;
}

// Placeholder content for descriptions
const placeholderFullDescription = `
  Get ready to immerse yourself in the ultimate technical challenge. 
  This event is designed to test your skills, push your limits, and ignite your passion for innovation. 
  Whether you're a seasoned pro or a curious beginner, join us for an unforgettable experience filled with learning, networking, and fierce competition. 
  Discover new possibilities, collaborate with like-minded individuals, and showcase your talent on a grand stage. 
  Don't miss this opportunity to be part of something extraordinary!
`;

export const events: Event[] = [
  // CENTRAL EVENTS (The 3 specified)
  {
    id: "roboclash-arena",
    title: "RoboClash Arena",
    tagline: "BUILD. BATTLE. TRIUMPH.",
    category: "Robotics",
    type: 'central', // Marked as central
    shortDescription: "Design and build combat robots to fight for supremacy in the ultimate arena battle.",
    fullDescription: placeholderFullDescription,
    image: "/placeholder.svg", 
    icon: Bot,
    date: "Feb 21, 2026",
  },
  {
    id: "codewars-ultimate",
    title: "CodeWars Ultimate",
    tagline: "MAY THE BEST ALGORITHM WIN.",
    category: "Coding",
    type: 'central', // Marked as central
    shortDescription: "A high-intensity competitive programming contest to solve complex algorithmic challenges against the clock.",
    fullDescription: placeholderFullDescription,
    image: "/placeholder.svg",
    icon: Code,
    date: "Feb 21, 2026",
  },
  {
    id: "innovate-iot-hackathon",
    title: "Innovate IoT Hackathon",
    tagline: "CONNECTING THE FUTURE.",
    category: "IoT & Hardware",
    type: 'central', // Marked as central
    shortDescription: "Build smart, connected solutions integrating hardware sensors and software in a 24-hour hackathon.",
    fullDescription: placeholderFullDescription,
    image: "/placeholder.svg",
    icon: Cpu,
    date: "Feb 22, 2026",
  },
  // DEPARTMENTAL EVENTS
  {
    id: "data-science-showdown",
    title: "Data Science Showdown",
    tagline: "INSIGHTS FROM CHAOS.",
    category: "AI/ML & Data",
    type: 'departmental',
    shortDescription: "Analyze real-world datasets to build predictive models and uncover hidden insights.",
    fullDescription: placeholderFullDescription,
    image: "/placeholder.svg",
    icon: Database,
    date: "Feb 22, 2026",
  },
  {
    id: "web-wizards",
    title: "Web Wizards",
    tagline: "CRAFTING DIGITAL EXPERIENCES.",
    category: "Web Development",
    type: 'departmental',
    shortDescription: "Showcase your full-stack skills by building dynamic and responsive web applications.",
    fullDescription: placeholderFullDescription,
    image: "/placeholder.svg",
    icon: Globe,
    date: "Feb 21, 2026",
  },
  {
    id: "ideathon-spark",
    title: "Ideathon Spark",
    tagline: "IGNITE YOUR ENTREPRENEURIAL SPIRIT.",
    category: "Entrepreneurship",
    type: 'departmental',
    shortDescription: "Pitch your innovative startup ideas to industry experts and investors.",
    fullDescription: placeholderFullDescription,
    image: "/placeholder.svg",
    icon: Lightbulb,
    date: "Feb 22, 2026",
  },
];
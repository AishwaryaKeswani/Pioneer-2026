import { Calendar, Code, Cpu, Database, Globe, Lightbulb, Bot, Trophy } from "lucide-react";

export interface Event {
  id: string;
  title: string;
  tagline: string;
  category: string;
  type: 'central' | 'departmental';
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: any;
  date: string;
  // New Fields
  prizes: {
    first: string;
    second: string;
    third: string;
    total: string;
  };
  rules: string[];
  registrationDetails: {
    fee: string;
    teamSize: string;
  };
  coordinators: {
    name: string;
    phone: string;
  }[];
}

const placeholderFullDescription = `
  Get ready to immerse yourself in the ultimate technical challenge. 
  This event is designed to test your skills, push your limits, and ignite your passion for innovation. 
  Whether you're a seasoned pro or a curious beginner, join us for an unforgettable experience filled with learning, networking, and fierce competition. 
  Discover new possibilities, collaborate with like-minded individuals, and showcase your talent on a grand stage. 
  Don't miss this opportunity to be part of something extraordinary!
`;

// Common placeholder data for new fields
const commonEventData = {
  prizes: {
    first: "₹ 15,000",
    second: "₹ 10,000",
    third: "₹ 5,000",
    total: "₹ 30,000"
  },
  rules: [
    "Participants must carry a valid ID card.",
    "Teams must report 30 minutes before the event starts.",
    "Use of unfair means will lead to immediate disqualification.",
    "The judges' decision will be final and binding.",
    "All necessary equipment must be brought by the participants unless specified otherwise."
  ],
  registrationDetails: {
    fee: "₹ 200 per team",
    teamSize: "2 - 4 Members"
  },
  coordinators: [
    { name: "Rahul Sharma", phone: "+91 98765 43210" },
    { name: "Priya Patel", phone: "+91 98765 43211" }
  ]
};

export const events: Event[] = [
  // CENTRAL EVENTS
  {
    id: "roboclash-arena",
    title: "RoboClash Arena",
    tagline: "BUILD. BATTLE. TRIUMPH.",
    category: "Robotics",
    type: 'central',
    shortDescription: "Design and build combat robots to fight for supremacy in the ultimate arena battle.",
    fullDescription: placeholderFullDescription,
    image: "/placeholder.svg", 
    icon: Bot,
    date: "Feb 21, 2026",
    ...commonEventData
  },
  {
    id: "codewars-ultimate",
    title: "CodeWars Ultimate",
    tagline: "MAY THE BEST ALGORITHM WIN.",
    category: "Coding",
    type: 'central',
    shortDescription: "A high-intensity competitive programming contest to solve complex algorithmic challenges against the clock.",
    fullDescription: placeholderFullDescription,
    image: "/placeholder.svg",
    icon: Code,
    date: "Feb 21, 2026",
    ...commonEventData
  },
  {
    id: "innovate-iot-hackathon",
    title: "Innovate IoT Hackathon",
    tagline: "CONNECTING THE FUTURE.",
    category: "IoT & Hardware",
    type: 'central',
    shortDescription: "Build smart, connected solutions integrating hardware sensors and software in a 24-hour hackathon.",
    fullDescription: placeholderFullDescription,
    image: "/placeholder.svg",
    icon: Cpu,
    date: "Feb 22, 2026",
    ...commonEventData
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
    ...commonEventData
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
    ...commonEventData
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
    ...commonEventData
  },
];
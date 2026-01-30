import { Calendar, Code, Cpu, Database, Globe, Lightbulb, Bot, Trophy } from "lucide-react";

export interface Event {
  id: string;
  title: string;
  category: string;
  type: 'central' | 'departmental';
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: any;
  date: string;
  // New Fields
  registrationLink: string;
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
    id: "Prakalp",
    title: "Prakalp",
    category: "Project",
    type: 'central',
    shortDescription: `PRAKALP is a Project Innovation & Startup Idea Competition where 
students can present their innovative ideas, projects, or startup concepts. `,
    fullDescription: `PRAKALP is a Project Innovation & Startup Idea Competition where 
students can present their innovative ideas, projects, or startup concepts. 
Participants can showcase their ideas through a working model, prototype, 
software simulation, or poster and pitch them before experts. 
The event provides a platform for students to: 
• Present creative ideas 
• Get expert feedback 
• Compete within their domain 
• Win prizes 
• Receive incubation and startup support from KIT’s IRF `,
    image: "/placeholder.svg", 
    icon: Bot,
    date: "Feb 21, 2026",
    registrationLink: "https://docs.google.com/forms/d/e/roboclash-form-id/viewform",
     prizes: {
    first: "₹ 60,000",
    second: "₹ 45,000",
    third: "₹ 30,000",
    total: "₹ 1,35,000"
  },
  rules: [
    
    "Open for Diploma, UG & PG (MCA) Students Innovations/Startups",
    " Valid College/University ID Card is Mandatory ",
    " Team Size: Min. 2 to Max. 6 Members",
    `Idea/Innovation Pitching Mode: Working Model/Software 
Simulation/Experimental Setup/ Poster/Prototype `,
    `Abstract: Max. 300 Words (Including but Not Limited to ldea/ 
Feasibility/Business/Scope/ Scalability, etc.)  `,
    `Send Abstract to Email Mentioning Subject as: kitcoekprakalp@gmail.com 
(Format: Name_College_Domain_Title) `,
    "Abstract Submission Deadline: 18th February 2026 ",
    ` Registration Fee: ₹ 200 рer Participant (Accommodation and Food for 
Outstation Participants included) `,
    "Prizes will be Awarded separately For each Domain .",
    `Incubation Support at KIT's IRF for Winners & interested Innovators/ 
Startups.`
  ],
  registrationDetails: {
    fee: "₹ 200 per Participant",
    teamSize: "2 - 6 Members"
  },
  coordinators: [
    { name: "Prof. Arun Desai ", phone: "+91 9881755447" },
    { name: "Sameer Punaskar", phone: "+91 9970801689" },
    { name: "Tushar Gangadhare", phone: "+91 7058626818" },
    { name: "Sanskruti Kuchnure", phone: "+91 8767958037" }

  ]
  },

  {
    id: "Abhivyakti",
    title: "Abhivyakti",
    category: "Paper Presentation",
    type: 'central',
    shortDescription: `The Paper Presentation event provides a platform for students to Present original research ideas and technical papers.Receive constructive feedback from experts and faculty `,
    fullDescription: `THEMES  

CIRCUIT DOMAIN :

1. Cybersecurity: Ethics & Transparency for Safer Decision Making 
2. Integrating Blockchain with cloud computing for trust & security 
3. Edge Computing with IOT Smart Applications 
4. Future of Semiconductors manufacturing: INDIA's perspective 
5. Machine Learning in Electronics System Design Automation (EDA) 
6. Al: Trends, Technologies & decision making in life Sciences. 


NON-CIRCUIT DOMAIN:

1. Applications of GIS in Civil services 
2. Robotics Automation enabled smart materials 
3. Sustainable Power Systems using Renewable Energy & Smart Grids  
4. Industry 5.0/4.0 
5.Sustainable & Green Engg. solutions for Env. Management 
6. Recent trends related to other engineering domains.`,
    image: "/placeholder.svg", 
    icon: Bot,
    date: "Feb 21, 2026",
    registrationLink: "https://google.com",
    prizes: {
    first: "₹ 30,000",
    second: "₹ 20,000",
    third: "",
    total: "₹ 50,000"
  },
  rules: [
    
    "Paper must be in IEEE format ",
    "Interdisciplinary technical content mandatory",
    ` Submit paper to: kitcoekabhivyakti@gmail.com 
      Subject format: Name_College_Topic Name)`,
    `Submission Deadline: 18 Feb 2026 `,
    `Group Size :Min 1 participant - Max 4 participants `,
    "Reg. Fee: 200 per Participant (Non-Ref)",
    ` Publication: Selected papers, after peer review, will be published in an      
ISSN-registered Book Proceedings`,
    "Winner Benefit: Opportunity to present paper at an International Conference ",
    ` Prices will be awarded separately for each domain `
  ],
  registrationDetails: {
    fee: "₹ 200 per Participant",
    teamSize: "Max 4 Members"
  },
  coordinators: [
    { name: "Dr.Ganesh Kamble", phone: "+91 9822915789" },
    { name: "Akash Manwar", phone: "+91 9322842490" },
    { name: "Riya Pawaskar", phone: "+91 9529323628" }

  ]
  },
  {
    id: "Battle-Blitz",
    title: "Battle-Blitz",
    category: "Online Gaming Competition (Freefire)",
    type: 'central',
    shortDescription: `The Paper Presentation event provides a platform for students to Present original research ideas and technical papers.Receive constructive feedback from experts and faculty `,
    fullDescription: `There will be two Rounds of Battleblitz : 

1. Qualifying round (Online mode) on 15th  February 2026 
As per rules of qualification, Qualified teams are shortlisted for finale 

2.Final round will be offline mode at KITCoEK on 22nd February 2026`,
    image: "/placeholder.svg", 
    icon: Bot,
    date: "Feb 22, 2026",
    registrationLink: "https://docs.google.com/forms/d/e/roboclash-form-id/viewform",
    prizes: {
    first: "₹UPTO Rs.20,000",
    second: "",
    third: "",
    total: "₹ 20,000"
  },
  rules: [
    
    `1. Squad entry is compulsory (4 Members)`,
    "2. One or two Reserved members are allowed ",
    `3. Entry fees will be ₹800 `,
    `4. There will be two Rounds of Battleblitz : \n`,
    `\t i. Qualifying round (Online mode) on 15th  February 2026 
As per rules of qualification, Qualified teams are shortlisted for finale`,
    `\tii.Final round will be offline mode at KITCoEK on 22nd February 2026`
  ],
  registrationDetails: {
    fee: "₹  800 per Squad",
    teamSize: "4 Members"
  },
  coordinators: [
    { name: "Dr. Pradeep Khot", phone: "+91 8208269454" },
    { name: "Mr.Mahesh Patil", phone: "+91 9657501233" },
    { name: "Mr.Digvijay Rajput", phone: "+91 9763738262" }

  ]
  },
  // DEPARTMENTAL EVENTS
  {
    id: "data-science-showdown",
    title: "Data Science Showdown",
    category: "AI/ML & Data",
    type: 'departmental',
    shortDescription: "Analyze real-world datasets to build predictive models and uncover hidden insights.",
    fullDescription: placeholderFullDescription,
    image: "/placeholder.svg",
    icon: Database,
    date: "Feb 22, 2026",
    registrationLink: "https://docs.google.com/forms/d/e/roboclash-form-id/viewform",
    ...commonEventData
  },
  {
    id: "web-wizards",
    title: "Web Wizards",
    category: "Web Development",
    type: 'departmental',
    shortDescription: "Showcase your full-stack skills by building dynamic and responsive web applications.",
    fullDescription: placeholderFullDescription,
    image: "/placeholder.svg",
    icon: Globe,
    date: "Feb 21, 2026",
    registrationLink: "https://docs.google.com/forms/d/e/roboclash-form-id/viewform",
    ...commonEventData
  },
  {
    id: "ideathon-spark",
    title: "Ideathon Spark",
    category: "Entrepreneurship",
    type: 'departmental',
    shortDescription: "Pitch your innovative startup ideas to industry experts and investors.",
    fullDescription: placeholderFullDescription,
    image: "/placeholder.svg",
    icon: Lightbulb,
    date: "Feb 22, 2026",
    registrationLink: "https://docs.google.com/forms/d/e/roboclash-form-id/viewform",
    ...commonEventData
  },
];
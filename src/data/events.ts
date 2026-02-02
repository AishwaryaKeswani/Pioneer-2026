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
  problemStatementLink?: string;
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
    image: "/images/events/abhivyakti.jpeg", 
    icon: Bot,
    date: "Feb 21, 2026",
    registrationLink: "https://pages.razorpay.com/pl_S6r8iPhNuvOpxJ/view",
    problemStatementLink: "https://drive.google.com/file/d/123AiMPCFZjUCj6z_6KrWgdqBOPYWtDgY/view?usp=sharing",
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
    image: "images/events/abhivyakti.jpeg", 
    icon: Bot,
    date: "Feb 21, 2026",
    registrationLink: "https://pages.razorpay.com/pl_S6rAtaqsKcdRR3/view",
    problemStatementLink: "https://drive.google.com/file/d/1dHmXLyof8dTVJ6Raq2Cns4XVb1ZgLDr6/view?usp=sharing",
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
    shortDescription:`Battle-Blitz is a national-level Free Fire online gaming competition featuring squad-based Battle Royale matches, organized under PIONEER 2026 at KITCoEK. The event includes an online qualifying round followed by an offline LAN finale, offering prizes up to ₹20,000 and participation certificates for all players.`,
    fullDescription: `There will be two Rounds of Battleblitz : 

1. Qualifying round (Online mode) on 15th  February 2026 
As per rules of qualification, Qualified teams are shortlisted for finale 

2.Final round will be offline mode at KITCoEK on 22nd February 2026`,
    image: "/images/events/abhivyakti.jpeg", 
    icon: Bot,
    date: "Feb 15th /Feb 22nd , 2026",
    registrationLink: "https://pages.razorpay.com/pl_S6rF2neb7AMwA0/view",
    problemStatementLink: "https://drive.google.com/file/d/1AVSMW1ZuSqVLDVk9-pKl-zpnGLeBe8A5/view?usp=sharing",
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
    id: "Stranger Code : Escape the upside down",
    title: "Stranger Code : Escape the upside down",
    category: "Brainstorm",
    type: 'departmental',
    shortDescription: "Stranger Code: Escape the Upside Down is an offline coding competition organized by ACSES, CSE Department, featuring three rounds—Aptitude, Puzzle & Pseudocode, and Coding—to test problem-solving and programming skills. The event will be held on 21st February 2026 with 200+ participants, exciting prizes, and a total budget of ₹40,000.",
    fullDescription: `The event consists of three progressive rounds designed to evaluate participants’ aptitude, logical reasoning, and coding proficiency.
    
    Round 1: Aptitude
        1. Duration: 50 minutes
        2. Number of questions: 40
Round 2: Puzzle Round + Pseudocode
         1. Duration: 15 minutes
         2. Number of Questions: 25
         3. Question Split: 15 puzzles + 10 Pseudocodes
Round 3: Coding
         1. Duration: 60 minutes
         2. Number of Questions: 6

`,
    image: "/images/events/stranger-code.jpeg",
    icon: Database,
    date: "Feb 21, 2026",
    registrationLink: "https://pages.razorpay.com/pl_S6rIBZC7b5sFEz/view",
    
    prizes: {
    first: "₹ 5,000",
    second: "₹ 3,000",
    third: "₹ 2,000",
    total: "₹ 10,000"
  },
  rules: [
    "Allowed programming languages are C, Python, C++ and Java.",
    "Problems could be solved in any order.",
    "All solutions will be submitted electronically.",
    "The judges will test solutions and feedback will be sent accordingly.",
    "Any unauthorized behaviour will result in automatic disqualification. This includes but is not limited to using disallowed external resources, or attempting to hack the contest environment.",
    "Judges decisions will be final."
  ],
  registrationDetails: {
    fee: "₹ 100 ",
    teamSize: "Individual Participation."
  },
  coordinators: [
    { name: "Siddhi Shah", phone: "+91 9373555232" },
    { name: "Tanishk Jadhav", phone: "+91 8208736064" },
    { name: "Dhanashree Koli", phone: "+91 8766407070" }
  ]
  },
 {
    id: "Beyond Resume",
    title: "Beyond Resume",
    category: "HireReady",
    type: 'departmental',
  shortDescription: "Beyond Resume is a placement-simulation event designed to evaluate students beyond academics through aptitude, technical skills, communication, and interviews. It provides real-world recruitment experience and professional exposure.",
    fullDescription: `Beyond Resume is a multi-stage placement simulation event organized by the Association of CSE (AIML & DS) Students (ACADS) under PIONEER 2026.The event aims to prepare students for real recruitment processes by testing their aptitude, technical knowledge, communication skills, teamwork, and professional behavior.

The event will consist of four stages:

1. Aptitude test assessing reasoning and general engineering
aptitude.

2. Technical Round to evaluate the programming skills.

3. Group Discussion on assigned topics.

4. One-on-One Interviews to evaluate knowledge and
professionalism.

  Participants will be judged on their skills, communication, and
conduct throughout the event.
    `,
    image: "/images/events/beyond-resume.jpeg",
    icon: Database,
    date: "Feb 22, 2026",
    registrationLink: "https://pages.razorpay.com/pl_S6rKRnpWfB9iPC/view",
    
    prizes: {
    first: "₹ 5,000",
    second: "₹ 3,000",
    third: "₹ 2,000",
    total: "₹ 10,000"
  },
  rules: [
    "Top performers in each round will progress to the next round.",
    `The event will be conducted in English.`,
    "No substitutions are allowed.",
    "Decision of judges will be final.",
  ],
  registrationDetails: {
    fee: "₹ 100 ",
    teamSize: "Individual Participation."
  },
  coordinators: [
    { name: "Mrs. Sharvari Chavan", phone: "+91 7499785909" },
    { name: "Mr. Tanish Patgaonkar", phone: "+91 8329259944" }
  ]
  },
  {
    id: "Strange Minds",
    title: "Strange Minds",
    category: "Interdisciplinary Quiz & Presentation",
    type: 'departmental',
  shortDescription: "Strange Minds is a multi-round technical and creative competition that challenges students in biology knowledge, innovation, and spontaneous thinking. It promotes analytical ability, presentation skills, and scientific curiosity.",
    fullDescription: `Strange Minds: Unlock the Quest. Survive the Rounds. is an engaging departmental event organized by the Biotech Students Association under PIONEER 2026. The event is designed to test participants’ conceptual understanding of biology, creativity, and communication skills through a series of competitive and interactive rounds.

    The competition consists of three rounds. 
    
    Round 1: Beyond Biology, is a quiz containing 50 questions to be completed in 20 minutes. 
    
    Round 2: Strange Visions, involves poster presentation where participants present their ideas within 5 to 8 minutes. 
    
    Round 3: The Unknown Minute, is an extempore round where students speak on a given topic for 3 to 5 minutes.`,
    image: "/images/events/strange-minds.jpeg",
    icon: Database,
    date: "Feb 22, 2026",
    registrationLink: "https://pages.razorpay.com/pl_S6s8KfAEQXHFSQ/view",
    
    prizes: {
    first: "₹ 5,000",
    second: "₹ 3,000",
    third: "₹ 2,000",
    total: "₹ 10,000"
  },
  rules: [
    "Participants must carry a valid college ID",
    `Judges’ and organizing committee decisions will be final.`,
    "Any unfair means, plagiarism, or misconduct will result in immediate disqualification.",
    "Strict adherence to time limits is mandatory.",
  ],
  registrationDetails: {
    fee: "₹ 100 ",
    teamSize: "Individual Participation."
  },
  coordinators: [
    { name: "Mrs. Sharvari Chavan", phone: "+91 9518354600 " },
    { name: "Tanmay Ghadage", phone: "+91 8485072110" },
    { name: "Dhananjay Patil", phone: "+91 9096823551" }

  ]
  },
  {
    id: "IdeaForge",
    title: "IdeaForge",
    category: "Concepta",
    type: 'departmental',
  shortDescription: "IdeaForge is an idea presentation competition where students pitch innovative startup or product concepts addressing real-world problems. It encourages creativity, technical thinking, and entrepreneurial mindset.",
    fullDescription: `IdeaForge is a departmental-level innovation competition organized by the Association of Electronics and Telecommunication Students (ASSETS) as part of PIONEER 2026. The event provides a platform for students to present original startup or product ideas that offer practical solutions to real-world challenges using hardware, software, or integrated systems.

Participants can take part individually or in teams of up to four members. Each team must follow the official presentation structure and adhere strictly to the allotted time limits. The use of clear and concise visuals is encouraged, while heavy text is discouraged. Any pre-existing work must be properly disclosed.`,
    image: "/images/events/idea-forged.jpeg",
    icon: Database,
    date: "Feb 21, 2026",
    registrationLink: "https://pages.razorpay.com/pl_S6rP9UhaMWtZin/view",
    
    prizes: {
    first: "₹ 5,000",
    second: "₹ 3,000",
    third: "₹ 2,000",
    total: "₹ 10,000"
  },
  rules: [
    "Participation is open to individuals or teams",
    `Ideas must be original and not copied from existing startups`,
    "Hardware, software, or hybrid solutions are allowed",
    "Participants must follow the official presentation structure",
    "Presentation time limits must be strictly followed",
    "Use of clear visuals is allowed; heavy text is discouraged",
    "Pre-existing work must be clearly disclosed",
    "Plagiarism or misrepresentation will lead to immediate disqualification",
    "Judges’ decisions will be final and binding"
  ],
  registrationDetails: {
    fee: "₹ 100 ",
    teamSize: "Max 4 Members."
  },
  coordinators: [
    { name: "Shubhamkumar Ojha", phone: "+91 6202808701 " },
    { name: "Viraj More", phone: "+91 7276389192" }
  ]
  },

    {
    id: "Master Bidder",
    title: "Master Bidder",
    category: "Structural Design & Construction",
    type: 'departmental',
    shortDescription: "Master Bidder is a hands-on civil engineering challenge where teams earn resources, bid strategically, and construct structures under constraints. The event tests planning, design efficiency, teamwork, and structural strength.",
    fullDescription: `Master Bidder is an exciting and interactive civil engineering event organized by the Civil Engineering Student Association as part of PIONEER 2026. The event blends engineering knowledge with strategy and teamwork, offering participants a unique experience of resource management, design, and practical construction.
    
   The competition begins with interactive games through which teams earn virtual resources. These resources are then used in a live auction to bid for construction materials. Using only the materials acquired, teams must design and build an efficient structure within the given time limit and resource constraints.
    `,
    image: "images/events/Master Bidder.jpg",
    icon: Database,
    date: "Feb 21, 2026",
    registrationLink: "https://pages.razorpay.com/pl_S6s38kAHqsb64f/view",
    
    prizes: {
    first: "₹ 5,000",
    second: "₹ 3,000",
    third: "₹ 2,000",
    total: "₹ 10,000"
  },
  rules: [
    "Teams must consist of 3 - 4 students with valid college ID cards.",
    `Only materials obtained through the auction are allowed for construction.`,
    "Structures must be built within the given time limit using limited resources.",
    "Glue/adhesives may be applied only at joint connections; excess usage may lead to penalties.",
    "Teams must follow all safety instructions, including wearing protective gear during load testing.",
    "Any form of misconduct or rule violation will result in immediate disqualification.",
    "The judge’s and organizing committee’s decisions will be final and binding."  ],
  registrationDetails: {
    fee: "₹ 300 per Group ",
    teamSize: "3- 4 Members."
  },
  coordinators: [
    { name: "Prof. Omkar Suryawanshi", phone: "+91 9423133773 " },
    { name: "Mr. Sujal Konduskar", phone: "+91 9595630009" },
    { name: "Ms. Shreya Suryawanshi", phone: "+91 9834644800" }
  ]
  },

  
  {
    id: "Tech-Negotia",
    title: "Tech-Negotia",
    category: "Negotiation",
    type: 'departmental',
    shortDescription: "Tech-Negotia is a fast-paced business and innovation challenge where teams solve real-world problems and pitch solutions in an investor-style format. It blends creativity, strategy, and decision-making in a competitive environment.",
    fullDescription: `Tech-Negotia is a dynamic departmental event organized by CABSSA (Computer Science and Business Systems Student’s Association) under PIONEER 2026. The event is designed to test participants’ problem-solving abilities, business thinking, creativity, and pitching skills through multiple competitive rounds.

The competition begins with a Problem Selection round where teams choose a real-world problem shared one day in advance and submit a PPT or report. In the Investor Battle round, selected teams receive virtual credits and invest in ideas they like, simulating real startup funding. The top-invested teams move to the Final Surprise Round, where they receive an on-the-spot problem and must quickly develop and present a solution.

Teams are evaluated on innovation, feasibility, strategic thinking, presentation quality, and decision-making. Judges’ decisions are final.

Tech-Negotia provides students with exposure to business pitching, investment simulation, and teamwork, helping them develop entrepreneurial mindset, analytical thinking, and professional presentation skills.`,
    image: "/images/events/tech-negotia.jpeg",
    icon: Database,
    date: "Feb 21, 2026",
    registrationLink: "https://pages.razorpay.com/pl_S6rLrbGpmxkKPx/view",
    problemStatementLink: "#problem-statement",
    
    prizes: {
    first: "₹ 5,000",
    second: "₹ 3,000",
    third: "₹ 2,000",
    total: "₹ 10,000"
  },
  rules: [
    "Problems will be shared one day before the event, and teams must select one problem on a first-come, first-served basis (maximum 10 teams per problem).",
    `Teams must submit a PPT or report for their selected problem.`,
    "Selected teams will advance to the Investor Battle round and receive virtual credits.",
    "Teams will invest credits in ideas they like, and top-invested teams will qualify for the final round.",
    "Finalists will receive an on-the-spot problem and must quickly prepare and present their solution.",
    "Judges will decide the winners, and their decision will be final."
   ],
  registrationDetails: {
    fee: "₹ 200 per Group ",
    teamSize: "Max 2  Members."
  },
  coordinators: [
    { name: "Mrs. Yashaswini Kadiyal ", phone: "+91 8310817935  " },
    { name: "Parth Gote", phone: "+91 8485020909" },
    { name: "Avani Khot", phone: "+91 7620161268 " }
  ]
  },

    {
    id: "Rush To GREEN",
    title: "Rush To GREEN",
    category: "",
    type: 'departmental',
    shortDescription: "Rush To GREEN is a hands-on electrical engineering competition where teams search for components and build functional circuits under time pressure. It tests technical knowledge, speed, and teamwork.",
    fullDescription: `Rush To GREEN is an engaging departmental event organized by ELESA (Electrical Engineers Student Association) as part of PIONEER 2026. The event is designed to evaluate students’ aptitude, component identification skills, and practical circuit-building ability through a series of competitive rounds.

The competition consists of three rounds:
Round 1: participants take an online aptitude test to shortlist teams. 
Round 2: involves collecting electronic components hidden across the campus, testing speed, observation, and coordination.
Round 3: teams must design and build a working circuit using the collected components within the given time limit.`,
    image: "/images/events/rush-to-green.jpeg",
    icon: Database,
    date: "Feb 21, 2026",
    registrationLink: "https://pages.razorpay.com/pl_S6s0tEQTrR3Ob9/view",
    
    prizes: {
    first: "₹ 5,000",
    second: "₹ 3,000",
    third: "₹ 2,000",
    total: "₹ 10,000"
  },
  rules: [
    "Use of Smart Phones & electronic gadgets is strictly prohibited during the event.",
    `Time limit for each round will be given.`,
    "In round 3 the team that builds a working circuit at the earliest shall be the winner.",
    "Judges discussion and decision will be final."
   ],
  registrationDetails: {
    fee: "₹ 100 per Person ",
    teamSize: "2 - 4 ( participants per group)"
  },
  coordinators: [
    { name: "Aishwarya Dandekar", phone: "+91 7887878377  " },
    { name: "Tejaswini Sandeep Bhilawade ", phone: "+91 9209286361" },
    { name: "Amitkumar Vinodprasad Azad", phone: "+91 8329277648 " }
  ]
  },

   {
    id: "En-Vision 2k26",
    title: "En-Vision 2k26",
    category: "Environmental Innovation & Sustainability",
    type: 'departmental',
    shortDescription: "En-Vision 2k26 is an idea and model presentation competition focused on sustainable and environmental solutions. It encourages innovative thinking toward real-world environmental challenges.",
    fullDescription: `En-Vision 2k26 is a departmental event organized by EN4S under the Department of Civil and Environmental Engineering as part of PIONEER 2026. The event provides a platform for students to present innovative ideas or prototype models addressing critical environmental and sustainability issues.

Participants can present their work based on themes such as:
1.Best from Waste.
2.Sustainable Sanitation Approaches.
3.Waste Management.
4.Water Conservation and Management. 

Entries may be in the form of a PowerPoint presentation or a physical prototype model.`,
    image: "images/events/envision.jpeg",
    icon: Database,
    date: "Feb 22, 2026",
    registrationLink: "https://pages.razorpay.com/pl_S6sDi5warNhBUC/view",
    
    prizes: {
    first: "₹ 5,000",
    second: "₹ 3,000",
    third: "₹ 2,000",
    total: "₹ 10,000"
  },
  rules: [
    "It should be Power Point Presentation or a prototype model.",
    `A team should consist of maximum 3-4 members `,
    "Data Comprised of text Figures, tables, Charts, Audio-visuals etc is allowed.",
    "Citing the reference is mandatory.",
    "Presentation should be less than 7 minutes followed by Q$A ",
    "Participation Certificate will be given after successful completion Presentation.",
    "The decision of the judges and event head shall be treated as final binding to all. "
   ],
  registrationDetails: {
    fee: "₹ 100 per Person ",
    teamSize: "Max 3-4 Members"
  },
  coordinators: [
    { name: "Mr Prasad Jadhav ", phone: "+91 9689779499  " },
    { name: "Mr . Chiryu Suryavanshi ", phone: "+91 8830447616" }  ]
  },

  {
    id: "TechNexus",
    title: "TechNexus",
    category: "ThinkTech",
    type: 'departmental',
    shortDescription: "TechNexus is a multi-round technical event that combines knowledge testing, communication, and presentation skills. It provides students with a platform to showcase technical understanding and professional abilities.",
    fullDescription: `echNexus is a departmental technical event organized by the Mechanical Engineering Student Association (MESA) as part of PIONEER 2026. The event is designed to evaluate participants’ technical knowledge, analytical thinking, communication skills, and presentation abilities through a series of competitive rounds.

The competition consists of three rounds: 

1.Technical Quiz to assess core engineering concepts.
2.Debate round to test communication and critical thinking. 
3.Presentation round where participants present technical topics or ideas.`,
    image: "images/events/Tech Nexus.jpeg",
    icon: Database,
    date: "Feb 22, 2026",
    registrationLink: "https://pages.razorpay.com/pl_S6s6dEUQsypPOc/view",
    
    prizes: {
    first: "₹ 5,000",
    second: "₹ 3,000",
    third: "₹ 2,000",
    total: "₹ 10,000"
  },
  rules: [
    "1.Registration is compulsory and must be completed before the event deadline.",
    `2.Participants are required to present valid identification.`,
    "3.Participants must report to the venue at the designated time",
    "4.The use of digital devices during the event is strictly prohibited.",
    "5.The event will follow the format specified in the guidelines.",
    "6.All participants will receive a certificate of participation.",
    "7.The competition is open to Undergraduate and Diploma students from all departments"
   ],
  registrationDetails: {
    fee: "₹ 50 per Person ",
    teamSize: ""
  },
  coordinators: [
    { name: "Mrs. Ashwini Chougule", phone: "+91 8624813812  " },
    { name: "Mr. Mayank Gulavani", phone: "+91 9130038661" },
    {name: "Mr. Prasad Gharpnkar", phone:"+91 9511818140)"}
  ]
  }
];
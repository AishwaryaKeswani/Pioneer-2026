import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

// Defined Filter Type
type FilterType = 'all' | 'central' | 'pioneer';

const leadership = [
  {
    name: "Dr.Mohan B. Vanarotti",
    role: "Director,KITCoEK",
    image: "images/team/Director sir.png",
    linkedin: "https://www.linkedin.com/in/mohanvanarotti?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Dr.Dattatray Sathe",
    role: "Registrar,KITCoEK",
    image: "images/team/Dattatray Sathe.png",
    linkedin: "https://www.linkedin.com/in/dr-d-j-sathe-55b768a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Dr.Jitendra Bhat",
    role: "Dean, Student Activity KITCoEK",
    image: "images/team/Bhatt sir.png",
    linkedin: "https://www.linkedin.com/in/dr-jitendra-shankarrao-bhat-137013254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Prof. Ashwini Shinde",
    role: "Faculty advisor, ISTE Student Chapter",
    image: "images/team/ashwani shinde.png",
    linkedin: "https://www.linkedin.com/in/ashwini-shinde-06b472a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_ap",
  },
  {
    name: "Dr.Sandeep Desai ",
    role: "Convener,Pioneer 2026",
    image: "images/team/Sandeep Desai.png",
    linkedin: "https://www.linkedin.com/in/sandeep-desai-2a02981a3",
  },
  {
    name: "Aditya Patil ",
    role: "Chairperson",
    image: "images/team/Aditya-patil.png",
    linkedin: "https://www.linkedin.com/in/aditya-patil-62a422346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Sarthak Jadhav",
    role: "Secretary",
    image: "images/team/sarthak-jadhav.png",
    linkedin: "https://www.linkedin.com/in/sarthak-jadhav-5846a0352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

const departments = [
  {
    name: "Events Head",
    members: [
      { name: "Salikahamad Bagban", role: "Treasurer", image: "images/team/salikahamad -bagban.png", linkedin: "https://www.linkedin.com/in/salikahamad-bagwan-1758a5298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Akash Manwar", role: "Abhivyakti Head", image: "images/team/akash-manwar.png", linkedin: "https://www.linkedin.com/in/akash-manwar-80a3322b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Tushar Gangadhare", role: "Prakalp Head", image: "images/team/tushar -gangadhare.png", linkedin: "https://www.linkedin.com/in/tushar-gangadhare-a091172b0?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Digvijay Rajput", role: "Battle Blitz Head", image: "images/team/digvijay-rajput.png", linkedin: "www.linkedin.com/in/digvijay-" },
      { name: "Aishwarya Keswani", role: "Technical Head", image: "images/team/aishwarya -keswani.png", linkedin: "https://www.linkedin.com/in/aishwarya-keswani-6760412b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Aditya Patil", role: "Sponsorship Head", image: "images/team/Aditya-patil.png", linkedin: "https://www.linkedin.com/in/aditya-patil-62a422346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Arya Agarwal", role: "Registration and campaigning Head", image: "images/team/arya-agarwal.png", linkedin: "https://www.linkedin.com/in/aarya-agarwal27?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Shriyash Dhole", role: "Printing and Publicity Head", image: "images/team/shriyash-dhole.png", linkedin: "https://www.linkedin.com/in/shriyash-dhole-17177630a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Trupti Shendage", role: "Correspondence and Media Head", image: "images/team/trupti-shendge.png", linkedin: "https://www.linkedin.com/in/trupti-shendage-ab26883a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    ],
  },
  {
    name: "Events Co-Head",
    members: [
      { name: "Riya Pawaskar", role: "Abhivyakti Co-Head", image: "images/team/riya-pawaskar.png", linkedin: "#" },
      { name: "Sanskruti Kuchnure", role: "Prakalp Co-Head", image: "images/team/sanskruti -kuchnure.png", linkedin: "https://www.linkedin.com/in/sanskruti-kuchnure-0a25682b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Shrawani Choughule", role: "Technical Co-Head", image: "images/team/shrawani -choughule.png", linkedin: "https://www.linkedin.com/in/shrawani-choughule-3aa248354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Atharva patil", role: "Sponsorship Co-Head", image: "images/team/atharva-patil.png", linkedin: "https://www.linkedin.com/in/atharva-patil-4107b53a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Vaishnavi Zambre", role: "Registration Co-Head", image: "images/team/vaishvani -zambare.png", linkedin: "https://www.linkedin.com/in/vaishanvi-zambre-236059376" },
      { name: "Sarvesh Sawant", role: "Campaigning Co-Head", image: "images/team/sarvesh -sawant.png", linkedin: "https://www.linkedin.com/in/sarveshsawant45" },
      { name: "Sharayu Jagtap", role: "Correspondence Co-Head", image: "images/team/sharayu -jagtap.png", linkedin: "https://www.linkedin.com/in/sharayu-jagtap-9829a13a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Atharv Kolape", role: "Social Media Co-Head", image: "images/team/atharv-kolape.png", linkedin: "https://www.linkedin.com/in/atharv-kolape-701269336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    ],
  },
  // {
  //   name: "Technical",
  //   members: [
  //     { name: "Karan Thakur", role: "Head", image: "/placeholder.svg", linkedin: "#" },
  //     { name: "Divya Rao", role: "Co-Head", image: "/placeholder.svg", linkedin: "#" },
  //     { name: "Suresh Nair", role: "Member", image: "/placeholder.svg", linkedin: "#" },
  //   ],
  // },
  // {
  //   name: "Sponsorship",
  //   members: [
  //     { name: "Manish Agarwal", role: "Head", image: "/placeholder.svg", linkedin: "#" },
  //     { name: "Pooja Bhatt", role: "Co-Head", image: "/placeholder.svg", linkedin: "#" },
  //   ],
  // },
  // {
  //   name: "PR & Outreach",
  //   members: [
  //     { name: "Rahul Verma", role: "Head", image: "imagesimages/team/SPD.png", linkedin: "#" },
  //     { name: "Simran Kaur", role: "Co-Head", image: "/placeholder.svg", linkedin: "#" },
  //   ],
  // },
  // {
  //   name: "Design",
  //   members: [
  //     { name: "Aditya Chopra", role: "Head", image: "/placeholder.svg", linkedin: "#" },
  //     { name: "Maya Iyer", role: "Co-Head", image: "/placeholder.svg", linkedin: "#" },
  //   ],
  // },
 ];

const Team = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  // Helper to determine visibility
  const showCentral = filter === 'all' || filter === 'central';
  const showPioneer = filter === 'all' || filter === 'pioneer';

  const FilterButton = ({ type, label }: { type: FilterType; label: string }) => (
    <button
      onClick={() => setFilter(type)}
      className={cn(
        "px-6 py-2 rounded-full font-montserrat text-sm font-semibold tracking-wider uppercase transition-all duration-300 border",
        filter === type
          ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
          : "bg-card/30 text-muted-foreground border-white/10 hover:bg-card/50 hover:text-white"
      )}
    >
      {label}
    </button>
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 animated-gradient-bg relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Meet Our Team</span>
          </h1>
          <p className="font-montserrat text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            The passionate individuals making Pune Startup Fest possible
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <FilterButton type="all" label="All Members" />
            <FilterButton type="central" label="Team Pioneer" />
            <FilterButton type="pioneer" label="Central Core Committee" />
          </div>
        </div>
      </section>

      {/* Team Pioneer */}
      {showCentral && (
        <section className="py-16 md:py-24 bg-card animate-slide-up">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="gradient-text">Team Pioneer</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {leadership.map((member, index) => (
                <div
                  key={member.name}
                  className="glass-card p-8 text-center hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Profile Image */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-[3px] animate-pulse-glow">
                      <div className="w-full h-full rounded-full bg-card overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <h3 className="font-montserrat font-bold text-xl text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Central Core Committee */}
      {showPioneer && (
        <section className="py-16 md:py-24 animate-slide-up">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="gradient-text">Central Core Committee</span>
            </h2>

            {departments.map((dept, deptIndex) => (
              <div key={dept.name} className="mb-16 last:mb-0">
                <h3 className="font-montserrat text-xl font-semibold text-center text-muted-foreground mb-8">
                  {dept.name}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                  {dept.members.map((member, index) => (
                    <div
                      key={member.name}
                      className="glass-card p-4 text-center hover-lift animate-fade-in group"
                      style={{ animationDelay: `${(deptIndex * 0.1) + (index * 0.05)}s` }}
                    >
                      {/* Profile Image */}
                      <div className="relative w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary p-[2px]">
                          <div className="w-full h-full rounded-full bg-card overflow-hidden">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        </div>
                      </div>

                      <h4 className="font-montserrat font-semibold text-foreground text-sm mb-1">
                        {member.name}
                      </h4>
                      <p className="text-muted-foreground text-xs mb-3">
                        {member.role}
                      </p>
                      <a
                        href={member.linkedin}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Join CTA
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Join Our Team</span>
          </h2>
          <p className="font-montserrat text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Want to be part of the next Pune Startup Fest? We're always looking
            for passionate individuals.
          </p>
          <a href="/contact" className="glow-button font-montserrat inline-block">
            Become a Volunteer
          </a>
        </div>
      </section> */}
    </Layout>
  );
};

export default Team;
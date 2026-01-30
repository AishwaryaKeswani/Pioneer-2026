import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const quickLinks = [
  { name: "Register for Event", href: "#register" },
  { name: "Become a Sponsor", href: "/sponsors" },
  { name: "Join as Volunteer", href: "#volunteer" },
  { name: "Press & Media", href: "#media" },
];

const contactCards = [
  {
    title: "Abhivyakti",
    email: "kitcoekabhivyakti@gmail.com",
    phone: "+91 9322842490",
    icon: Users,
  },
  {
    title: "Prakalp",
    email: "kitcoekprakalp@gmail.com",
    phone: "+91 7058626818",
    icon: Users,
  },
  {
    title: "Battle Blitz",
    email: "rajput.digvijay@kitcoek.in",
    phone: "+91 9763738262",
    icon: Users,
  },
];


const faqs = [
  {
    question: "What is PIONEER 2026?",
    answer:
      "PIONEER 2026 is a National Level Technical Event organized by ISTE Student Chapter, KIT’s College of Engineering, Kolhapur, focusing on innovation, research, and entrepreneurship.",
  },
  {
    question: "When and where is PIONEER 2026 held?",
    answer:
      "📅 21–22 February 2026\n📍 KIT’s College of Engineering, Kolhapur (Autonomous)",
  },
  {
    question: "Who can participate?",
    answer:
      "Diploma, UG, PG (including MCA) students, student innovators, and startups can participate. A valid college/university ID card is mandatory.",
  },
  {
    question: "What are the major events under PIONEER 2026?",
    answer:
      "PRAIKALP – Innovation & startup pitching\nABHIVYAKTI – Technical paper presentation\nBattle Blitz – Free Fire gaming tournament",
  },
  {
    question: "What is the total prize pool?",
    answer:
      "🏆 Prizes worth up to ₹5 Lakhs are awarded across various events and domains.",
  },
  {
    question: "What is the registration fee?",
    answer:
      "PRAIKALP: ₹200 per participant (includes accommodation & food for outstation participants)\nBattle Blitz: ₹800 per squad\nABHIVYAKTI: As per paper presentation rules",
  },
  {
    question: "What are the important deadlines?",
    answer:
      "📌 Abstract / Paper Submission: 18 February 2026\n📌 Battle Blitz Round 1: 15 February 2026\n📌 Main Event: 21–22 February 2026",
  },
  {
    question: "Where can I get rules, registration, and updates?",
    answer:
      "🌐 Visit www.kitcoek.in/pioneer2026\n📱 Detailed rules and updates will be shared via WhatsApp after registration.",
  },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 animated-gradient-bg relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Contact Us</span>
          </h1>
          <p className="font-montserrat text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Have questions? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Map & Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Map */}
              <div className="glass-card p-2 animate-fade-in w-full h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.4545676335933!2d74.2599192749174!3d16.654121284113344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0ffb509926fa9%3A0x9af43eb75ec2804!2sKIT's%20College%20of%20Engineering%20Kolhapur%20(Empowered%20Autonomous)!5e0!3m2!1sen!2sin!4v1769778594737!5m2!1sen!2sin"
        className="w-full h-full rounded-lg"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="KIT College of Engineering Kolhapur Map"
      />
    </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {/* Contact Details */}
              <div className="glass-card p-8">
                <h2 className="font-montserrat font-bold text-2xl text-foreground mb-6">
                  Contact Information
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href="mailto:contact@punestartupfest.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contact@punestartupfest.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a
                        href="tel:+919876543210"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">
                        Pune, Maharashtra, India
                      </p>
                    </div>
                  </li>
                </ul>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="font-medium text-foreground mb-4">Follow Us</p>
                  <div className="flex gap-4">
                    
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              {/* <div className="glass-card p-8">
                <h2 className="font-montserrat font-bold text-2xl text-foreground mb-6">
                  Quick Links
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {quickLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name} →
                    </a>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Team Contact Cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Team Contacts</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {contactCards.map((card, index) => (
              <div
                key={card.title}
                className="glass-card p-8 animate-fade-in hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <card.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-foreground">
                    {card.title}
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                      <a
                        href={`mailto:${card.email}`}
                        className="text-sm text-foreground hover:text-primary transition-colors break-all"
                      >
                        {card.email}
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                      <a
                        href={`tel:${card.phone.replace(/\s/g, "")}`}
                        className="text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {card.phone}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
   <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card px-6 border-none"
                >
                  <AccordionTrigger className="font-montserrat font-medium">
                    {faq.question}
                  </AccordionTrigger>

                  {/* ✅ FIXED NEWLINE ISSUE HERE */}
                  <AccordionContent className="text-muted-foreground whitespace-pre-line">
                    {faq.answer}
                  </AccordionContent>

                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Contact;
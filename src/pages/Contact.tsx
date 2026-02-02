import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { 
  Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Users, 
  Send, Loader2, BedDouble, TrendingUp 
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { events } from "@/data/events";

// --- Existing Data ---
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
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchParams] = useSearchParams();
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    college: "",
    branch: "",
    year: "",
    issue_type: "",
    event_name: "",
    description: "",
  });

  // Check for 'issue' param in URL on mount (for external links)
  useEffect(() => {
    const issueParam = searchParams.get("issue");
    if (issueParam) {
      setFormData((prev) => ({
        ...prev,
        issue_type: issueParam,
      }));
      // Optional: Auto scroll to form if coming from external link
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchParams]);

  // Handler for internal "Book My Room" button
  const handleBookRoom = () => {
    // 1. Set dropdown to Accommodation
    setFormData((prev) => ({
      ...prev,
      issue_type: "Accommodation",
    }));
    // 2. Scroll to form
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formData.name || !formData.email || !formData.mobile || !formData.issue_type) {
        throw new Error("Please fill in all required fields.");
      }

      // Supabase Insert
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            college: formData.college,
            branch: formData.branch,
            year: formData.year,
            issue_type: formData.issue_type,
            event_name: formData.event_name === "none" ? null : formData.event_name,
            description: formData.description,
          }
        ]);

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "We have received your query and will get back to you soon.",
        variant: "default",
        className: "bg-green-600 border-green-700 text-white"
      });

      // Reset Form
      setFormData({
        name: "",
        email: "",
        mobile: "",
        college: "",
        branch: "",
        year: "",
        issue_type: "",
        event_name: "",
        description: "",
      });

    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {/* --- Dynamic Contact Form & General Info --- */}
      <section className="py-16 bg-card relative overflow-hidden" id="contact-form">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Left Column: General Contact Info */}
            <div className="lg:col-span-1 space-y-8 animate-slide-right">
              <div className="glass-card p-8 rounded-2xl border-white/10 hover:border-primary/30 transition-colors duration-300">
                <h2 className="text-2xl font-playfair font-bold mb-6 text-white">General Info</h2>
                <ul className="space-y-6 font-montserrat">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:pioneer@kitcoek.in" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        pioneer@kitcoek.in
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <a href="tel:+918237800585" className="block hover:text-primary transition-colors">
                          Aishwarya Keswani - +91 8237800585
                        </a>
                        <a href="tel:+918329945496" className="block hover:text-primary transition-colors">
                          Shrawani Choughule - +91 8329945496
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground text-sm">
                        KIT’s College of Engineering, Kolhapur,<br/>
                        Maharashtra 411043
                      </p>
                    </div>
                  </li>
                </ul>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-white/10 flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="glass-card p-2 rounded-2xl border-white/10 h-64 overflow-hidden relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.4545676335933!2d74.2599192749174!3d16.654121284113344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0ffb509926fa9%3A0x9af43eb75ec2804!2sKIT's%20College%20of%20Engineering%20Kolhapur%20(Empowered%20Autonomous)!5e0!3m2!1sen!2sin!4v1769778594737!5m2!1sen!2sin"
                  className="w-full h-full rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KIT College Map"
                />
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-2 animate-slide-left">
              <div className="glass-card p-8 md:p-10 rounded-2xl border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl rounded-full opacity-20 pointer-events-none"></div>
                
                <h2 className="text-3xl font-playfair font-bold mb-8 text-white">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-montserrat font-medium text-gray-300">Full Name *</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-montserrat font-medium text-gray-300">Email Address *</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Row 2: Mobile & College */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="mobile" className="text-sm font-montserrat font-medium text-gray-300">Mobile No. *</label>
                      <input
                        required
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="college" className="text-sm font-montserrat font-medium text-gray-300">College Name *</label>
                      <input
                        required
                        type="text"
                        name="college"
                        value={formData.college}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="Your Institute Name"
                      />
                    </div>
                  </div>

                  {/* Row 3: Branch & Year */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="branch" className="text-sm font-montserrat font-medium text-gray-300">Branch *</label>
                      <input
                        required
                        type="text"
                        name="branch"
                        value={formData.branch}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="e.g., Computer Science"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="year" className="text-sm font-montserrat font-medium text-gray-300">Year *</label>
                      <select
                        required
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-gray-900 text-gray-400">Select Year</option>
                        <option value="FE" className="bg-gray-900">First Year (FE)</option>
                        <option value="SE" className="bg-gray-900">Second Year (SE)</option>
                        <option value="TE" className="bg-gray-900">Third Year (TE)</option>
                        <option value="BE" className="bg-gray-900">Final Year (BE/BTech)</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Issue Type & Event Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="issue_type" className="text-sm font-montserrat font-medium text-gray-300">Type of Issue *</label>
                      <select
                        required
                        name="issue_type"
                        value={formData.issue_type}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-gray-900 text-gray-400">Select Type</option>
                        <option value="Accommodation" className="bg-gray-900 font-bold text-primary">Accommodation</option> {/* Added Option */}
                        <option value="Technical" className="bg-gray-900">Technical Issue</option>
                        <option value="Registration" className="bg-gray-900">Registration Query</option>
                        <option value="Payment" className="bg-gray-900">Payment Issue</option>
                        <option value="Sponsorship" className="bg-gray-900">Sponsorship Inquiry</option>
                        <option value="General" className="bg-gray-900">General Inquiry</option>
                        <option value="Other" className="bg-gray-900">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="event_name" className="text-sm font-montserrat font-medium text-gray-300">Event Related To</label>
                      <select
                        name="event_name"
                        value={formData.event_name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                      >
                        <option value="none" className="bg-gray-900 text-gray-400">General / No Specific Event</option>
                        {events.map(event => (
                          <option key={event.id} value={event.title} className="bg-gray-900">{event.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 5: Description */}
                  <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-montserrat font-medium text-gray-300">Description (Optional)</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Describe your issue or query in detail..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full glow-button font-montserrat font-semibold py-4 rounded-xl flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW: Accommodation Section (Placed Here) --- */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Decorative Blob */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 pointer-events-none -translate-y-1/2"></div>

        <div className="container mx-auto px-4">
          <div className="glass-card p-10 md:p-16 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold tracking-wide uppercase">
                  <BedDouble className="w-4 h-4" />
                  Stay With Us
                </div>
                <h2 className="font-playfair text-3xl md:text-5xl font-bold">
                  Need Accommodation?
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Traveling from out of town? We've got you covered. We offer comfortable and affordable accommodation options for participants attending Pune Startup Fest.
                  Experience the event without worrying about your stay.
                </p>
                <ul className="space-y-3 text-muted-foreground font-montserrat">
                  <li className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    Close to the venue
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    Networking opportunities with fellow participants
                  </li>
                  <li className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Budget-friendly rates for students
                  </li>
                </ul>
                
                {/* Button passing the issue type 'Accommodation' via Smart Logic */}
                <div className="pt-4">
                  <button 
                    onClick={handleBookRoom}
                    className="glow-button font-montserrat inline-flex items-center gap-2 px-8 py-4 text-lg"
                  >
                    Book My Room
                  </button>
                </div>
              </div>

              {/* Accommodation Image/Visual */}
              <div className="relative h-80 lg:h-full min-h-[300px] rounded-2xl overflow-hidden group">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary via-purple-500 to-secondary opacity-70 blur-lg group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative h-full w-full bg-card rounded-2xl overflow-hidden border border-white/10">
                   <img 
                    src="/images/home/a12.jpg" 
                    alt="Accommodation" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                      <p className="text-white font-playfair text-xl">Comfortable stays for innovators.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Existing: Team Contact Cards --- */}
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

      {/* --- Existing: FAQ --- */}
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
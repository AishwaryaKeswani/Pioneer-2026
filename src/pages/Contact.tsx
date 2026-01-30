import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
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

const faqs = [
  {
    question: "When and where is Pune Startup Fest 2026?",
    answer:
      "Pune Startup Fest 2026 will be held on January 17th and 18th, 2026 at the Convention Center in Hinjewadi, Pune.",
  },
  {
    question: "How can I register for the event?",
    answer:
      "You can register by clicking the 'Register Now' button on our website or by visiting our registration page. Early bird discounts are available for a limited time.",
  },
  {
    question: "What is the registration fee?",
    answer:
      "Registration fees vary by ticket type. Student passes start at ₹499, while professional passes are ₹1,499. VIP passes with exclusive access are available at ₹4,999.",
  },
  {
    question: "Can I participate in multiple competitions?",
    answer:
      "Yes, you can participate in multiple competitions as long as the schedules don't conflict. Each competition may have its own registration requirements.",
  },
  {
    question: "How do I become a sponsor?",
    answer:
      "Visit our Sponsors page to view our sponsorship packages. For custom packages or inquiries, please reach out to us through the contact form or email us directly.",
  },
  {
    question: "Is there accommodation available?",
    answer:
      "While we don't provide accommodation directly, we have partnered with nearby hotels offering special discounts for event attendees. Details will be shared after registration.",
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
            <div className="glass-card p-2 animate-fade-in">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.454567633574!2d74.2599192749174!3d16.654121284113344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0ffb509926fa9%3A0x9af43eb75ec2804!2sKIT&#39;s%20College%20of%20Engineering%20Kolhapur%20(Empowered%20Autonomous)!5e0!3m2!1sen!2sin!4v1769769843043!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
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
              <div className="glass-card p-8">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card px-6 border-none animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="font-montserrat font-medium text-foreground hover:text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
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
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Sponsors", path: "/sponsors" },
  { name: "Team", path: "/team" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Branding */}
          <div className="lg:col-span-1">
            <div className="font-montserrat font-bold text-2xl mb-4">
              <span className="gradient-text">E-CELL</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Pune Startup Fest 2026 - Where Innovation Meets Opportunity
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-foreground mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <span>contact@punestartupfest.com</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>Pune, Maharashtra, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="font-montserrat font-semibold text-foreground mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest updates about the fest directly in your inbox.
            </p>
            <a
              href="#register"
              className="glow-button font-montserrat text-sm inline-block"
            >
              Register Now
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 Pune Startup Fest. All rights reserved. Organized by E-CELL.
          </p>
        </div>
      </div>
    </footer>
  );
};

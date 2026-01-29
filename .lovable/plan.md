

# Pune Startup Fest 2026 - Website Implementation Plan

## Project Overview
A modern, animated single-page application website for the Pune Startup Fest 2026 startup festival. The site will feature smooth scrolling, gradient effects, and high-quality animations to showcase the event, attract registrations, and provide information to attendees, sponsors, and investors.

---

## Design System Foundation

### Color Palette (Dark Theme)
- **Primary Background**: Deep black-blue (#0a0a0f)
- **Secondary Background**: Dark purple-black (#141420)
- **Accent Colors**: Indigo (#6366f1), Purple (#8b5cf6), Blue (#3b82f6)
- **Highlight**: Golden Yellow (#fbbf24)
- **Text**: White primary, gray secondary, light purple accent

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Subheadings/Buttons**: Montserrat (modern sans)
- **Body Text**: Roboto (clean, readable)

### Visual Effects
- Animated gradient mesh backgrounds
- Glassmorphism cards with backdrop blur
- Gradient text effects on titles
- Particle/floating dot animations
- Smooth scroll-triggered animations

---

## Pages & Sections

### 1. Home Page (Landing)
**Hero Section**
- Full viewport animated gradient background with floating particles
- Event branding: "viviota PRESENTS" tagline
- Large gradient text title: "Pune Startup Fest"
- Event dates: "January 2026 | 17th and 18th"
- Prominent "REGISTER NOW" CTA button with glow effect
- Scroll indicator with bouncing animation

**Prize Pool Section**
- Trophy icon with golden glow effect
- Animated counter showing "₹350,000" prize pool
- Background star particles
- Count-up animation on scroll

**Past Speakers/Investors Section**
- 3-column grid of profile cards
- Circular profile images with gradient borders
- Names, organizations, and roles
- Hover effects with card lift and shadow
- Staggered scroll reveal animation

**Sponsors Marquee Section**
- Auto-scrolling logo carousel (infinite loop)
- Grayscale logos that reveal color on hover
- Pause on hover functionality
- "Past Patronages" heading

**Competition Zones Section**
- Split layout: description on left, category names on right
- Large animated category text: Agriculture, Green-zone, Student, Defence
- Gradient text reveal on scroll
- Background gradient shift effect

**Events Preview Section**
- 3-column grid of event cards
- Featured events: BullRun, CEO Challenge, BrandScan
- Calendar icons, category badges, team size indicators
- Card hover effects with lift and gradient border

---

### 2. Events Page
- Page header with "Discover Events" title
- Search bar with filter tabs (All Events, AI Expo 2026)
- Grid of event cards with:
  - Event image/thumbnail placeholder
  - Category badge
  - Title, date, location
  - Brief description
  - Team size requirements
  - "Register" button (links to external form)
- Events include: BullRun, CEO Challenge, BrandScan, Pitch Competition, Startup Exhibition, Networking Sessions, Panel Discussions, Workshops, AI Expo sections
- Filter transition effects and card loading stagger

---

### 3. Sponsors Page
**Current Sponsors Section**
- Tiered display: Title Sponsor, Platinum, Gold, Silver, Bronze
- Larger logos for higher tiers
- Grid layout with placeholder logos

**Become a Sponsor Section**
- CTA heading with gradient text
- Sponsorship package cards showing tier benefits
- Contact button for sponsorship inquiries

**Past Sponsors Showcase**
- Logo grid of previous sponsors
- Hover effects with color reveal

---

### 4. Team Page
**Leadership Team Section**
- Large profile cards (2-3 columns)
- Profile photo, name, role, social links
- Gradient border animation

**Core Team Section**
- 3-4 column grid with smaller cards
- Organized by department: Operations, Marketing, Technical, Sponsorship, PR, Design
- Profile hover effects with image zoom
- LinkedIn link icons

---

### 5. About Page
**Event Story Section**
- Full-width hero with background image overlay
- "About Pune Startup Fest" heading
- Origin story, mission, and vision content

**What We Offer Section**
- 6 icon-text blocks in 3-column grid
- Networking, Mentorship, Pitch Competitions, Investment Connections, Knowledge Sessions, Exhibition Space

**Statistics Section**
- Animated number counters:
  - 500+ Attendees
  - ₹350,000 Prize Pool
  - 50+ Startups
  - 20+ Investors
  - 15+ Sponsors
  - 2 Days of Innovation

**E-CELL Information**
- About the organizing committee
- Social media links

**Venue Section**
- Embedded Google Map placeholder
- Address details and directions

---

### 6. Contact Page
**Contact Form**
- Dark card with glassmorphism effect
- Fields: Name, Email, Phone, Organization, Inquiry Type dropdown, Message
- Form field focus effects
- Submit button with loading state
- Success/error feedback animations

**Contact Information**
- Icon + text blocks for email, phone, location
- Social media links (Instagram, LinkedIn, Twitter)

**Quick Links**
- Register for event, Become a sponsor, Join as volunteer, Press & Media

**FAQ Section**
- Accordion-style expandable questions
- Smooth expand/collapse animations
- Common questions about event details

---

## Global Components

### Navigation Bar
- Sticky header with backdrop blur
- Logo placeholder (text-based E-CELL branding)
- Navigation links: Home, Events, Sponsors, Team, About, Contact
- "Register" CTA button with gradient
- Mobile hamburger menu with animated icon
- Full-screen overlay menu on mobile

### Footer
- Event branding
- Quick navigation links
- Social media icons
- Contact information
- Copyright notice

---

## Animations & Interactions

### Page Load Sequence
1. Navigation slides down from top
2. Hero content fades in with scale
3. CTA button bounces in

### Scroll Animations
- Sections fade in and slide up when entering viewport
- Staggered reveal for child elements
- Counter animations trigger on scroll
- Parallax effects on background elements

### Hover Effects
- Cards lift with increased shadow
- Buttons scale with brightness increase
- Images zoom within containers
- Gradient border reveals on cards
- Underline animations on links

### Micro-interactions
- Smooth scrolling between sections
- Button press feedback
- Form field focus effects
- Mobile menu transitions

---

## Technical Implementation Notes
- Single-page application with React Router for navigation
- CSS animations and transitions (no external animation libraries needed)
- Responsive design: Mobile-first with desktop optimization
- External registration links (no backend required)
- Placeholder content throughout for easy replacement
- Accessibility: Proper contrast ratios, keyboard navigation, focus indicators


"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroBillboardTestimonial from "@/components/sections/hero/HeroBillboardTestimonial";
import MediaAbout from "@/components/sections/about/MediaAbout";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import MetricCardEleven from "@/components/sections/metrics/MetricCardEleven";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Zap, Shield, Gauge, Layers, Globe, Search, TrendingUp, BarChart3, GitBranch, Linkedin, Twitter } from "lucide-react";

export default function DigiBridgedLanding() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="compact"
      sizing="large"
      background="aurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="DigiBridged"
          navItems={[
            { name: "Solutions", id: "features" },
            { name: "Results", id: "metrics" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardTestimonial
          title="Your Business, Digitally Bridged"
          description="We build high-performance web infrastructure for local enterprises ready to scale. Stop losing leads to the digital divide—start converting them."
          tag="Digital Transformation"
          tagIcon={Zap}
          tagAnimation="blur-reveal"
          imageSrc="http://img.b2bpic.net/free-photo/luxurious-boardroom-space-within-multinational-company-used-meetings_482257-124520.jpg"
          imageAlt="DigiBridged digital platform dashboard"
          mediaAnimation="slide-up"
          buttons={[
            { text: "Schedule a Strategic Audit", href: "#contact" }
          ]}
          buttonAnimation="blur-reveal"
          testimonials={[
            {
              name: "Marcus Chen",              handle: "CEO, Premier Retail Group",              testimonial: "DigiBridged transformed our digital presence in 90 days. We've seen a 340% increase in qualified leads.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg"
            },
            {
              name: "Jennifer Walsh",              handle: "Owner, Walsh Professional Services",              testimonial: "Finally, someone who understands local business challenges. Our online conversions doubled.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg"
            },
            {
              name: "David Morales",              handle: "General Manager, Hospitality Partners",              testimonial: "The infrastructure they built handles our traffic seamlessly. ROI exceeded expectations by month two.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg"
            },
            {
              name: "Sarah Mitchell",              handle: "VP Operations, Tech-Forward Retail",              testimonial: "Sophisticated, strategic, results-driven. DigiBridged delivered measurable business impact.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg"
            }
          ]}
          testimonialRotationInterval={6000}
          background={{ variant: "glowing-orb" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="The Digital Bridge Your Business Needs"
          description="Traditional businesses face a critical gap: offline expertise meets digital complexity. DigiBridged fills that void with bespoke web infrastructure, managed services, and the expertise that transforms uncertainty into measurable results. We don't just build websites—we engineer competitive advantage."
          tag="Our Approach"
          imageSrc="http://img.b2bpic.net/free-photo/blue-technology-background_1017-3288.jpg"
          imageAlt="DigiBridged infrastructure and strategy"
          buttons={[
            { text: "Learn Our Process", href: "#features" }
          ]}
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureBento
          title="Enterprise-Grade Solutions for Local Business"
          description="Bespoke infrastructure designed specifically for enterprises transitioning from traditional to digital. Every solution addresses real pain points: complexity, scalability, trust, and measurable ROI."
          tag="Capabilities"
          tagIcon={Shield}
          tagAnimation="blur-reveal"
          features={[
            {
              title: "High-Performance Web Infrastructure",              description: "Scalable, secure, optimized for conversion. Built to handle growth without compromise.",              bentoComponent: "orbiting-icons",              centerIcon: Zap,
              items: [
                { icon: Shield, ring: 1, duration: 8 },
                { icon: Gauge, ring: 1, duration: 10 },
                { icon: Layers, ring: 2, duration: 12 },
                { icon: Globe, ring: 2, duration: 14 }
              ]
            },
            {
              title: "Managed Digital Services",              description: "From SEO optimization to paid advertising strategy. We manage the complexity so you focus on business.",              bentoComponent: "3d-stack-cards",              items: [
                { icon: Search, title: "SEO Mastery", subtitle: "Organic Visibility", detail: "Dominate search rankings" },
                { icon: TrendingUp, title: "Performance Marketing", subtitle: "Paid Channels", detail: "Maximize ad ROI" },
                { icon: BarChart3, title: "Analytics & Insight", subtitle: "Data-Driven Decisions", detail: "Optimize continuously" }
              ]
            },
            {
              title: "Strategic Authority Positioning",              description: "Establish your business as the trusted expert in your market. Build credibility that converts.",              bentoComponent: "animated-bar-chart"
            },
            {
              title: "Integration & Automation",              description: "Seamlessly connect your tools, automate workflows, eliminate manual processes.",              bentoComponent: "icon-info-cards",              items: [
                { icon: Zap, label: "Automation", value: "80% time saved" },
                { icon: GitBranch, label: "Integration", value: "Unified systems" },
                { icon: BarChart3, label: "Analytics", value: "Real-time insights" }
              ]
            }
          ]}
          textboxLayout="default"
          animationType="blur-reveal"
          carouselMode="buttons"
          useInvertedBackground={false}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Leading Local Businesses"
          description="Enterprise clients across retail, professional services, and hospitality rely on DigiBridged for measurable digital transformation."
          tag="Proven Track Record"
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "Premier Retail Group",            "Walsh Professional Services",            "Hospitality Partners",            "Tech-Forward Retail",            "Enterprise Solutions LLC",            "Market Leaders Inc",            "Growth Dynamics Co"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardEleven
          title="Measurable Results That Matter"
          description="Our clients experience transformative business impact through strategic digital infrastructure and expert-managed services."
          tag="Performance"
          tagIcon={TrendingUp}
          tagAnimation="blur-reveal"
          metrics={[
            {
              id: "1",              value: "340%",              title: "Avg Lead Increase",              description: "Within 90 days of implementation",              imageSrc: "http://img.b2bpic.net/free-photo/african-man-black-suit_1157-45555.jpg",              imageAlt: "business growth sales increase conversion optimization digital success"
            },
            {
              id: "2",              value: "2.8x",              title: "ROI Multiplier",              description: "Average client return on investment",              imageSrc: "http://img.b2bpic.net/free-photo/busy-multicultural-diverse-employees-analysing-annual-financial-statistics-sitting-desk-front-laptop-holding-documents-searching-business-solutions-team-businesspeople-working-company_482257-13550.jpg",              imageAlt: "lead generation customer engagement digital conversion business results"
            },
            {
              id: "3",              value: "92%",              title: "Client Retention",              description: "Long-term partnership satisfaction",              imageSrc: "http://img.b2bpic.net/free-photo/business-teamwork-meeting-concept_1421-631.jpg",              imageAlt: "customer retention business performance success metrics growth tracking"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Ready to Transform?"
          tagIcon={Zap}
          tagAnimation="blur-reveal"
          title="Let's Build Your Digital Advantage"
          description="Your business deserves a partner who understands both traditional enterprise needs and modern digital strategy. Schedule a strategic audit to discover how DigiBridged can unlock measurable growth."
          buttons={[
            { text: "Schedule Audit", href: "mailto:hello@digibridged.com" },
            { text: "Learn More", href: "#about" }
          ]}
          buttonAnimation="blur-reveal"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="DigiBridged"
          copyrightText="© 2025 DigiBridged | Bridging Traditional Business to Digital Markets"
          socialLinks={[
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}

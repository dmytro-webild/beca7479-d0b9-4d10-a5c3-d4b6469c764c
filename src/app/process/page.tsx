"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import FeatureCardSix from "@/components/sections/feature/FeatureCardSix";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Zap, Search, TrendingUp, BarChart3, Linkedin, Twitter } from "lucide-react";

export default function ProcessPage() {
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
            { name: "Pricing", id: "/pricing" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="process" data-section="process" className="pt-20">
        <FeatureCardSix
          title="Our Strategic Process"
          description="How we build websites designed to drive search visibility and generate qualified leads for your business."
          tag="Our Approach"
          features={[
            {
              id: 1,
              title: "Discovery & Strategy",              description: "We conduct a comprehensive audit of your market, competitors, and target audience. We analyze search opportunities, identify high-intent keywords, and develop a strategic roadmap aligned with your business goals and lead generation targets.",              imageSrc: "http://img.b2bpic.net/free-photo/business-plan_1017-30087.jpg"
            },
            {
              id: 2,
              title: "Technical SEO Foundation",              description: "We build your website on a technically optimized infrastructure that search engines love. This includes proper site structure, fast loading speeds, mobile optimization, schema markup, and clean code—all designed to maximize crawlability and indexing for better search rankings.",              imageSrc: "http://img.b2bpic.net/free-photo/blue-technology-background_1017-3288.jpg"
            },
            {
              id: 3,
              title: "On-Page Optimization",              description: "We strategically optimize every page with target keywords, compelling meta tags, header structure, and high-quality content designed to rank for search queries your potential customers are actually using. Each page is crafted to drive both search visibility and user conversions.",              imageSrc: "http://img.b2bpic.net/free-photo/business-teamwork-meeting_1421-1269.jpg"
            },
            {
              id: 4,
              title: "Lead Capture & Conversion",              description: "We implement strategic conversion elements—optimized forms, clear CTAs, lead magnets, and conversion tracking—to turn your search traffic into qualified leads. Every element is tested and refined to maximize lead generation from your organic and paid traffic.",              imageSrc: "http://img.b2bpic.net/free-photo/business-partners-discussing_1158-655.jpg"
            },
            {
              id: 5,
              title: "Analytics & Performance Tracking",              description: "We establish comprehensive tracking and reporting to monitor search rankings, organic traffic, lead quality, and ROI. You'll have complete visibility into performance metrics and monthly reports showing how your digital infrastructure is driving business results.",              imageSrc: "http://img.b2bpic.net/free-photo/busy-multicultural-diverse-employees-analysing-annual-financial-statistics-sitting-desk-front-laptop-holding-documents-searching-business-solutions-team-businesspeople-working-company_482257-13550.jpg"
            },
            {
              id: 6,
              title: "Continuous Optimization",              description: "We don't just launch and leave. We continuously monitor performance, test improvements, refine keyword strategies, and optimize based on data. Your website evolves with market trends and search algorithm updates to maintain and grow your visibility and lead generation.",              imageSrc: "http://img.b2bpic.net/free-photo/corporate-business_1017-21551.jpg"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Ready to Get Started?"
          tagIcon={Zap}
          tagAnimation="blur-reveal"
          title="Let's Build Your Search-Optimized Platform"
          description="Discover how our strategic approach to web infrastructure and SEO can drive measurable traffic and leads for your business. Schedule a free audit today."
          buttons={[
            { text: "Schedule Free Audit", href: "mailto:hello@digibridged.com" },
            { text: "Back to Home", href: "/" }
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

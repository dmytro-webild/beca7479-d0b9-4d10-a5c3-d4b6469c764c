"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import PricingCardTwo from "@/components/sections/pricing/PricingCardTwo";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Zap, Linkedin, Twitter } from "lucide-react";

export default function PricingPage() {
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

      <div id="pricing" data-section="pricing" className="pt-20">
        <PricingCardTwo
          title="Simple, Transparent Pricing"
          description="One comprehensive website package designed to drive results for your business."
          tag="Pricing"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          plans={[
            {
              id: "website-package",              badge: "Website Package",              price: "$1,000",              subtitle: "One-time + $100/month",              buttons: [
                { text: "Get Started", href: "/book-meeting" },
                { text: "Schedule Consultation", href: "/book-meeting" }
              ],
              features: [
                "5 core pages",                "Mobile responsive design",                "Google Reviews integration",                "Click-to-call button",                "Basic SEO setup",                "24-hour delivery guarantee",                "Monthly hosting and maintenance",                "Small updates included"
              ]
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Ready to Get Started?"
          tagIcon={Zap}
          tagAnimation="blur-reveal"
          title="Let's Build Your Professional Online Presence"
          description="Get your business online with a professional, high-performing website. Our Website Package includes everything you need to attract customers and generate leads online."
          buttons={[
            { text: "Schedule Free Consultation", href: "/book-meeting" },
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
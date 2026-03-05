"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import PricingCardNine from "@/components/sections/pricing/PricingCardNine";
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
        <PricingCardNine
          title="Transparent, Scalable Pricing"
          description="Choose the plan that fits your business needs. All plans include core infrastructure and support."
          tag="Our Plans"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          plans={[
            {
              id: "starter",              title: "Starter",              price: "$2,999",              period: "/month",              imageSrc: "http://img.b2bpic.net/free-photo/business-plan_1017-30087.jpg",              imageAlt: "Starter plan",              button: { text: "Get Started", href: "mailto:hello@digibridged.com" },
              features: [
                "High-performance web infrastructure",                "SEO optimization foundation",                "Basic analytics setup",                "Email support",                "Monthly check-ins"
              ]
            },
            {
              id: "professional",              title: "Professional",              price: "$5,999",              period: "/month",              imageSrc: "http://img.b2bpic.net/free-photo/business-teamwork-meeting_1421-1269.jpg",              imageAlt: "Professional plan",              button: { text: "Get Started", href: "mailto:hello@digibridged.com" },
              features: [
                "Everything in Starter",                "Performance marketing management",                "Advanced analytics & reporting",                "Priority support",                "Weekly optimization calls",                "Paid advertising strategy"
              ]
            },
            {
              id: "enterprise",              title: "Enterprise",              price: "Custom",              period: "/month",              imageSrc: "http://img.b2bpic.net/free-photo/corporate-business_1017-21551.jpg",              imageAlt: "Enterprise plan",              button: { text: "Schedule Consultation", href: "mailto:hello@digibridged.com" },
              features: [
                "Everything in Professional",                "Custom infrastructure design",                "Dedicated account manager",                "24/7 priority support",                "Full integration & automation",                "Strategic authority positioning",                "Quarterly business reviews"
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
          title="Let's Discuss Your Perfect Plan"
          description="Not sure which plan is right for you? Schedule a free consultation with our team to discuss your specific needs and find the ideal solution for your business."
          buttons={[
            { text: "Schedule Free Consultation", href: "mailto:hello@digibridged.com" },
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

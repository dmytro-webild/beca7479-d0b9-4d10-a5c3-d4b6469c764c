"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Zap, Linkedin, Twitter } from "lucide-react";

export default function BookMeetingPage() {
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

      <div id="booking" data-section="booking" className="pt-20 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-2xl px-4 py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Schedule Your Strategic Audit</h1>
            <p className="text-lg opacity-75">Connect with our team using Google Calendar to find the perfect time for your consultation.</p>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="w-full h-96 bg-background rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-lg font-semibold mb-4">Google Calendar Integration</p>
                  <p className="text-sm opacity-75 mb-6">Booking widget will load here via Google Workspace integration</p>
                  <iframe
                    src="https://calendar.google.com/calendar/u/0/r"
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      borderRadius: '8px'
                    }}
                    title="Google Calendar Booking"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm opacity-60">Or reach out directly:</p>
                <a href="mailto:hello@digibridged.com" className="text-primary-cta font-semibold hover:underline">
                  hello@digibridged.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="/" className="text-primary-cta font-semibold hover:underline">
              ← Back to Home
            </a>
          </div>
        </div>
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
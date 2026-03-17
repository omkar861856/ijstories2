import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import SplashScreen from "@/components/ui/SplashScreen";
import ShaderBackground from "@/components/ui/ShaderBackground";
import CookieConsent from "@/components/ui/CookieConsent";

export const metadata: Metadata = {
  title: "ij.stories | Premium Art & Design Agency | Mumbai, London, NYC",
  description: "ij.stories is a global premium art and design agency specializing in cinematic visual identities and immersive digital experiences in Mumbai, London, and New York City.",
  keywords: "design agency mumbai, creative studio london, branding NYC, premium digital experiences, cinematic design, ij stories",
  metadataBase: new URL('https://ijstories.studio'),
  openGraph: {
    title: "ij.stories | Cinematic Art & Design Agency",
    description: "Reimagining reality through premium design and digital storytelling.",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ij.stories | Global Design Agency",
    description: "Premium visual identities and digital experiences.",
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://ijstories.studio',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="geo.region" content="IN-MH, GB-LND, US-NY" />
        <meta name="geo.placename" content="Mumbai, London, New York City" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "ij.stories",
              "image": "https://ijstories.studio/ijlogo.png",
              "description": "Global premium art and design agency specializing in cinematic visual identities.",
              "address": [
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Mumbai",
                  "addressRegion": "MH",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "London",
                  "addressCountry": "GB"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "New York City",
                  "addressRegion": "NY",
                  "addressCountry": "US"
                }
              ],
              "url": "https://ijstories.studio"
            }),
          }}
        />
      </head>
      <body
        className="antialiased bg-black text-white font-sans selection:bg-white selection:text-black"
      >
        <SplashScreen />
        <ShaderBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <CookieConsent />
      </body>
    </html>
  );
}



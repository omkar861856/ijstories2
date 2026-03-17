import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import SplashScreen from "@/components/ui/SplashScreen";

export const metadata: Metadata = {
  title: "ij.stories | Premium Art & Design Agency",
  description: "ij.stories is a premium art and design agency specializing in stunning visual identities and digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="antialiased bg-black text-white"
      >
        <SplashScreen />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}



import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wedding Venue Websites | Premium Web Design for Venues & Resorts",
  description:
    "Transform your wedding venue with stunning, conversion-focused websites. Mobile-first design, SEO optimized, and built to drive bookings. Get your free website preview today.",
  keywords:
    "wedding venue websites, resort websites, venue web design, wedding venue marketing, luxury venue websites",
  openGraph: {
    title: "Wedding Venue Websites | Premium Web Design for Venues & Resorts",
    description:
      "Transform your wedding venue with stunning, conversion-focused websites. Mobile-first design, SEO optimized, and built to drive bookings.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

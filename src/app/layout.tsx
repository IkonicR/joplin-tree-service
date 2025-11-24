import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import { cn } from "@/lib/utils";
import { ChatWidget } from "@/components/chat-widget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Joplin Tree Service",
    default: "Joplin Tree Service | Removal, Trimming & Emergency Care",
  },
  description:
    "Professional Tree Service in Joplin, MO. Licensed & Insured. 24/7 Emergency Tree Removal, Stump Grinding, and Trimming. Serving Jasper & Newton Counties.",
  keywords: [
    "Tree Service Joplin MO",
    "Tree Removal Joplin",
    "Stump Grinding Joplin",
    "Arborist Joplin MO",
    "Emergency Tree Service",
  ],
  authors: [{ name: "Joplin Tree Service Team" }],
  creator: "Joplin Tree Service",
  publisher: "Joplin Tree Service",
  metadataBase: new URL("https://joplinmotreeservice.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Joplin Tree Service | Fast & Affordable Tree Care",
    description:
      "Expert tree removal and trimming in Joplin, MO. 24/7 Emergency response. Licensed and Insured. Call for a free estimate.",
    url: "https://joplinmotreeservice.com",
    siteName: "Joplin Tree Service",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joplin Tree Service",
    description: "Professional Tree Removal & Care in Joplin, MO.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-P1D65SCQDD" />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
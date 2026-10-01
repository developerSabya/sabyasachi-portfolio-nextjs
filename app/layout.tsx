import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/data/resume";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://sahoo-sabyasachi.vercel.app";
const title = `${personalInfo.name} — ${personalInfo.title}`;
const description = personalInfo.summary;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${personalInfo.name}`,
  },
  description,
  keywords: [
    "Sabyasachi Sahoo",
    "Senior Front-End Developer",
    "React Developer",
    "Angular Developer",
    "Vue.js Developer",
    "TypeScript",
    "Front-End Architect",
    "Bengaluru front-end developer",
  ],
  authors: [{ name: personalInfo.name, url: siteUrl }],
  creator: personalInfo.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title,
    description,
    siteName: `${personalInfo.name} — Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/sabyasachi.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    url: siteUrl,
    email: `mailto:${personalInfo.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    sameAs: [personalInfo.linkedin],
    description: personalInfo.summary,
    knowsAbout: [
      "React",
      "Angular",
      "Vue.js",
      "TypeScript",
      "Next.js",
      "Micro Frontends",
      "Generative AI",
    ],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text antialiased">
        {children}
      </body>
    </html>
  );
}

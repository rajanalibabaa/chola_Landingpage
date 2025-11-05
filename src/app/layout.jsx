import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Navbar/Footer";
import SparkleCursor from "@/components/SparkleFlowEffect"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Chola Automation",
    template: "%s | Chola Automation", // For dynamic pages
  },
  description:
    "Website Design & Development | Digital Marketing | Custom Software Development | Business Automation (Chennai-based, serving globally)",
  keywords: [
    "Website design company Chennai",
    "Web development company Chennai",
    "Digital marketing agency Chennai",
    "Custom software development Chennai",
    "Business automation solutions Chennai",
    "Global software development services",
    "Responsive website design",
    "SEO and PPC services Chennai",
    "CRM and ERP software development",
    "Mobile app development India",
    "End-to-end digital transformation",
    "Offshore software development company",
  ],
  icons: {
    icon: "/logo.jpeg",
  },
  openGraph: {
    title: "Chola Automation - Web Design, Development & Business Automation",
    description:
      "Expert in Website Design, Digital Marketing, Custom Software & Business Automation. Based in Chennai, serving clients globally.",
    url: "https://cholabiz.com/",
    siteName: "Chola Automation",
    images: [
      {
        url: "https://cholabiz.com/",
        width: 1200,
        height: 630,
        alt: "Chola Automation - Website & Software Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chola Automation - Web Design, Development & Business Automation",
    description:
      "Website Design & Development | Digital Marketing | Custom Software Development | Business Automation (Chennai-based, serving globally)",
    images: ["https://cholabiz.com/"],
  },
  alternates: {
    canonical: "https://cholabiz.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="video" href="/head1.webm" type="video/webm" />
    
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <SparkleCursor  colors={["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff", "#00ff00", "#ffff00", "#ff00ff"]} animationDuration={800}
        sparkleCount={10}
                  throttleDelay={15}
    
        sparkleSize={12} />

        {/* ✅ JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Chola Automation",
              url: "https://cholabiz.com/",
              logo: "https://cholabiz.com/logo.jpeg",
              sameAs: [
                "https://www.facebook.com/yourpage",
                "https://www.linkedin.com/company/yourpage",
                "https://twitter.com/yourpage",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-XXXXXXXXXX",
                contactType: "Customer Support",
                areaServed: "IN",
                availableLanguage: ["en", "ta"],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}

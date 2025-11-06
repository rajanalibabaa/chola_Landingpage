// ✅ Server Component - DO NOT add "use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Script from "next/script";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Navbar/Footer";

// ✅ Dynamically load SparkleCursor client-side only
const SparkleCursor = dynamic(() => import("@/components/SparkleFlowEffect"), {
  
});

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
    template: "%s | Chola Automation",
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
    "Offshore software development company"
  ],
  metadataBase: new URL("https://cholabiz.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chola Automation - Web Design, Development & Business Automation",
    description:
      "Expert in Website Design, Digital Marketing, Custom Software & Business Automation. Based in Chennai, serving clients globally.",
    url: "https://cholabiz.com/",
    siteName: "Chola Automation",
    images: [
      {
        url: "/cholabiz_logo.jpeg",
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
    title: "Chola Automation",
    description:
      "Website Design & Development | Digital Marketing | Custom Software Development",
    images: ["/cholabiz_logo.jpeg" ] ,
  },
  icons: {
    icon: "/cholabiz_logo.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* ✅ No <head> tag here — handled by Metadata API */}

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />

        {children}

        <Footer />

        <SparkleCursor
          colors={[
            "#ffbe0b",
            "#fb5607",
            "#ff006e",
            "#8338ec",
            "#3a86ff",
            "#00ff00",
            "#ffff00",
            "#ff00ff",
          ]}
          animationDuration={800}
          sparkleCount={10}
          throttleDelay={15}
          sparkleSize={12}
        />

        {/* ✅ JSON-LD inside <body>, SSR compliant */}
        <Script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Chola Automation",
              url: "https://cholabiz.com/",
              logo: "https://cholabiz.com/cholabiz_logo.jpeg",
              sameAs: [
                "https://www.facebook.com/share/1H7yqbih69/",
                "https://www.linkedin.com/company/cholabusinessautomation/",
                "https://twitter.com/yourpage"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9841323388",
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

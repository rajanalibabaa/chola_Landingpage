"use client";
import React, { useEffect, useState } from "react";
import HeroCard from "@/components/HomeHeroComponents";
import OverViewsections from "@/components/OurServices";
import Section2 from "@/components/TestimonialSlider";
import ProcessSteps from "@/components/Invotive";
import { Fab, Zoom } from "@mui/material";
import { WhatsApp, ArrowUpward } from "@mui/icons-material";

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  // 👇 Handle scroll visibility for "Back to Top"
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 👇 WhatsApp click
  const handleWhatsAppClick = () => {
    const phoneNumber = "+919841323388"; // 👈 replace with your number (with country code)
    const message = "Hello! I’d like to know more about your services.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <HeroCard />
      <OverViewsections />
      <Section2 />
      <ProcessSteps />

      {/* 🌐 Floating Buttons */}
      <Zoom in={true}>
        <div
          style={{
            position: "fixed",
            bottom: 50,
            right: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "70px",
            zIndex: 2000,
          }}
        >
          {/* 🟢 WhatsApp Button */}
          <Fab
            color="success"
            aria-label="whatsapp"
            onClick={handleWhatsAppClick}
            sx={{
              bgcolor: "#25D366",
              "&:hover": { bgcolor: "#1DA851" },
            }}
          >
            <WhatsApp sx={{ color: "white" }} />
          </Fab>

          {/* ⬆️ Back to Top Button */}
          <Zoom in={showScroll}>
            <Fab
              color="primary"
              aria-label="scroll-top"
              onClick={scrollToTop}
              sx={{
                bgcolor: "#ff9800",
                "&:hover": { bgcolor: "#fb8c00" },
              }}
            >
              <ArrowUpward sx={{ color: "white" }} />
            </Fab>
          </Zoom>
        </div>
      </Zoom>
    </>
  );
}

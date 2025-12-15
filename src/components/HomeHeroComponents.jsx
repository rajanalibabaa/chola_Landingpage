"use client";
import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const theme = useTheme();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const router = useRouter();

  // ✅ Wait until video starts playing before showing content
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setVideoLoaded(true);
    video.addEventListener("canplay", handleCanPlay);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <Box
      sx={{
        minHeight: { xs: "120vh", sm: "110vh", md: "100vh" },
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 8 },
      }}
      mt={{ xs: -8, md: 0 }}
    >
      {/* 🔹 Background Section */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        {/* 🌄 Static fallback image */}
        <motion.img
          src="/cholabiz_homepagebackground.jpg"
          alt="Background fallback"
          initial={{ opacity: 1 }}
          animate={{ opacity: videoLoaded ? 0 : 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Gradient Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(280deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.35) 100%)",
          }}
        />
      </Box>

      {/* 🔹 Text & Content Section */}
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", sm: "90%", md: 1100 },
          textAlign: { xs: "center", md: "left" },
          color: "white",
          mx: "auto",
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
            <Typography
  variant="h2"
  sx={{
    fontWeight: 700,
    fontSize: {
      xs: "2.1rem",
      sm: "2.4rem",
      md: "3rem",
      lg: "3.4rem",
    },
    lineHeight: { xs: 1.3, sm: 1.4, md: 1.3 },
    color: "white",
    letterSpacing: { xs: "0.5px" },
  }}
>
  WELCOME !!
  <Box
    component="span"
    sx={{
      display: { xs: "block", md: "block" },
      background: "white",
      WebkitBackgroundClip: "text",
      color: "transparent",
    }}
  >
    {/* CHOLA word with custom colors */}
    <Box
      component="span"
      sx={{
        display: "inline",
        background: "none",
        color: "inherit",
      }}
    >
      <Box component="span" sx={{ color: "#ff9800" }}>
        C
      </Box>
      <Box component="span" sx={{ color: "white" }}>
        HOL
      </Box>
      <Box component="span" sx={{ color: "#74ed3f" }}>
        A
      </Box>
    </Box>

    {/* Subtitle text */}
    <Box
      component="span"
      sx={{
        ml: 1,
        fontWeight: 700,
    fontSize: {
      xs: "2.1rem",
      sm: "2.4rem",
      md: "3rem",
      lg: "3.4rem",
    },
    lineHeight: { xs: 1.3, sm: 1.4, md: 1.3 },
    color: "white",
    letterSpacing: { xs: "0.5px" },
      }}
    >
      BUSINESS AUTOMATION
    </Box>
  </Box>
</Typography>

        </motion.div>

        {/* Short description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Typography
            sx={{
              mt: { xs: 1.5, sm: 2 },
              fontSize: { xs: "1.15rem", sm: "1.2rem", md: "1.25rem" },
              fontWeight: 400,
              color: "white",
              maxWidth: { xs: "100%", sm: 600 },
              mx: { xs: "auto", md: 0 },
            }}
          >
            We craft{" "}
            <Box component="span" sx={{ fontWeight: "bold", color: "#ff9800" }}>
              cutting-edge{" "}
            </Box>
            web and mobile applications that empower businesses to scale and
            thrive in the digital era.
          </Typography>
        </motion.div>

        {/* Long paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Typography
            sx={{
              mt: { xs: 1.5, sm: 2 },
              fontSize: { xs: "1.05rem", sm: "1.1rem", md: "1.2rem" },
              fontWeight: 400,
              color: "white",
              lineHeight: { xs: 1.6, md: 1.7 },
              maxWidth: { xs: "100%", sm: 650, md: 700 },
              mx: { xs: "auto", md: 0 },
            }}
          >
            At Chola Business Automation, we specialize in delivering customized
            business automation software solutions designed to streamline your
            operations, enhance productivity, and drive growth. Our products and
            services are built to empower startups, SMEs, and enterprises to go
            digital with ease.
          </Typography>

          {/* Call to Action Button */}
          <Button
            component={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/contact")}
            sx={{
              mt: { xs: 3, sm: 4 },
              px: { xs: 3, sm: 4, md: 5 },
              py: { xs: 1, sm: 1.2, md: 1.4 },
              fontWeight: 600,
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
              borderRadius: "50px",
              background: "linear-gradient(90deg, #fb923c, #ef4444, #facc15)",
              color: "white",
              mx: { xs: "auto", md: 0 },
            }}
          >
            🚀 Get Started
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}

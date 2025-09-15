"use client";
import React from "react";
import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "url(/head1.jpg) no-repeat center center/cover",
      }}
    >
  

      {/* 🔹 Text Content */}
      <Box
        sx={{
          zIndex: 3,
          maxWidth: 1200,
          width: "100%",
          px: 3,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "3rem" },
              lineHeight: 1.6,
              color: "white",
            }}
          >
            WELCOME !!
            <Box
              component="span"
              sx={{
                display: "block",
                background: "white",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              <Box component="span" sx={{ color: "#ff9800" }}>C</Box> <Box component={"span"} sx={{ color: "#ffffffff" }} >H O L {" "}</Box>
              <Box component="span" sx={{ color: "#74ed3f" }}>A</Box> BUSINESS AUTOMATION
            </Box>
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: "1rem", md: "1.25rem" },
              fontWeight: 500,
              color: "white",
              maxWidth: 600,
            }}
          >
            We craft{" "}
            <Box component="span" sx={{ fontWeight: "bold", color: "#ef4444" }}>
              cutting-edge{" "}
            </Box>
            web and mobile applications that empower businesses to scale and thrive
            in the digital era.
          </Typography>
        </motion.div>

        <Box
          sx={{
            mt: 3,
            display: "flex",
            gap: 2,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Button
            component={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              px: 4,
              py: 1.2,
              fontWeight: 600,
              borderRadius: "50px",
              background: "linear-gradient(90deg, #fb923c, #ef4444, #facc15)",
              color: "white",
            }}
          >
            🚀 Get Started
          </Button>
          <Button
            component={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              px: 4,
              py: 1.2,
              fontWeight: 600,
              borderRadius: "50px",
              border: "2px solid #ef4444",
              background: "rgba(255,255,255,0.9)",
              color: "#ef4444",
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>

      {/* 🔹 Woman Image at Bottom (Responsive + Animated) */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        animate={{ opacity: 1, y: [1, 8, 2], scale: 1.1 }} // 👈 added subtle float
        transition={{
          duration: 1.2,
          ease: "easeOut",
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{
          position: "absolute",
          bottom: 0,
          left: "45%",
          transform: "translateX(10%)",
          zIndex: 2,
          width: isMobile ? "80%" : "70%", // 🔥 responsive scaling
          maxWidth: "1250px",              // max limit on large screens
        }}
      >
        <Image
          src="/head2.png"
          alt="Standing Woman"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto", // ✅ keeps aspect ratio
            objectFit: "contain",
          }}
          priority
        />
      </motion.div>
    </Box>
  );
}

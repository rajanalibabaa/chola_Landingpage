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
        background: "linear-gradient(135deg, #fff7ed, #ffffff, #fff3e0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 3, sm: 6, md: 12 ,},
        mt:5
      }}
    >
      <Box
        sx={{
          maxWidth: 1400,
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
        }}
      >
        {/* Left Content */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2.25rem", sm: "3rem", md: "3.75rem" },
                lineHeight: 1.2,
              }}
            >
              Welcome to{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(to right, #f97316, #ef4444)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Chola Business Automation Private Ltd
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          >
            <Typography
              sx={{
                mt: 3,
                fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                color: "#4b5563",
              }}
            >
              We craft{" "}
              <Box component="span" sx={{ fontWeight: "bold", color: "#f97316" }}>
                cutting-edge
              </Box>{" "}
              web and mobile applications that empower businesses to scale and thrive in the digital era.
            </Typography>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: { xs: "center", md: "flex-start" }, mt: 3 }}>
              <Button
                component={motion.button}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(251,146,60,0.35)" }}
                sx={{
                  px: 5,
                  py: 1.5,
                  fontWeight: 700,
                  borderRadius: "50px",
                  background: "linear-gradient(45deg, #fb923c, #ef4444, #facc15)",
                  color: "white",
                  boxShadow: "0px 5px 15px rgba(251,146,60,0.3)",
                  textTransform: "none",
                }}
              >
                🚀 Get Started
              </Button>

              <Button
                component={motion.button}
                whileHover={{ scale: 1.05, backgroundColor: "#fff3e0" }}
                sx={{
                  px: 5,
                  py: 1.5,
                  fontWeight: 700,
                  borderRadius: "50px",
                  border: "2px solid #fb923c",
                  color: "#fb923c",
                  textTransform: "none",
                }}
              >
                Learn More
              </Button>
            </Box>
          </motion.div>
        </Box>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ flex: 1, display: "flex", justifyContent: "center", width: "100%" }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "100%", maxWidth: isMobile ? "100%" : 650 }}
          >
            <Image
              src="/home.png"
              alt="Home Banner"
              width={650}
              height={500}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 24,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              priority
            />
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
}

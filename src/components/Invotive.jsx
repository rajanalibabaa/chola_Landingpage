"use client";
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Requirement Analysis",
    description:
      "We begin by thoroughly understanding your business needs, goals, and challenges through detailed discussions and research to create a comprehensive project blueprint.",
    icon: "/icon1.png",
    // color: "#FF6B6B",
  },
  {
    id: 2,
    title: "Design & Planning",
    description:
      "Our design team creates intuitive user interfaces and experiences while our architects develop a robust technical plan for seamless implementation.",
    icon: "/icon2.png",
    // color: "#4ECDC4",
  },
  {
    id: 3,
    title: "Prototyping",
    description:
      "We build interactive prototypes that allow you to visualize and test the product functionality before development begins, ensuring alignment with your vision.",
    icon: "/icon3.png",
    // color: "#45B7D1",
  },
  {
    id: 4,
    title: "Development",
    description:
      "Our skilled developers bring your project to life using cutting-edge technologies and agile methodologies, ensuring high-quality code and regular progress updates.",
    icon: "/icon4.png",
    // color: "#9966CC",
  },
  {
    id: 5,
    title: "Testing & Deployment",
    description:
      "We conduct rigorous testing across multiple scenarios and devices to ensure flawless performance before deploying your solution to production environments.",
    icon: "/icon5.png",
    // color: "#F9A826",
  },
  {
    id: 6,
    title: "Support & Maintenance",
    description:
      "Our relationship continues post-launch with ongoing support, maintenance, and updates to keep your solution running smoothly and efficiently.",
    icon: "/icon6.png",
    // color: "#6BCB77",
  },
];

export default function ProcessSteps() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: "#FFEDD4",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(182, 245, 0, 0.1) 0%, transparent 70%)",
          opacity: 0.6,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -150,
          left: -150,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(182, 245, 0, 0.05) 0%, transparent 70%)",
          opacity: 0.4,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: 22,
                letterSpacing: 2,
                mb: 1,
                color: "#00f91d",
              }}
            >
              OUR PROCESS
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              component="h2"
              variant="h3"
              sx={{ fontWeight: "bold", color: "black", mb: 2 }}
            >
              How We Bring Your Vision to Life
            </Typography>
            <Box
              sx={{
                width: 70,
                height: 4,
                background: "#00f91d",
                borderRadius: 2,
                mx: "auto",
              }}
            />
          </motion.div>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(0, 0, 0, 0.85)",
              maxWidth: 650,
              mx: "auto",
              mt: 2,
              lineHeight: 1.6,
            }}
          >
            Our structured approach ensures that every project is delivered with
            precision, quality, and efficiency from conception to completion.
          </Typography>
        </Box>

        {/* Process Steps Grid */}
        <Grid
          container
          display={"grid"}
          gridTemplateColumns={isMobile ? "1fr" : "repeat(2, 1fr)"}
          spacing={4}
        >
          {steps.map((step, index) => {
            const direction =
              index % 2 === 0 ? "offscreenLeft" : "offscreenRight";
            return (
              <Grid item xs={12} sm={6} md={4} key={step.id}>
                <motion.div
                  initial={direction}
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                >
                  <Box
                    sx={{
                      mt: { xs: 4, md: 5 },
                      p: 6,
                      pt: 6, // extra padding-top for icon space
                      height: "100%",
                      borderRadius: 4,
                      background: "rgba(255, 255, 255, 1)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.4)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                      transition:
                        "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      position: "relative",
                      overflow: "visible", // let the icon float outside
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
                      },
                    }}
                  >
                    {/* Icon Image Floating at Top */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: -40, // makes it float above card
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 80,
                        height: 80,
                        borderRadius: "50px",
                        border: `1px solid black`,
                        // backgroundColor: `${step.color}15`,
                        // border: `2px solid ${step.color}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                        transition: "all 0.4s ease",
                        "& img": {
                          width: 50,
                          height: 50,
                          objectFit: "cover",
                        },
                      }}
                      className="step-icon"
                    >
                      <Image
                        src={step.icon}
                        alt={step.title}
                        width={40}
                        height={40}
                      />
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "#FF6B6B",
                        mb: 1,
                      }}
                    >
                      {step.title}
                      <Box
                        sx={{
                          width: 100,
                          height: 4,
                          background:
                            "linear-gradient(90deg, #ff4a22ff, transparent)",
                          borderRadius: 2,
                          // mx: "auto",
                          mb: 3,
                        }}
                      />
                    </Typography>
                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{ color: "rgba(26, 26, 26, 0.7)", lineHeight: 1.6 }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

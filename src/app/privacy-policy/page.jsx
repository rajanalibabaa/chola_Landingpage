"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, useTheme, useMediaQuery, Button, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "We may collect personal details such as your name, email, phone number, and company information when you fill out forms, contact us, or use our services.",
    },
    {
      title: "2. How We Use Your Information",
      content:
        "Your information is used to provide services, respond to inquiries, improve our offerings, and share relevant updates with you.",
    },
    {
      title: "3. Data Protection",
      content:
        "We implement security measures to protect your data. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute safety.",
    },
    {
      title: "4. Third-Party Sharing",
      content:
        "We do not sell or trade your information. Limited sharing may occur with trusted service providers who assist in delivering our services.",
    },
    {
      title: "5. Your Rights",
      content:
        "You have the right to access, update, or request deletion of your personal data at any time by contacting us.",
    },
    {
      title: "6. Updates to This Policy",
      content:
        "We may update this Privacy Policy from time to time. Please review this page regularly for changes.",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "linear-gradient(135deg, #FF6F61, #FFB347)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        px: 2,
        py: 6,
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        sx={{
          maxWidth: "800px",
          width: "100%",
          bgcolor: "white",
          borderRadius: 3,
          boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
          p: { xs: 3, sm: 6 },
        }}
      >
        {/* Title */}
        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontWeight="700"
          gutterBottom
          sx={{
            textAlign: "center",
            background: "linear-gradient(90deg, #FF6F61, #FFB347)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Privacy Policy
        </Typography>
        <Typography
          variant="body2"
          align="center"
          sx={{ mb: 4, color: "#666" }}
        >
          Last updated: September 2025
        </Typography>

        {/* Accordion Sections */}
        {sections.map((section, i) => (
          <Accordion
            key={i}
            sx={{
              mb: 2,
              borderRadius: 2,
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="600" sx={{ color: "#333" }}>
                {section.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                {section.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        {/* Footer */}
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Typography
            variant="body2"
            sx={{
              fontStyle: "italic",
              color: "#666",
              mb: 3,
            }}
          >
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <strong>support@yourwebsite.com</strong>.
          </Typography>

          <Button
            variant="contained"
            sx={{
              borderRadius: 30,
              px: 4,
              py: 1.2,
              fontWeight: "600",
              textTransform: "none",
              background: "linear-gradient(90deg, #FF6F61, #FFB347)",
              "&:hover": {
                background: "linear-gradient(90deg, #FFB347, #FF6F61)",
              },
            }}
            onClick={() => router.push("/contact")}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

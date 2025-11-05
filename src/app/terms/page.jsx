"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

export default function TermsAndConditions() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        // background: "linear-gradient(135deg, #FF6F61, #FFB347)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        px: 2,
        py: 6,
        mt: 2,
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
          // boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
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
          Terms and Conditions
        </Typography>

        {/* --- Content --- */}
        <Typography variant={isMobile ? "caption" : "body1"} sx={{ color: "#444", lineHeight: 1.8, mb: 3 }}>
          These Terms and Conditions (“Terms”) govern your use of Chola Business
          Automation Pvt. Ltd. (“CholaBiz.com”) software products and services.
          By accessing or using our website or services, you agree to comply with
          these Terms.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1, color: "#FF6F61" }}>
          General Terms:
        </Typography>
        <Typography variant={isMobile ? "caption" : "body1"} sx={{ color: "#555", lineHeight: 1.8 }}>
          By accessing or using <strong>CholaBiz.com</strong>, you agree to comply
          with these terms. These Terms and Conditions govern the sale and
          delivery of software products and related services.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1, color: "#FF6F61" }}>
          Products & Services:
        </Typography>
        <Typography variant={isMobile ? "caption" : "body1"} sx={{ color: "#555", lineHeight: 1.8 }}>
          All our software and services are customized or license-based digital
          products. Features, pricing, and delivery timelines are defined in
          respective project proposals or invoices.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1, color: "#FF6F61" }}>
          Payment:
        </Typography>
        <Typography variant={isMobile ? "caption" : "body1"} sx={{ color: "#555", lineHeight: 1.8 }}>
          All payments must be made in full before delivery. We accept online
          payments via our approved payment gateway.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1, color: "#FF6F61" }}>
          Delivery:
        </Typography>
        <Typography variant={isMobile ? "caption" : "body1"} sx={{ color: "#555", lineHeight: 1.8 }}>
          Software delivery occurs digitally via email or secure login
          credentials after payment confirmation.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1, color: "#FF6F61" }}>
          Warranty & Support:
        </Typography>
        <Typography variant={isMobile ? "caption" : "body1"} sx={{ color: "#555", lineHeight: 1.8 }}>
          We provide post-purchase technical support as per the terms of your
          selected plan or service agreement.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1, color: "#FF6F61" }}>
          Prohibited Use:
        </Typography>
        <Typography variant={isMobile ? "caption" : "body1"} sx={{ color: "#555", lineHeight: 1.8 }}>
          You agree not to misuse our software, replicate code, or resell our
          intellectual property without authorization.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1, color: "#FF6F61" }}>
          Governing Law:
        </Typography>
        <Typography variant={isMobile ? "caption" : "body1"} sx={{ color: "#555", lineHeight: 1.8 }}>
          All disputes are subject to the jurisdiction of Chennai, Tamil Nadu.
        </Typography>

        {/* --- Footer --- */}
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Typography
            variant="body2"
            sx={{
              fontStyle: "italic",
              color: "#666",
              mb: 3,
            }}
          >
            For any queries regarding these Terms and Conditions, please contact
            us at{" "}
            <a
              href={`mailto:support@cholabiz.com?subject=${encodeURIComponent(
                "Inquiry about Terms and Conditions"
              )}&body=${encodeURIComponent(
                "Hello CholaBiz Team,%0D%0A%0D%0AI would like to ask about..."
              )}`}
              style={{
                color: "#FF6F61",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              support@cholabiz.com
            </a>
            .
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

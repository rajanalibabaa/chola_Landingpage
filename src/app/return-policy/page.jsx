"use client";
import React from "react";
import { useRouter } from "next/navigation";
import   useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import  Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

export default function ReturnPolicy() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        minHeight: "40vh",
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
          Return Policy
        </Typography>

        {/* Content */}
        <Typography variant={isMobile ? "caption" : "body1"} sx={{ color: "#555", lineHeight: 1.8, mb: 2 }}>
          Since CholaBiz offers digital software products and IT services, there are no physical goods to return.
        </Typography>

        <Typography variant={isMobile ? "caption" : "body1"} sx={{ color: "#555", lineHeight: 1.8, mb: 2 }}>
          Once the digital license or access credentials have been issued, the service is considered delivered and non-returnable.
        </Typography>

        <Typography variant={isMobile ? "caption" : "body1"} sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}>
          In case of any technical issues, our team will provide rectification or replacement within the warranty/support period.
        </Typography>

        <Typography variant={isMobile ? "caption" : "body1"} sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}>
          For support or questions about delivery, licensing, or technical issues, contact:
        </Typography>

        <Typography variant={isMobile ? "caption" : "body1"} sx={{ color: "#FF6F61", fontWeight: 600, mb: 5 }}>
          <a
            href="mailto:support@cholabiz.com"
            style={{ color: "#FF6F61", textDecoration: "none" }}
          >
            support@cholabiz.com
          </a>{" "}
          |{" "}
          <a
            href="tel:+919841323388"
            style={{ color: "#FF6F61", textDecoration: "none" }}
          >
            +91 98413 23388
          </a>
        </Typography>

        {/* Contact Button */}
        <Box sx={{ textAlign: "center", mt: 2 }}>
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

"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";


import   useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import  Typography from "@mui/material/Typography";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Box
      sx={{
        minHeight: "75vh",
        // background: "linear-gradient(135deg, #FF6F61, #FFB347)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        px: 2,
        py: 6,
        mt:2
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
          Privacy Policy
        </Typography>

        {/* --- Content --- */}
        <Typography
          variant="ca"
          sx={{ color: "#444", lineHeight: 1.8, mb: 3 }}
        >
          <strong>Chola Business Automation Pvt. Ltd.</strong> respects your
          privacy and is committed to protecting your personal information.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1, color: "#FF6F61" }}>
          Information We Collect:
        </Typography>
        <Typography variant={isMobile ? "caption" : "body1"} sx={{ color: "#555", lineHeight: 1.8 }}>
          • Name, Email Address, Contact Number <br />
          • Company Information and Business Requirements <br />• Payment
          Details for Software Purchase (processed securely through payment
          gateway)
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1, color: "#FF6F61" }}>
          Use of Information:
        </Typography>
        <Typography variant={isMobile ? "caption" : "body1"} sx={{ color: "#555", lineHeight: 1.8 }}>
          Your data is used solely for:
          <br />• Processing your orders and providing services
          <br />• Sending invoices, receipts, and service updates
          <br />• Improving user experience on our website
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1, color: "#FF6F61" }}>
          Data Security:
        </Typography>
        <Typography variant={isMobile ? "caption" : "body1"} sx={{ color: "#555", lineHeight: 1.8 }}>
          We follow strict data security practices and use SSL encryption to
          ensure your personal and payment data remains confidential.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1, color: "#FF6F61" }}>
          Third-Party Disclosure:
        </Typography>
        <Typography variant={isMobile ? "caption" : "body1"} sx={{ color: "#555", lineHeight: 1.8 }}>
          We do not sell or share your personal information with third parties,
          except payment gateways or logistics partners necessary to fulfill
          your orders.
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
  For any privacy-related queries, please contact us at{" "}
  <a
    href="mailto:support@cholabiz.com"
    style={{
      color: "#1976d2",
      textDecoration: "none",
      fontWeight: 700,
    }}
  >
    support@cholabiz.com
  </a>
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

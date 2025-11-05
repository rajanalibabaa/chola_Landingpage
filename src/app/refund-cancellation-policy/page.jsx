"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

export default function RefundCancellationPolicy() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
        mt: 6,
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
        //   boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
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
          Refund & Cancellation Policy
        </Typography>

        {/* Refund Policy */}
        <Typography variant="h6" sx={{ mt: 3, mb: 1, color: "#FF6F61" }}>
          Refund Policy
        </Typography>
        <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.8, mb: 2 }}>
          As our products are digital and customized software services, refunds are generally not
          provided once the project or license access has been initiated or delivered.
        </Typography>
        <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.8, mb: 1 }}>
          However, refunds may be considered under the following circumstances:
        </Typography>
        <Box component="ul" sx={{ color: "#555", lineHeight: 1.8, mb: 3, pl: 3 }}>
          <li>Duplicate payment made by the customer</li>
          <li>Payment processed but no service initiated within 15 working days</li>
        </Box>
        <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}>
          Refunds, if approved, will be processed within 7–10 working days to the original payment method.
        </Typography>

        {/* Cancellation Policy */}
        <Typography variant="h6" sx={{ mt: 3, mb: 1, color: "#FF6F61" }}>
          Cancellation Policy
        </Typography>
        <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.8, mb: 2 }}>
          Customers may cancel their service order within 24 hours of purchase, provided no work has started or license activated.
        </Typography>
        <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}>
          After that, cancellations are not accepted.
        </Typography>

        {/* Contact Info */}
        <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}>
          For any refund or cancellation request, contact:
        </Typography>
        <Typography variant="body1" sx={{ color: "#FF6F61", fontWeight: 600, mb: 5 }}>
          <a
            href="mailto:billing@cholabiz.com"
            style={{ color: "#FF6F61", textDecoration: "none" }}
          >
            billing@cholabiz.com
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

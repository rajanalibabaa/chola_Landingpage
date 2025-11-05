"use client";
import React from "react";
import { Box, Typography, Grid, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NextLink from "next/link"; // Correct import

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1c1c1c",
        color: "#fff",
        py: 4,
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      {/* Main Footer Content */}
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="space-between"
        textAlign={{ xs: "center", md: "left" }}
      >
        {/* --- Company Info --- */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              mb: 1,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Box component="span" sx={{ color: "#ff9800" }}>
              C
            </Box>
            HOL
            <Box component="span" sx={{ color: "#74ed3f" }}>
              A
            </Box>{" "}
            Business Automation PVT LTD
          </Typography>
          <Typography
            variant="body2"
            color="grey.400"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            Empowering your digital journey.
          </Typography>
        </Grid>

        {/* --- Navigation NextLinks --- */}
        <Grid item xs={12} md={5}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent={{ xs: "center", md: "flex-end" }}
            alignItems="center"
            sx={{ flexWrap: "wrap" }}
          >
            {["/contact", "/careers", "/terms", "/privacy-policy"].map((path, index) => (
              <NextLink key={index} href={path}  >
                <Box
                  component="a"
                  sx={{
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {path === "/contact"
                    ? "Contact"
                    : path === "/careers"
                    ? "Careers"
                    : path === "/terms"
                    ? "Terms & Conditions"
                    : "Privacy Policy"}
                </Box>
              </NextLink>
            ))}
          </Stack>
        </Grid>

        {/* --- Social Media Icons --- */}
        <Grid item xs={12} md={3}>
          <Stack
            direction="row"
            spacing={1.5}
            justifyContent={{ xs: "center", md: "flex-end" }}
          >
            <IconButton
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              sx={{ color: "#fff" }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
              sx={{ color: "#fff" }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              sx={{ color: "#fff" }}
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>

      {/* --- Bottom Bar --- */}
      <Box
        sx={{
          borderTop: "1px solid #333",
          mt: 3,
          pt: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="grey.500" mb={1}>
          &copy; {new Date().getFullYear()} Chola Business Automation PVT LTD. All
          rights reserved.
        </Typography>

        <Box width={{ xs: "100%", md: "45%" }} sx={{ textAlign: "center", margin: "0 auto", color: "grey.500" }}>
          <hr />
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent={{ xs: "center", md: "center" }}
          alignItems="center"
          sx={{ flexWrap: "wrap", mt: 1 }}
        >
          {[
            { path: "/terms", label: "Terms & Conditions" },
            { path: "/privacy-policy", label: "Privacy Policy" },
            { path: "/refund-cancellation-policy", label: "Refund & Cancellation Policy" },
            { path: "/return-policy", label: "Return Policy" },
          ].map((link, idx) => (
            <NextLink key={idx} href={link.path} passHref legacyBehavior>
              <Box
                component="a"
                sx={{
                  fontSize: "0.8rem",
                  color: "grey.500",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {link.label}
              </Box>
            </NextLink>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;

"use client";
import React from "react";
import { Box, Typography, Grid, IconButton, Link, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1c1c1c",
        color: "#fff",
        py: 4,
        px: { xs: 2, sm: 4, md: 8 },
        mt: 8,
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

        {/* --- Navigation Links --- */}
        <Grid item xs={12} md={5}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent={{ xs: "center", md: "flex-end" }}
            alignItems="center"
            sx={{ flexWrap: "wrap" }}
          >
            <Link
              href="/contact"
              color="inherit"
              underline="hover"
              sx={{ fontWeight: 500, fontSize: "0.9rem" }}
            >
              Contact
            </Link>
            <Link
              href="/careers"
              color="inherit"
              underline="hover"
              sx={{ fontWeight: 500, fontSize: "0.9rem" }}
            >
              Careers
            </Link>
            <Link
              href="/terms"
              color="inherit"
              underline="hover"
              sx={{ fontWeight: 500, fontSize: "0.9rem" }}
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy-policy"
              color="inherit"
              underline="hover"
              sx={{ fontWeight: 500, fontSize: "0.9rem" }}
            >
              Privacy Policy
            </Link>
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
        <Typography variant="body2" color="grey.500">
          &copy; {new Date().getFullYear()} Chola Business Automation PVT LTD. All
          rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

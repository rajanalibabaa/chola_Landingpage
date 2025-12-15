"use client";
import React from "react";
import Stack  from "@mui/material/Stack";
import Link from "@mui/material/Link";
import  IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import ProductServiceDescription from "../../pages/api/productservicedescription";

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
              gap : .1,
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Box component="span" sx={{ color: "#ff9800" }}>
              C
            </Box>
            HOL
            <Box component="span"  sx={{ color: "#74ed3f" }}>
              A
            </Box>{" "}
            <Box component="span" ml={0.5}>
              Business Automation Pvt. Ltd.,
            </Box>
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
        {/* <Grid item xs={12} md={5}>
          <Stack
            direction={{ xs: "column", sm: "row", md: "column" }}
            spacing={{ xs: 1, sm: 2, md: 1 }}
            justifyContent={{ xs: "center", md: "flex-start" }}
            alignItems="center"
            sx={{ flexWrap: "wrap" }}
          >
            <Link
              href="/"
              color="inherit"
              underline="hover"
              sx={{ fontWeight: 500, fontSize: "0.9rem" }}
            >
              Home
            </Link>
            <Link
              href="/about"
              color="inherit"
              underline="hover"
              sx={{ fontWeight: 500, fontSize: "0.9rem" }}
            >
              About Us
            </Link>
            <Link
              href="/products-services"
              color="inherit"
              underline="hover"
              sx={{ fontWeight: 500, fontSize: "0.9rem" }}
            >
              Products & Services
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
              href="/contact"
              color="inherit"
              underline="hover"
              sx={{ fontWeight: 500, fontSize: "0.9rem" }}
            >
              Contact
            </Link>
            
            
          </Stack>
        </Grid> */}

        {/* --- Social Media Icons --- */}
        <Grid item xs={12} md={3}>
          <Stack
            direction="row"
            spacing={1.5}
            justifyContent={{ xs: "center", md: "flex-end" }}
          >
            <IconButton
              href="https://www.facebook.com/share/1H7yqbih69/"
              target="_blank"
              aria-label="Facebook"
              sx={{ color: "#fff" }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/mrfranchise.in/"
              target="_blank"
              aria-label="Instagram"
              sx={{ color: "#fff" }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="https://teams.live.com/l/message/19:uni01_fvcnf6rju3iwoudnxia5y3bp53ot5zrlz2fb26xwnb3qcc7yibvq@thread.v2/1762348356356?context=%7B%22contextType%22%3A%22chat%22%7D"
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
        <Box>
          <Typography variant="body2" color="grey.500" mb={1}>
            &copy; {new Date().getFullYear()} CHOLA Business Automation Pvt. Ltd.,
            All rights reserved.
          </Typography>
          <Box
            width={{ xs: "100%", md: "45%" }}
            sx={{ textAlign: "center", margin: "0 auto", color: "grey.500" }}
          >
            <hr />
          </Box>

          <Stack
            direction={{ xs: "grid ", md: "row", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent={{ xs: "center", md: "flex-center" }}
            alignItems="center"
            sx={{ flexWrap: "wrap", mt: 1 }}
          >
            <Link
              href="/terms"
              color="grey.500"
              underline="hover"
              sx={{ fontSize: "0.8rem" }}
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy-policy"
              color="grey.500"
              underline="hover"
              sx={{ fontSize: "0.8rem" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/refund-cancellation-policy"
              color="grey.500"
              underline="hover"
              sx={{ fontSize: "0.8rem" }}
            >
              Refund & Cancellation Policy
            </Link>
            <Link
              href="/return-policy"
              color="grey.500"
              underline="hover"
              sx={{ fontSize: "0.8rem" }}
            >
              Return Policy
            </Link>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

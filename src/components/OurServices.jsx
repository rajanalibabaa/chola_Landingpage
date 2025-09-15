"use client";
import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  Link as MuiLink,
} from "@mui/material";
import {
  Language,
  Code,
  Settings,
  Store,
  Cloud,
  PhoneIphone,
  ShoppingCart,
  Campaign,
  ArrowForward,
} from "@mui/icons-material";
import NextLink from "next/link";
import { motion } from "framer-motion";

// Service Data
const services = [
  {
    title: "Website Design & Development",
    desc: "Crafting world-class website designs that transform your ideas into real-world experiences.",
    icon: <Language sx={{ fontSize: 40 }} />,
    href: "/services/web-design",
  },
//   {
//     title: "Web Development",
//     desc: "Delivering scalable web development solutions tailored to your business goals.",
//     icon: <Code sx={{ fontSize: 40 }} />,
//     href: "/services/web-development",
//   },
 {
    title: "E-Marketplace Solutions & E-commerce Development",
    desc: "Creating flexible marketplaces for seamless purchasing and efficient management.",
    icon: <Store sx={{ fontSize: 40 }} />,
    href: "/services/e-marketplace",
  },

  {
    title: "Custom Software Development",
    desc: "Building technology-driven, tailor-made software adopting agile SDLC processes.",
    icon: <Settings sx={{ fontSize: 40 }} />,
    href: "/services/software-development",
  },
   {
    title: "Mobile App Development",
    desc: "Deploying powerful apps that captivate your mobile-savvy audience and boost business.",
    icon: <PhoneIphone sx={{ fontSize: 40 }} />,
    href: "/services/mobile-apps",
  },
   {
    title: "Digital Marketing",
    desc: "Executing impactful strategies to elevate your brand’s reach and popularity.",
    icon: <Campaign sx={{ fontSize: 40 }} />,
    href: "/services/digital-marketing",
  },
 
  {
    title: "Web Hosting & Maintenance",
    desc: "Providing reliable hosting & proactive maintenance for uninterrupted online presence.",
    icon: <Cloud sx={{ fontSize: 40 }} />,
    href: "/services/hosting",
  },
 
//   {
//     title: "",
//     desc: "High-performance online stores designed to drive conversions and sales.",
//     icon: <ShoppingCart sx={{ fontSize: 40 }} />,
//     href: "/services/ecommerce",
//   },
 
];

// Animation Variants
const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: (i) => ({
  opacity: 1,
  y: 0,
  transition: {
    delay: i * 0.2,
    duration: 0.8,
    ease: "easeOut",
  },
}),

};

export default function ServicesSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: { xs: 8, md: 12 },
        overflow: "hidden",
        backgroundImage: "url('/sec1.jpg')", // <-- Replace with a tech-themed background img
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for readability */}
   

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
              Our Services
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
              sx={{
                fontWeight: "bold",
                color: "white",
                mb: 2,
              }}
            >
              Solutions we provide
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
              color: "rgba(255,255,255,0.85)",
              maxWidth: 750,
              mx: "auto",
              mt: 2,
              lineHeight: 1.6,
            }}
          >
            We deliver services that adapt to your business, empowering success
            with technology-driven solutions.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(2, 1fr)",
            },
            gap: 6,
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
              variants={cardVariants}
              style={{ height: "100%" }}
            >
              <NextLink
                href={service.href}
                style={{ textDecoration: "none", display: "block", height: "100%" }}
              >
                <Card
  sx={{
    height: "100%",
    borderRadius: 4,
    textAlign: "center",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    p: 4,
    transition: "all 0.4s ease",
    background: `linear-gradient(245deg, rgba(255, 255, 255, 0.98), rgba(245,245,245,0.9))`,
    border: `1px solid rgba(0,0,0,0.08)`,
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
    "&:hover": {
      transform: "translateY(-10px) scale(1.03)",
      boxShadow: `0px 14px 35px rgba(0, 249, 29, 0.4)`,
      "& .service-icon": {
        bgcolor: "#00f91d",
        color: "black",
        transform: "scale(1.1)",
        boxShadow: "0px 6px 20px rgba(0,249,29,0.6)",
      },
      "& .service-link": {
        background: "#00f91d",
        color: "black",
        borderColor: "#00f91d",
      },
    },
  }}
>
  {/* Floating Icon */}
  <Box
    className="service-icon"
    sx={{
      width: 90,
      height: 90,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "#f2f2f2",
      color: "#00f91d",
      borderRadius: "50%",
      border: "1px solid #000000ff",
      mx: "auto",
      transition: "all 0.4s ease",
      mb: 3,
    }}
  >
    {service.icon}
  </Box>

  <CardContent sx={{ flexGrow: 1, p: 0 }}>
    {/* Title */}
    <Typography
      variant="h6"
      sx={{
        fontWeight: 600,
        mb: 1.5,
        color: "text.primary",
        transition: "color 0.3s ease",
      }}
    >
      {service.title}
    </Typography>

    {/* Description */}
    <Typography
      variant="body2"
      sx={{
        color: "text.secondary",
        mb: 3,
        lineHeight: 1.6,
        px: 1,
      }}
    >
      {service.desc}
    </Typography>

    {/* CTA Button */}
    <MuiLink
      className="service-link"
      variant="body2"
      sx={{
        fontWeight: 600,
        color: "#000000ff",
        textDecoration: "none",
        display: "inline-flex",
        border: "2px solid #00f91d",
        px: 2,
        py: 1,
        borderRadius: 2,
        alignItems: "center",
        transition: "all 0.3s ease",
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          transition: "transform 0.2s ease",
        },
        "&:hover .MuiSvgIcon-root": {
          transform: "translateX(4px)",
        },
      }}
    >
      Explore Service <ArrowForward sx={{ ml: 0.5 }} />
    </MuiLink>
  </CardContent>
</Card>

              </NextLink>
            </motion.div>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

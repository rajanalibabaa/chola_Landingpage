"use client";
import React, { useMemo } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  Button,
} from "@mui/material";

import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const LanguageIcon = dynamic(() => import('@mui/icons-material/Language'), { ssr: false });
const SettingsIcon = dynamic(() => import('@mui/icons-material/Settings'), { ssr: false });
const StoreIcon = dynamic(() => import('@mui/icons-material/Store'), { ssr: false });
const CloudIcon = dynamic(() => import('@mui/icons-material/Cloud'), { ssr: false });
const PhoneIphoneIcon = dynamic(() => import('@mui/icons-material/PhoneIphone'), { ssr: false });
const CampaignIcon = dynamic(() => import('@mui/icons-material/Campaign'), { ssr: false });
const ArrowForwardIcon = dynamic(() => import('@mui/icons-material/ArrowForward'), { ssr: false });

// Service Data
const services = [
  {
    title: "Website Design & Development",
    desc: "Crafting world-class website designs that transform your ideas into real-world experiences.",
    icon: <LanguageIcon sx={{ fontSize: 40 }} />,
    href: "/contact",
  },
  {
    title: "E-Marketplace Solutions & E-commerce Development",
    desc: "Creating flexible marketplaces for seamless purchasing and efficient management.",
    icon: <StoreIcon sx={{ fontSize: 40 }} />,
    href: "/contact",
  },
  {
    title: "Custom Software Development",
    desc: "Building technology-driven, tailor-made software adopting agile SDLC processes.",
    icon: <SettingsIcon sx={{ fontSize: 40 }} />,
    href: "/contact",
  },
  {
    title: "Mobile App Development",
    desc: "Deploying powerful apps that captivate your mobile-savvy audience and boost business.",
    icon: <PhoneIphoneIcon sx={{ fontSize: 40 }} />,
    href: "/contact",
  },
  {
    title: "Digital Marketing",
    desc: "Executing impactful strategies to elevate your brand's reach and popularity.",
    icon: <CampaignIcon sx={{ fontSize: 40 }} />,
    href: "/contact",
  },
  {
    title: "Web Hosting & Maintenance",
    desc: "Providing reliable hosting & proactive maintenance for uninterrupted online presence.",
    icon: <CloudIcon sx={{ fontSize: 40 }} />,
    href: "/contact",
  },
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
        backgroundImage: "url('/sec1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: {xs: "scroll", md: "fixed"},
      }}
    >
      {/* Overlay for readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      />

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
                  <Link href={service.href}  >
                    <Button
                      component="a"
                      className="service-link"
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
                        "&:hover": {
                          background: "#00f91d",
                          color: "black",
                          borderColor: "#00f91d",
                          "& .MuiSvgIcon-root": {
                            transform: "translateX(4px)",
                          },
                        },
                      }}
                    >
                      Explore Service < ArrowForwardIcon sx={{ ml: 0.5 }} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
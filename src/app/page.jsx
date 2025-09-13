"use client";
import React from "react";
import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
  import ServicesSection from "@/components/OurServices.jsx";
  import TestimonialSlider from "@/components/TestimonialSlider.jsx";
export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
 
  return (
    <>
    <Box
      sx={{
        minHeight: "90vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ml: { xs: 0, md: 0 },
        mt: { xs: 7 },
      }}
    >
      {/* Bold Circle Background Behind Welcome Section */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "-120px", md: "120px",sm:"-13%" },
          left: { xs: "14%", md: "3%",sm:"25%" },
          transform: { xs: "translateX(-50%)", md: "none" },
          width: { xs: "280px", sm: "300px", md: "200px" },
          height: { xs: "280px", sm: "300px", md: "200px" },
          borderRadius: "50%",
          background: "linear-gradient(135deg, #f59a1b 0%, #50fc3d 100%)",
          opacity: 0.4,
          zIndex: 0,
        }}
      />
      {/* Animated Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5 }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          // background:"#edf1e8",
          // background: "linear-gradient(135deg, rgba(251,146,60,0.2) 0%, rgba(239,68,68,0.2) 50%, rgba(250,204,21,0.2) 100%)",
          filter: "blur(60px)",
        }}
      />
     
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ width: "100%", zIndex: 1 }}
      >
        <Box
          sx={{
            maxWidth: 1400,
            width: "100%",
            margin: "0 auto",
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 0, md: 8 },
          }}
        >
          {/* Left Content */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              gap: 1,
              pt: { xs: 2, md: 0 },
              ml:{ xs: 0, md:7 },
               mt:{ xs: 1, md: 0 }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
             
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "2rem", sm: "2rem", md: "2.5rem" },
                  lineHeight: 1.6,
                  letterSpacing: "-1.5px",
                 
                }}
              >
                <Box    component="span"
                  sx={{
                    // background: "linear-gradient(90deg, #f97316, #ef4444, #facc15)",
                    // WebkitBackgroundClip: "text",
                    // WebkitTextFillColor: "transparent",
                    display: "block",
               
                  }}>
                WELCOME !!
                </Box>
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(90deg, #f97316, #ef4444, #facc15)",
                    WebkitBackgroundClip: "text",
                    // WebkitTextFillColor: "transparent",
                    display: "block",
               
                  }}
                >
                  <Box component="span" sx={{ color: "#ff9800", display: "inline" }}>C</Box> H O L <Box component="span" sx={{ color: "#74ed3f", display: "inline" }}>A</Box> BUSINESS AUTOMATION
                </Box>
              </Typography>
            </motion.div>
 
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            >
              <Typography
                sx={{
                  mt: {xs:0,md:3},
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                  color: "text.secondary",
                  fontWeight: 500,
                  lineHeight: 1.6,
                  maxWidth: "90%",
                  mx: { xs: "auto", md: 0 },
                }}
              >
                We craft{" "}
                <Box component="span" sx={{ fontWeight: "bold", color: "#ef4444" }}>
                  cutting-edge
                </Box>{" "}
                web and mobile applications that empower businesses to scale and thrive in the digital era.
              </Typography>
            </motion.div>
 
            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  justifyContent: { xs: "center", md: "flex-start" },
                  mt: 2,
                }}
              >
                <Button
                  component={motion.button}
                  whileHover={{
                    scale: 1.05,
                    background: "linear-gradient(90deg, #facc15, #fb923c, #ef4444)",
                    boxShadow: "0px 8px 20px rgba(251,146,60,0.35)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    px: 4,
                    py: 1.2,
                    fontWeight: 600,
                    borderRadius: "50px",
                    background: "linear-gradient(90deg, #fb923c, #ef4444, #facc15)",
                    color: "white",
                    boxShadow: "0px 5px 15px rgba(251,146,60,0.3)",
                    textTransform: "none",
                    fontSize: "1rem",
                    transition: "all 0.3s",
                  }}
                >
                  🚀 Get Started
                </Button>
 
                <Button
                  component={motion.button}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#fff3e0",
                    boxShadow: "0px 8px 20px rgba(239,68,68,0.15)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    px: 4,
                    py: 1.2,
                    fontWeight: 600,
                    borderRadius: "50px",
                    border: "2px solid #ef4444",
                    color: "#ef4444",
                    textTransform: "none",
                    fontSize: "1rem",
                    background: "rgba(255,255,255,0.9)",
                    transition: "all 0.3s",
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </motion.div>
          </Box>
         
          {/* Right Image with Animated Background */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
              position: "relative",
              minHeight: { xs: "300px", md: "600px" },
            }}
          >
            {/* Animated Circular Background */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                position: "absolute",
                top: "0%",
                left: "10%",
                right:"30%",
                transform: "translate(-50%, -50%)",
                width: "1000px",
                height: "1000px",
                borderRadius: "50%",
                background: " linear-gradient(0deg,rgba(245, 154, 27, 1) 16%, rgba(80, 252, 61, 1) 100%)",
                zIndex: 0,
              }}
            />
           
            {/* Pulsing Orb Animation */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                position: "absolute",
                top: "8%",
                left: "5%",
                transform: "translate(-50%, -50%)",
                width: "1000px",
                height: "1000px",
                borderRadius: "50%",
                background: "linear-gradient(0deg,rgba(255, 153, 10, 1) 0%, rgba(252, 203, 146, 1) 100%)",
                zIndex: 0,
              }}
            />
           
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{
                position: "relative",
                zIndex: 2,
                width: "600px",
                // maxWidth: "1000px",
                height: "auto",
              }}
            >
              <Image
                src="/home.png"
                alt="Home Banner"
                width={800}
                height={650}
                style={{
                  width:600,
                  borderRadius: "24px",
                }}
                priority
              />
            </motion.div>
           
            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                position: "absolute",
                top: "20%",
                right: "10%",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                // background: "linear-gradient(0deg,rgba(255, 153, 10, 1) 0%, rgba(252, 203, 146, 1) 100%)",
                filter: "blur(10px)",
                zIndex: 1,
              }}
            />
           
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              style={{
                position: "absolute",
                bottom: "25%",
                left: "15%",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(250,204,21,0.2) 0%, rgba(251,146,60,0.2) 100%)",
                filter: "blur(8px)",
                zIndex: 1,
              }}
            />
          </Box>
        </Box>
      </motion.div>
    </Box>
    <ServicesSection/>
<TestimonialSlider/>
    </>
  );
}
 
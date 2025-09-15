"use client";
import React from "react";
import {
  Box,
  Card,
  Typography,
  Grid,
  alpha,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

// Wrap MUI Card as motion.div
const MotionCard = motion(Card);

const FeatureCards = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const features = [
    {
      title: "Expert Team",
      description:
        "Our experts bring innovation, experience, and creativity, ensuring every project achieves perfection.",
      img: "/OND5.jpg",
      color: "#9966CC",
    },
    {
      title: "Proven Results",
      description:
        "Our track record speaks for itself — measurable results, real impact, and trusted by industry leaders.",
      img: "/OND6.jpg",
      color: "#6BCB77",
    },
    
    {
      title: "Quality Services",
      description:
        "Excellence drives every service. We deliver top-tier solutions that consistently exceed expectations.",
      img: "/OND2.jpg",
      color: "#4ECDC4",
    },
    
    {
      title: "Customer Satisfaction",
      description:
        "Your success fuels ours. We go the extra mile to achieve complete satisfaction in every interaction.",
      img: "/OND4.jpg",
      color: "#F9A826",
    },

    {
      title: "On Time Delivery",
      description:
        "Deadlines matter. From projects to products, we ensure timely delivery with precision and reliability.",
      img: "/OND.jpg",
      color: "#FF6B6B",
    },
    
{
      title: "Customer Support",
      description:
        "Always here for you. Our dedicated team provides seamless support, 24/7, every single day.",
      img: "/OND3.jpg",
      color: "#45B7D1",
    },    
  ];

  // Card animation variants
  const cardVariants = {
    offscreen: { opacity: 0, y: 50, scale: 0.9 },
 onscreen: (i) => ({
  opacity: 1,
  y: 0,
  transition: {
    delay: i * 0.2,
    duration: 0.8,
    ease: "easeOut",
  },
}),

    hover: {
      scale: 1.03,
      boxShadow: "0 20px 40px rgba(255, 255, 255, 0.15)",
    },
  };

  return (
    <Box sx={{ px: 2, py: 10 }} bgcolor={'white'} >
      {/* HEADING (unchanged by request) */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
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
            Why Choose Us
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
            sx={{ fontWeight: "bold", color: "black", mb: 2 }}
          >
            Why Clients Trust Us
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
            color: "rgba(0, 0, 0, 0.85)",
            maxWidth: 650,
            mx: "auto",
            mt: 2,
            lineHeight: 1.6,
          }}
        >
          We deliver exceptional value through our core principles that guide
          everything we do.
        </Typography>
      </Box>

      {/* FEATURE CARDS GRID */}
      <Grid
        container
        // spacing={3}
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 1,
        }}
      >
        {features.map((feature, i) => (
          <MotionCard
            key={i}
            custom={i}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover="hover"
            sx={{
              p: 3,
              borderRadius: 4,
              background: "rgba(255, 255, 255, 1)",
              border: "1px solid rgba(0,0,0,0.05)",
              backdropFilter: "blur(6px)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              transition: "all 0.4s ease",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              position: "relative",
              overflow: "hidden",
            }}
          >
             {/* TITLE */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#FF6B6B",
                mb: 1,
              }}
            >
              {feature.title}
              <Box
                          sx={{
                            width:100, 
                            height: 4,
                            background: "linear-gradient(90deg, #ff4a22ff, transparent)",
                            borderRadius: 2,
                            // mx: "auto",
                            mb: 3,
                          }}
                        />
            </Typography>
            {/* IMAGE */}
            <Box
              component="img"
              src={feature.img}
              alt={feature.title}
              sx={{
                width: "100%",
                height: 180,
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: 3,
                mb: 2,
              }}
            />

           

            {/* DESCRIPTION */}
            <Typography
              variant="body2"
              sx={{
                color: "rgba(26, 26, 26, 0.88)",
                lineHeight: 1.7,
                flexGrow: 1,
              }}
            >
              {feature.description}
            </Typography>           
          </MotionCard>
        ))}
      </Grid>
    </Box>
  );
};

export default FeatureCards;

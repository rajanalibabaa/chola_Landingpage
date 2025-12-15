"use client";

import Image from "next/image";
import {
  Box,
  Typography,
  Button,
  Container,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const projects = [
  {
    title: "Thirumal Thirumagal Vasantha Mahal A/C",
    image: "/ThirumalThirumahal.png",
    live: "https://www.thirumalthirumagal.com/",
  },
  {
    title: "Interior and Exterior Painters",
    image: "/InteriorandExterior.png",
    live: "https://interiorandexteriorpainters.com",
  },
  {
    title: "Eagle Ceramics",
    image: "/EagleCeramics.png",
    live: "https://eagleceramic.com/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const OurProjects = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <Box 
      sx={{ 
        py: { xs: 6, md: 8, lg: 12 }, 
        backgroundColor: "#fff",
        overflow: "hidden"
      }}
    >
      <Container maxWidth="lg">
        {/* ===== Heading ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Box textAlign="center" mb={{ xs: 6, md: 8, lg: 9 }}>
            <Typography
              sx={{
                color: "#00e676",
                fontWeight: 700,
                letterSpacing: { xs: "1px", sm: "2px", md: "3px" },
                fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                mb: { xs: 0.5, md: 1 },
              }}
            >
              OUR WORK
            </Typography>

            <Typography
              variant="h3"
              sx={{ 
                fontWeight: 800, 
                color: "#000", 
                mb: { xs: 1.5, md: 2 },
                fontSize: { 
                  xs: "1.75rem", 
                  sm: "2rem", 
                  md: "2.5rem", 
                  lg: "3rem" 
                },
                lineHeight: { xs: 1.2, md: 1.3 }
              }}
            >
              Projects That Define Our Expertise
            </Typography>

            <Box
              sx={{
                width: 70,
                height: 4,
                backgroundColor: "#00e676",
                mx: "auto",
                mb: { xs: 2, md: 3 },
                borderRadius: 2,
              }}
            />

            <Typography 
              sx={{ 
                maxWidth: 720, 
                mx: "auto", 
                color: "#555",
                fontSize: { xs: "0.95rem", md: "1rem" },
                px: { xs: 2, sm: 0 },
                lineHeight: { xs: 1.6, md: 1.7 }
              }}
            >
              We deliver high-impact digital solutions that combine innovation,
              performance, and scalability.
            </Typography>
          </Box>
        </motion.div>

      

        {/* ===== Projects Container ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Desktop Grid Layout */}
          <Box
            sx={{
              display: { xs: 'none', lg: 'grid' },
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 4,
            }}
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={cardVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </Box>

          {/* Mobile/Tablet Horizontal Scroll Layout */}
          <Box
            ref={scrollContainerRef}
            sx={{
              display: { xs: 'flex', lg: 'none' },
              overflowX: 'auto',
              overflowY: 'hidden',
              gap: 3,
              pb: 3,
              px: { xs: 2, sm: 3, md: 4 },
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                style={{ 
                  minWidth: '85vw',
                  maxWidth: '85vw',
                  scrollSnapAlign: 'start',
                }}
              >
                <ProjectCard project={project} isMobile={true} />
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Scroll Indicator for Mobile/Tablet */}
        {/* <Box 
          sx={{ 
            display: { xs: 'flex', lg: 'none' }, 
            justifyContent: 'center', 
            mt: 2,
            gap: 1
          }}
        >
          {projects.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#ddd',
              }}
            />
          ))}
        </Box> */}
      </Container>
    </Box>
  );
};

// Separate ProjectCard component for reusability - JavaScript version
const ProjectCard = ({ project, isMobile = false }) => {
  return (
    <Box
      sx={{
        borderRadius: { xs: 3, md: 4 },
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        transition: "all 0.4s ease",
        "&:hover": {
          transform: { xs: "translateY(-8px)", md: "translateY(-12px)" },
          boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
        },
        minHeight: isMobile ? 350 : 'auto',
      }}
    >
      {/* Image */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 200, sm: 220, md: 240, lg: 260 },
          overflow: "hidden",
          backgroundColor: "#f9f9f9",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", height: "100%" }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ 
              objectFit: "contain",
              padding: "20px"
            }}
            sizes={isMobile ? "85vw" : "(max-width: 1200px) 33vw, 400px"}
          />
        </motion.div>
      </Box>

      {/* Content */}
      <Box
        sx={{
          p: { xs: 2.5, md: 3 },
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: { xs: 0, md: 2 },
            textAlign: "center",
            fontSize: { 
              xs: "1rem", 
              sm: "1.05rem", 
              md: "1.125rem" 
            },
            lineHeight: 1.4
          }}
        >
          {project.title}
        </Typography>

        {/* Fixed Button */}
        <Button
          component="a"
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          sx={{
            mt: "auto",
            backgroundColor: "#00e676",
            color: "#000",
            fontWeight: 800,
            py: { xs: 1, md: 1.2 },
            px: { xs: 2, md: 3 },
            borderRadius: 3,
            letterSpacing: "0.5px",
            fontSize: { xs: "0.85rem", md: "0.9rem" },
            minWidth: "auto",
            width: "100%",
            "&:hover": {
              backgroundColor: "#00c853",
              transform: "scale(1.03)",
            },
          }}
        >
          Live Demo
        </Button>
      </Box>
    </Box>
  );
};

export default OurProjects;
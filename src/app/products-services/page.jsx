"use client";
import React, { useState, useEffect, useMemo } from 'react';
import   useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme,alpha } from "@mui/material/styles";
import   Container from "@mui/material/Container";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import  Typography from "@mui/material/Typography";
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: "Business Automation Software",
    description: "Custom solutions to automate business workflows, reduce manual work, and improve efficiency.",
    image: "/cholabiz_business-automation-service.jpg",
    color: "#1976d2"
  },
  {
    id: 2,
    title: "CRM Software",
    description: "Advanced Customer Relationship Management system tailored for industries like real estate, retail, franchise, and service sectors.",
    image: "/cholabiz_crmsoftware.jpg",
    color: "#2e7d32"
  },
  {
    id: 3,
    title: "Franchise Management System",
    description: "Comprehensive platform for franchise lead management, communication, sales tracking, and reporting.",
    image: "/cholabiz_managementimage.jpeg",
    color: "#ed6c02"
  },
  {
    id: 4,
    title: "WhatsApp Business Automation",
    description: "Integration of WhatsApp APIs for lead nurturing, automated notifications, and customer support.",
    image: "/cholabiz_whatsappbusiness.png",
    color: "#25D366"
  },
  {
    id: 5,
    title: "Billing & Invoicing System",
    description: "Smart GST-compliant billing and accounting software for small to mid-sized businesses.",
    image: "/cholabiz_billinginvoice.jpg",
    color: "#9c27b0"
  },
  {
    id: 6,
    title: "Website & App Development",
    description: "Custom website and mobile app development using MERN, React, Laravel, and other modern frameworks.",
    image: "/cholabiz_website.jpg",
    color: "#d32f2f"
  },
  {
    id: 7,
    title: "Digital Marketing & Automation Tools",
    description: "Lead generation, campaign management, and analytics automation tools.",
    image: "/cholabiz_digitalmarketing.jpeg",
    color: "#0288d1"
  },
];

// Enhanced animation variants for scroll effects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 80,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const imageVariants = {
  hidden: { 
    opacity: 0, 
    x: -150,
    rotateY: -15
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    x: 150,
    rotateY: 15
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

// Enhanced scroll progress with gradient animation
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        zIndex: 1000,
      }}
    >
      <motion.div
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, #1976d2, #0288d1, #25D366, #ed6c02)',
          backgroundSize: '400% 100%',
width: `${scrollProgress}%`,      
  }}
        animate={{
          backgroundPosition: ['0%', '100%']
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
    </Box>
  );
};

// Parallax background elements
const FloatingBackground = () => {
  return (
    <>
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #1976d2, transparent)',
          opacity: 0.1,
          filter: 'blur(20px)',
        }}
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '8%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #2e7d32, transparent)',
          opacity: 0.08,
          filter: 'blur(25px)',
        }}
      />
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          top: '60%',
          left: '80%',
          width: '80px',
          height: '80px',
          borderRadius: '30%',
          background: 'linear-gradient(45deg, #ed6c02, transparent)',
          opacity: 0.06,
          filter: 'blur(15px)',
        }}
      />
    </>
  );
};

const ProductServicesPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [scrollY, setScrollY] = useState(0);

  // Scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ScrollProgress />
      <Box sx={{ 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        minHeight: '100vh',
        py: isSmallMobile ? 3 : 6,
        px: isSmallMobile ? 1 : 0,
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* Animated Background Elements */}
        <FloatingBackground />

        {/* Parallax Header Background */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '60vh',
            background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.03) 0%, rgba(2, 136, 209, 0.02) 100%)',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        <Container maxWidth="lg" sx={{ px: isSmallMobile ? 2 : 3, position: 'relative', zIndex: 1 }}>
          {/* Header Section with enhanced scroll effects */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <Box sx={{ 
              textAlign: 'center', 
              mb: isMobile ? 4 : 6,
              mt: isSmallMobile ? 1 : 2
            }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Typography
                  variant={isSmallMobile ? "h4" : isMobile ? "h3" : "h3"}
                  component="h1"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ 
                  backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: '#ff9800',
                    backgroundSize: '200% auto',
                    mb: 2,
                    mt: 5,
                    fontSize: {
                      xs: '1.75rem',
                      sm: '2.5rem',
                      md: '3rem'
                    }
                  }}
                >
                  Products & Services
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Typography
                  variant={isSmallMobile ? "body1" : "h6"}
                  component="h2"
                  color="text.secondary"
                  fontWeight="medium"
                  sx={{ 
                    mb: 2,
                    fontSize: {
                      xs: '0.9rem',
                      sm: '1.1rem',
                      md: '1.25rem'
                    },
                    lineHeight: 1.5
                  }}
                >
                  At Chola Business Automation, we provide a full range of business software solutions designed to automate and scale your business.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Typography sx={{
                  color: '#37d620', 
                  fontWeight: 'bold', 
                  fontSize: {
                    xs: '1rem',
                    sm: '1.1rem',
                    md: '1.5rem'
                  }
                }}>
                  Our Key Products & Services
                </Typography>
              </motion.div>
            </Box>
          </motion.div>

          {/* Services Grid with enhanced scroll animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: isMobile ? 3 : 4
            }}>
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileInView="visible"
                  initial="hidden"
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <ServiceCard 
                    service={service} 
                    isEven={index % 2 === 0} 
                    isMobile={isMobile}
                    isSmallMobile={isSmallMobile}
                    index={index}
                    scrollY={scrollY}
                  />
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

const ServiceCard = ({ service, isEven, isMobile, isSmallMobile, index, scrollY }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Parallax effect for images based on scroll position
  const imageParallax = scrollY * 0.1;

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { 
            xs: 'column', 
            md: isEven ? 'row' : 'row-reverse' 
          },
          alignItems: 'center',
          gap: isSmallMobile ? 2 : 3,
        }}
      >
        {/* Image Section with parallax and 3D effects */}
        <motion.div
          variants={imageVariants}
          style={{
            flex: isMobile ? 'none' : 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: isMobile ? (isSmallMobile ? 200 : 250) : 350,
            width: isMobile ? '100%' : 'auto',
            transform: `translateY(${imageParallax}px)`,
          }}
          whileHover={{
            scale: 1.05,
            rotateY: isHovered ? 5 : 0,
            transition: { duration: 0.4 }
          }}
        >
          <Box
            component="img"
            
            src={service.image}
            alt={service.title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            sx={{
              width: {
                xs: isSmallMobile ? '200px' : '250px',
                sm: '300px',
                md: '350px',
                lg: '400px'
              },
              height: {
                xs: isSmallMobile ? '200px' : '250px',
                sm: '300px',
                md: '350px',
                lg: '400px'
              },
              objectFit: 'contain',
              opacity: imageLoaded ? 1 : 0.7,
              transition: 'opacity 0.3s ease',
              transformStyle: 'preserve-3d',
            }}
          />
        </motion.div>

        {/* Content Section with enhanced animations */}
        <motion.div
          variants={cardVariants}
          style={{
            flex: isMobile ? 'none' : 1,
            width: isMobile ? '100%' : 'auto',
            transform: `translateY(${-imageParallax * 0.5}px)`,
          }}    
          whileHover={{
            y: -12,
            transition: { duration: 0.4 }
          }}
        >
          <Card 
            sx={{ 
              background: `linear-gradient(135deg, ${alpha(service.color, 0.08)} 0%, ${alpha(service.color, 0.03)} 100%)`,
              border: `1px solid ${alpha(service.color, 0.2)}`,
              borderRadius: {
                xs: 2,
                md: 3
              },
              overflow: 'visible',
              position: 'relative',
              transformStyle: 'preserve-3d',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: isSmallMobile ? '3px' : '4px',
                background: `linear-gradient(90deg, ${service.color}, ${alpha(service.color, 0.7)})`,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '10%',
                right: '10%',
                height: '20px',
                background: `radial-gradient(ellipse, ${alpha(service.color, 0.3)} 0%, transparent 70%)`,
                filter: 'blur(10px)',
                zIndex: -1,
              }
            }}
          >
            <CardContent sx={{ 
              p: {
                xs: isSmallMobile ? 2 : 3,
                md: 4
              }, 
              textAlign: { 
                xs: 'center', 
                md: 'left' 
              } 
            }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Typography
                  variant={isSmallMobile ? "h5" : "h4"}
                  component="h3"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ 
                    mb: {
                      xs: 2,
                      md: 2
                    },
                    background: `linear-gradient(45deg, ${service.color}, ${alpha(service.color, 0.8)})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontSize: {
                      xs: '1.5rem',
                      sm: '1.75rem',
                      md: '2.125rem'
                    }
                  }}
                >
                  {service.title}
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Typography
                  variant={isSmallMobile ? "body2" : "h6"}
                  component="p"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.6,
                    fontWeight: 400,
                    fontSize: {
                      xs: '0.875rem',
                      sm: '1rem',
                      md: '1.1rem'
                    },
                  }}
                >
                  {service.description}
                </Typography>
              </motion.div>

              {/* Animated decorative element */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: isSmallMobile ? '40px' : '50px' }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                whileHover={{ width: isSmallMobile ? '60px' : '80px' }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: {
                      xs: '3px',
                      md: '4px'
                    },
                    background: `linear-gradient(90deg, ${service.color}, ${alpha(service.color, 0.5)})`,
                    borderRadius: 2,
                    mt: {
                      xs: 2,
                      md: 3
                    },
                    mx: { 
                      xs: 'auto', 
                      md: '0' 
                    },
                  }}
                />
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ProductServicesPage;
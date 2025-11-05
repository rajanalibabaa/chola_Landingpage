"use client";
import React, { useState, useEffect, useMemo } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  alpha,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';

// Optimized services data with smaller image sizes in mind
const services = [
  {
    id: 1,
    title: "Business Automation Software",
    description: "Custom solutions to automate business workflows, reduce manual work, and improve efficiency.",
    image: "/business-automation-service.jpg",
    color: "#1976d2"
  },
  {
    id: 2,
    title: "CRM Software",
    description: "Advanced Customer Relationship Management system tailored for industries like real estate, retail, franchise, and service sectors.",
    image: "/crmsoftware.jpg",
    color: "#2e7d32"
  },
  {
    id: 3,
    title: "Franchise Management System",
    description: "Comprehensive platform for franchise lead management, communication, sales tracking, and reporting.",
    image: "/FRANCHISE-MANAGEMENT.png",
    color: "#ed6c02"
  },
  {
    id: 4,
    title: "WhatsApp Business Automation",
    description: "Integration of WhatsApp APIs for lead nurturing, automated notifications, and customer support.",
    image: "/whatsappbusiness.png",
    color: "#25D366"
  },
  {
    id: 5,
    title: "Billing & Invoicing System",
    description: "Smart GST-compliant billing and accounting software for small to mid-sized businesses.",
    image: "/billinginvoice.jpg",
    color: "#9c27b0"
  },
  {
    id: 6,
    title: "Website & App Development",
    description: "Custom website and mobile app development using MERN, React, Laravel, and other modern frameworks.",
    image: "/webdev_1.jpg",
    color: "#d32f2f"
  },
  {
    id: 7,
    title: "Digital Marketing & Automation Tools",
    description: "Lead generation, campaign management, and analytics automation tools.",
    image: "/digitalmarketing_1.jpeg",
    color: "#0288d1"
  },
];

// Performance-optimized animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    x: -50 
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Optimized scroll progress with throttling
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(100, (scrollTop / docHeight) * 100);
      setScrollProgress(progress);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        backgroundColor: alpha('#1976d2', 0.1),
        zIndex: 1000,
      }}
    >
      <Box
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, #1976d2, #0288d1)',
          width: `${scrollProgress}%`,
          transition: 'width 0.1s ease',
        }}
      />
    </Box>
  );
};

const ProductServicesPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Optimized mouse effect with throttling
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;
    
    const handleMouseMove = (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setMousePosition({
            x: (e.clientX / window.innerWidth) * 10,
            y: (e.clientY / window.innerHeight) * 10
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    // Only add mousemove on non-mobile devices
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isMobile]);

  // Memoize services to prevent unnecessary re-renders
  const memoizedServices = useMemo(() => services, []);

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
        {/* Performance-optimized background elements - only on desktop */}
        {!isMobile && (
          <>
            <motion.div
              animate={{
                x: mousePosition.x,
                y: mousePosition.y
              }}
              transition={{ type: "tween", duration: 0.5 }}
              style={{
                position: 'absolute',
                top: '10%',
                left: '10%',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #1976d2, transparent)',
                opacity: 0.05,
                filter: 'blur(20px)',
                willChange: 'transform',
              }}
            />
            <motion.div
              animate={{
                x: -mousePosition.x,
                y: -mousePosition.y
              }}
              transition={{ type: "tween", duration: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '10%',
                right: '10%',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #2e7d32, transparent)',
                opacity: 0.05,
                filter: 'blur(20px)',
                willChange: 'transform',
              }}
            />
          </>
        )}

        <Container maxWidth="lg" sx={{ px: isSmallMobile ? 2 : 3, position: 'relative', zIndex: 1 }}>
          {/* Optimized Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut"
            }}
          >
            <Box sx={{ 
              textAlign: 'center', 
              mb: isMobile ? 4 : 6,
              mt: isSmallMobile ? 1 : 2
            }}>
              <motion.div
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant={isSmallMobile ? "h4" : isMobile ? "h3" : "h3"}
                  component="h1"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ 
                    background: 'linear-gradient(45deg, #1976d2, #0288d1)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    mb: 2,
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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
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
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
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

          {/* Optimized Services Grid */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: isMobile ? 3 : 4
          }}>
            {memoizedServices.map((service, index) => (
              <OptimizedServiceCard 
                key={service.id} 
                service={service} 
                isEven={index % 2 === 0} 
                isMobile={isMobile}
                isSmallMobile={isSmallMobile}
                index={index}
              />
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

// Performance-optimized Service Card with React.memo
const OptimizedServiceCard = React.memo(({ service, isEven, isMobile, isSmallMobile, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const theme = useTheme();

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      variants={itemVariants}
      transition={{ delay: index * 0.05 }}
      whileHover={{ 
        scale: isMobile ? 1 : 1.01,
        transition: { duration: 0.2 }
      }}
      style={{
        willChange: 'transform',
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
        {/* Optimized Image Section */}
        <motion.div
          variants={imageVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          style={{
            flex: isMobile ? 'none' : 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: isMobile ? (isSmallMobile ? 180 : 220) : 320,
            width: isMobile ? '100%' : 'auto',
          }}
        >
          <motion.div
            whileHover={{ 
              scale: isMobile ? 1.02 : 1.05,
              transition: { duration: 0.2 }
            }}
            style={{
              willChange: 'transform',
            }}
          >
            <Box
              component="img"
              src={service.image}
              alt={service.title}
              loading="lazy"
              onLoad={handleImageLoad}
              sx={{
                width: {
                  xs: isSmallMobile ? '180px' : '220px',
                  sm: '280px',
                  md: '320px',
                  lg: '360px'
                },
                height: {
                  xs: isSmallMobile ? '180px' : '220px',
                  sm: '280px',
                  md: '320px',
                  lg: '360px'
                },
                objectFit: 'contain',
                opacity: imageLoaded ? 0.9 : 0,
                transition: 'opacity 0.3s ease, filter 0.2s ease',
                filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.1))',
                '&:hover': {
                  opacity: 1,
                  filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))',
                }
              }}
            />
          </motion.div>
        </motion.div>

        {/* Optimized Content Section */}
        <motion.div
          variants={cardVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          style={{
            flex: isMobile ? 'none' : 1,
            width: isMobile ? '100%' : 'auto',
          }}
        >
          <motion.div
            whileHover={{ 
              y: isMobile ? -2 : -4,
              transition: { duration: 0.2 }
            }}
          >
            <Card 
              sx={{ 
                background: `linear-gradient(135deg, ${alpha(service.color, 0.06)} 0%, ${alpha(service.color, 0.02)} 100%)`,
                border: `1px solid ${alpha(service.color, 0.15)}`,
                borderRadius: {
                  xs: 2,
                  md: 3
                },
                overflow: 'visible',
                position: 'relative',
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
              }}
            >
              <CardContent sx={{ 
                p: {
                  xs: isSmallMobile ? 2.5 : 3,
                  md: 4
                }, 
                textAlign: { 
                  xs: 'center', 
                  md: 'left' 
                } 
              }}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.15 }}
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
                  transition={{ delay: 0.2, duration: 0.4 }}
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

                {/* Optimized decorative element */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: isSmallMobile ? '40px' : '50px' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Box
                    sx={{
                      width: {
                        xs: '40px',
                        md: '50px'
                      },
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
        </motion.div>
      </Box>
    </motion.div>
  );
});

OptimizedServiceCard.displayName = 'OptimizedServiceCard';

export default ProductServicesPage;
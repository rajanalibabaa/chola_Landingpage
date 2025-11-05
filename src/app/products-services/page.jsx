"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { Container, Typography, Card, CardContent, Box, alpha, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

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

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4 } 
  }
};

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
        height: '3px',
        backgroundColor: alpha('#1976d2', 0.2),
        zIndex: 1000,
      }}
    >
      <motion.div
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, #1976d2, #0288d1)',
          width: `${scrollProgress}%`,
        }}
        transition={{ duration: 0.1 }}
      />
    </Box>
  );
};

const ProductServicesPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

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

        <Container maxWidth="lg" sx={{ px: isSmallMobile ? 2 : 3, position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ 
              duration: 0.7,
              ease: "easeOut"
            }}
          >
            <Box sx={{ 
              textAlign: 'center', 
              mb: isMobile ? 4 : 6,
              mt: isSmallMobile ? 1 : 2
            }}>
              <motion.div
                initial={{ scale: 0.9 }}
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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
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
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
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

          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: isMobile ? 3 : 4
          }}>
            {services.map((service, index) => (
              <ServiceCard 
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

const ServiceCard = ({ service, isEven, isMobile, isSmallMobile, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeIn}
      transition={{ delay: index * 0.1 }}
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
        {/* Image Section - Clean without any effects */}
        <Box
          sx={{
            flex: isMobile ? 'none' : 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: isMobile ? (isSmallMobile ? 200 : 250) : 350,
            width: isMobile ? '100%' : 'auto',
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
              // Clean - no shadow, no border, no effects
            }}
          />
        </Box>

        {/* Content Section */}
        <Box
          sx={{
            flex: isMobile ? 'none' : 1,
            width: isMobile ? '100%' : 'auto',
          }}
        >
          <motion.div
            whileHover={{ 
              y: -4,
              transition: { duration: 0.3 }
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
                  xs: isSmallMobile ? 2 : 3,
                  md: 4
                }, 
                textAlign: { 
                  xs: 'center', 
                  md: 'left' 
                } 
              }}>
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
              </CardContent>
            </Card>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ProductServicesPage;
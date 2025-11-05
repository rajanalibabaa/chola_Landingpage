"use client";
import React from 'react';
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
    image: "/CRM-software.jpg",
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
    image: "/whatsapp_business.png",
    color: "#25D366"
  },
  {
    id: 5,
    title: "Billing & Invoicing System",
    description: "Smart GST-compliant billing and accounting software for small to mid-sized businesses.",
    image: "/billing_system.jpg",
    color: "#9c27b0"
  },
  {
    id: 6,
    title: "Website & App Development",
    description: "Custom website and mobile app development using MERN, React, Laravel, and other modern frameworks.",
    image: "/web-and-app-development-services.webp",
    color: "#d32f2f"
  },
  {
    id: 7,
    title: "Digital Marketing & Automation Tools",
    description: "Lead generation, campaign management, and analytics automation tools.",
    image: "/Marketing-Automation-1.jpeg",
    color: "#0288d1"
  },
];

// Animation variants
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
    y: 50 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    x: -100 
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    x: 100 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const ProductServicesPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      minHeight: '100vh',
      py: isSmallMobile ? 4 : 8,
      px: isSmallMobile ? 1 : 0,
    }}>
      <Container maxWidth="lg" sx={{ px: isSmallMobile ? 2 : 3 }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ 
            textAlign: 'center', 
            mb: isMobile ? 6 : 8,
            mt: isSmallMobile ? 1 : 3 
          }}>
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
            <Typography
              variant={isSmallMobile ? "body1" : "h6"}
              component="h2"
              color="text.secondary"
              fontWeight="medium"
              sx={{ 
                mb: 3,
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
            <Typography sx={{
              color: '#37d620', 
              fontWeight: 'bold', 
              fontSize: {
                xs: '1rem',
                sm: '1.1rem',
                md: '1.2rem'
              }
            }}>
              Our Key Products & Services
            </Typography>
          </Box>
        </motion.div>

        {/* Services Grid with Alternating Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
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
              />
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

const ServiceCard = ({ service, isEven, isMobile, isSmallMobile }) => {
  const theme = useTheme();
  
  return (
    <motion.div
      variants={itemVariants}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { 
            xs: 'column', 
            md: isEven ? 'row' : 'row-reverse' 
          },
          alignItems: 'center',
          gap: isSmallMobile ? 3 : 4,
        }}
      >
        {/* Image Section - Increased Size */}
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
            minHeight: isMobile ? (isSmallMobile ? 200 : 250) : 400,
            width: isMobile ? '100%' : 'auto'
          }}
        >
          <motion.div
            whileHover={{ 
              scale: isMobile ? 1.05 : 1.1,
              transition: { duration: 0.3 }
            }}
          >
            <Box
              component="img"
              src={service.image}
              alt={service.title}
              sx={{
                width: {
                  xs: isSmallMobile ? '180px' : '220px',
                  sm: '280px',
                  md: '320px'
                },
                height: {
                  xs: isSmallMobile ? '180px' : '220px',
                  sm: '280px',
                  md: '320px'
                },
                objectFit: 'contain',
                opacity: 0.9,
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.1))',
              }}
            />
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={cardVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          style={{
            flex: isMobile ? 'none' : 1,
            width: isMobile ? '100%' : 'auto'
          }}
        >
          <motion.div
            whileHover={{ 
              y: isMobile ? -4 : -8,
              transition: { duration: 0.4 }
            }}
          >
            <Card 
              sx={{ 
                background: `linear-gradient(135deg, ${alpha(service.color, 0.05)} 0%, ${alpha(service.color, 0.02)} 100%)`,
                border: `1px solid ${alpha(service.color, 0.2)}`,
                borderRadius: {
                  xs: 3,
                  md: 4
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
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
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
                <Typography
                  variant={isSmallMobile ? "h5" : "h4"}
                  component="h3"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ 
                    mb: {
                      xs: 2,
                      md: 3
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

                {/* Decorative Element */}
                <Box
                  sx={{
                    width: {
                      xs: '50px',
                      md: '60px'
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
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default ProductServicesPage;
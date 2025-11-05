"use client";
import React from "react";
import { Box, Typography, Divider, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Box>
      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "60vh", md: "60vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Image Container */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -2,
          }}
        >
          <Image
            src="/head1.jpg"
            alt="Chola Business Automation"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            onError={(e) => {
              console.error("Image failed to load:", e);
              e.target.style.backgroundColor = "#1e293b";
            }}
          />
        </Box>

        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(to bottom right, rgba(0,0,0,0.4), rgba(0,0,0,0.7))",
            zIndex: -1,
          }}
        />

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: "center",
            padding: "0 1rem",
            zIndex: 1,
            position: "relative",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 2,
              color: "#ffffff",
              fontSize: { xs: "2rem", md: "3rem" },
              textShadow: "0 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            About Chola Business Automation
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#f1f5f9",
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.6,
              textShadow: "0px 1px 4px rgba(0,0,0,0.3)",
            }}
          >
            Empowering businesses through automation, innovation, and
            intelligent digital transformation.
          </Typography>
        </motion.div>
      </Box>

      {/* ================= CONTENT SECTION ================= */}
      <Box
      sx={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        // py: { xs: 8, md: 12 },
        color: "#111827",
      }}
      >
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        {/* INTRO */}
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography
                variant="h4"
                sx={{ fontWeight: 700, color: "#1e293b", mb: 0 }}
              >
                Who We Are
              </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "rgba(55,65,81,0.95)", lineHeight: 1.8, mb: 2 }}
                >
                  <strong>Chola Business Automation Private Limited</strong> (CIN:
                  U72900TN2022PTCXXXXX) is a Chennai-based IT company specialising
                  in{" "}
                  <strong>
                    Business Automation, CRM Development, Franchise Management, and
                    Digital Transformation Solutions.
                  </strong>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: "rgba(55,65,81,0.95)", lineHeight: 1.8 }}
                >
                  Founded by <strong>Mr. Suresh Muthuvel</strong>, our mission is
                  to simplify complex business processes through intelligent
                  automation — enabling organisations to focus on{" "}
                  <em>growth, performance,</em> and{" "}
                  <em>customer satisfaction</em>.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

   
 


  {/* VISION & MISSION */}
<Box 
  sx={{ 
    mb: { xs: 6, md: 10 },
    backgroundColor: "rgba(241,245,249,0.5)",
    borderRadius: "16px",
    p: { xs: 3, md: 4 },
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
  }}
>
  <Grid container spacing={6} alignItems="stretch">
    {/* Vision */}
    <Grid item xs={12} md={6}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ height: "100%" }}
      >
        <Box
          sx={{
            height: "100%",
            p: 3,
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            sx={{ 
              fontWeight: 700, 
              color: "#1e293b", 
              mb: 2,
              fontSize: { xs: "1.5rem", md: "2rem" },
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <span style={{ color: "#3b82f6" }}>◆</span>
            Our Vision
          </Typography>
          <Typography
            variant="body1"
            sx={{ 
              color: "rgba(75,85,99,0.95)", 
              lineHeight: 1.7,
              fontSize: { xs: "0.9rem", md: "1rem" },
              flex: 1,
              
            }}
          >
            To be India's most trusted business automation company delivering
            innovative, cost-effective and result-oriented digital solutions.
          </Typography>
        </Box>
      </motion.div>
    </Grid>

    {/* Mission */}
    <Grid item xs={12} md={6}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        style={{ height: "100%" }}
      >
        <Box
          sx={{
            height: "100%",
            p: 3,
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            sx={{ 
              fontWeight: 700, 
              color: "#1e293b", 
              mb: 2,
              fontSize: { xs: "1.5rem", md: "2rem" },
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <span style={{ color: "#10b981" }}>◆</span>
            Our Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{ 
              color: "rgba(75,85,99,0.95)", 
              lineHeight: 1.7,
              fontSize: { xs: "0.9rem", md: "1rem" },
              flex: 1,
            }}
          >
            To automate <strong>10,000+ businesses by 2030</strong> through
            tailored CRM, ERP and business software solutions that simplify
            operations and boost scalability.
          </Typography>
        </Box>
      </motion.div>
    </Grid>
  </Grid>

  {/* Core Offerings & Why Choose CholaBiz */}
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      gap: { xs: 4, md: 8 },
      mt: { xs: 6, md: 8 },
      alignItems: "stretch"
    }}
  >
    {/* Core Offerings */}
    <Box
      sx={{
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: "16px",
        p: { xs: 3, md: 4 },
        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h4"
          sx={{ 
            fontWeight: 700, 
            color: "#1e293b", 
            mb: 3,
            fontSize: { xs: "1.5rem", md: "2rem" },
            borderBottom: "2px solid #3b82f6",
            pb: 2,
            display: "inline-block"
          }}
        >
          Our Core Offerings
        </Typography>
        <Box
          component="ul"
          sx={{
            display: "grid",
            gridTemplateColumns: { 
              xs: "1fr", 
              sm: "1fr 1fr",
              md: "1fr" 
            },
            gap: 2,
            pl: 3,
            m: 0,
            listStyleType: "none",
            mb: 3
          }}
        >
          {[
            "Business Process Automation",
            "CRM Solutions",
            "Franchise Management Systems",
            "WhatsApp Automation & Marketing Tools",
            "Billing, Invoicing, and Accounting Software",
            "Customized Web & Mobile Application Development",
            "Cloud-Based Business Solutions"
          ].map((item, index) => (
            <Box 
              key={index}
              component="li" 
              sx={{ 
                color: "rgba(75,85,99,0.95)", 
                fontSize: { xs: "0.9rem", md: "1rem" },
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 1.5,
                borderRadius: "8px",
                transition: "all 0.2s",
                "&:hover": {
                  backgroundColor: "rgba(59,130,246,0.05)",
                  transform: "translateX(4px)"
                }
              }}
            >
              <span style={{ color: "#3b82f6" }}>●</span>
              {item}
            </Box>
          ))}
        </Box>
        <Typography
          variant="body1"
          sx={{ 
            color: "rgba(75,85,99,0.95)", 
            lineHeight: 1.7,
            fontSize: { xs: "0.9rem", md: "1rem" },
            p: 2,
            backgroundColor: "rgba(59,130,246,0.05)",
            borderRadius: "8px",
            borderLeft: "3px solid #3b82f6"
          }}
        >
          With a team of experienced developers and business consultants, we deliver end-to-end technology solutions that help you scale efficiently and stay ahead in your industry.
        </Typography>
      </motion.div>
    </Box>

    {/* Why Choose CholaBiz */}
    <Box
      sx={{
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: "16px",
        p: { xs: 3, md: 4 },
        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h4"
          sx={{ 
            fontWeight: 700, 
            color: "#1e293b", 
            mb: 3,
            fontSize: { xs: "1.5rem", md: "2rem" },
            borderBottom: "2px solid #10b981",
            pb: 2,
            display: "inline-block"
          }}
        >
          Why Choose CholaBiz
        </Typography>
        <Box
          component="ul"
          sx={{
            display: "grid",
            gridTemplateColumns: { 
              xs: "1fr"
            },
            gap: 2,
            pl: 0,
            m: 0,
            listStyleType: "none"
          }}
        >
          {[
            "Tailored solutions for every business type",
            "Robust and scalable technology",
            "Dedicated customer support",
            "Transparent pricing and reliable delivery"
          ].map((item, index) => (
            <Box 
              key={index}
              component="li" 
              sx={{ 
                color: "rgba(75,85,99,0.95)", 
                fontSize: { xs: "0.9rem", md: "1rem" },
                backgroundColor: "rgba(16,185,129,0.05)",
                p: 3,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: 2,
                transition: "all 0.2s",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)"
                }
              }}
            >
              <span style={{ color: "#10b981", fontSize: "1.25rem" }}>✓</span>
              {item}
            </Box>
          ))}
        </Box>
      </motion.div>
    </Box>
  </Box>
</Box>

        <Divider sx={{ borderColor: "#e5e7eb", mb: { xs: 6, md: 8 } }} />

        {/* CONTACT INFO */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 6 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, mb: 1, color: "#1e293b" }}
            >
              Registered Office
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(75,85,99,0.95)",
                lineHeight: 1.7,
                maxWidth: 700,
                mx: "auto",
              }}
            >
              Chola Business Automation Private Limited
              <br />
              76/18, B-8, 2nd Floor, 100 Feet Road,
              <br />
              Ashok Nagar, Chennai – 600083, Tamil Nadu, India.
              <br />
              Email:{" "}
              <a
                href="mailto:support@cholabiz.com"
                style={{
                  color: "#2563eb",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                support@cholabiz.com
              </a>{" "}
              | Phone:{" "}
              <span style={{ fontWeight: 600, color: "#111827" }}>
                +91 98413 23388
              </span>
            </Typography>
          </motion.div>
        </Box>
      </Container>
      </Box>
    </Box>
  );
}

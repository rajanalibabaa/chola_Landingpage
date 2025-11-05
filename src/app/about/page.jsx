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
                sx={{ fontWeight: 700, color: "#1e293b", mb: 3 }}
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

        <Divider sx={{ borderColor: "#e5e7eb", mb: { xs: 6, md: 10 } }} />

        {/* STATS */}
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
          <Grid container spacing={4} justifyContent="center">
            {[
              { icon: "👥", number: "500+", label: "Clients Served" },
              { icon: "🚀", number: "50+", label: "Projects Completed" },
              { icon: "📈", number: "99%", label: "Client Satisfaction" },
              { icon: "🛡️", number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <Grid item xs={6} sm={3} key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontSize: "2.25rem", mb: 1 }}>
                      {stat.icon}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 700, color: "#1e293b" }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#6b7280" }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ borderColor: "#e5e7eb", mb: { xs: 6, md: 10 } }} />

        {/* VISION & MISSION */}
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
  <Grid container spacing={6}>
    {/* Vision */}
    <Grid item xs={12} md={6}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: "#1e293b", mb: 1 }}
        >
          Our Vision
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "rgba(75,85,99,0.95)", lineHeight: 1.7 }}
        >
          To be India's most trusted business automation company delivering
          innovative, cost-effective and result-oriented digital solutions.
        </Typography>
      </motion.div>
    </Grid>

    {/* Mission */}
    <Grid item xs={12} md={6}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: "#1e293b", mb: 1 }}
        >
          Our Mission
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "rgba(75,85,99,0.95)", lineHeight: 1.7 }}
        >
          To automate <strong>10,000+ businesses by 2030</strong> through
          tailored CRM, ERP and business software solutions that simplify
          operations and boost scalability.
        </Typography>
      </motion.div>
    </Grid>

    
  </Grid>
  
  <Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" }, // column on mobile, row on md+
    gap: 6, // space between the two sections
    mb: { xs: 6, md: 10 },
  }}
>
  {/* Core Offerings */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
    style={{ flex: 1 }}
  >
    <Typography
      variant="h4"
      sx={{ fontWeight: 700, color: "#1e293b", mb: 2 }}
    >
      Our Core Offerings
    </Typography>
    <Box
      component="ul"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr " }, // 2 columns on desktop
        gap: 1,
        pl: 3,
        m: 0,
        listStyleType: "disc",
        mb: 2,
      }}
    >
      <li>Business Process Automation</li>
      <li>CRM Solutions</li>
      <li>Franchise Management Systems</li>
      <li>WhatsApp Automation & Marketing Tools</li>
      <li>Billing, Invoicing, and Accounting Software</li>
      <li>Customized Web & Mobile Application Development</li>
      <li>Cloud-Based Business Solutions</li>
    </Box>
    <Typography
      variant="body1"
      sx={{ color: "rgba(75,85,99,0.95)", lineHeight: 1.7 }}
    >
      With a team of experienced developers and business consultants, we deliver end-to-end technology solutions that help you scale efficiently and stay ahead in your industry.
    </Typography>
  </motion.div>

  {/* Why Choose CholaBiz */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    viewport={{ once: true }}
    style={{ flex: 1 }}
  >
    <Typography
      variant="h4"
      sx={{ fontWeight: 700, color: "#1e293b", mb: 2 }}
    >
      Why Choose CholaBiz
    </Typography>
    <Box
      component="ul"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr " }, // 2 columns on desktop
        gap: 1,
        pl: 3,
        m: 0,
        listStyleType: "disc",
      }}
    >
      <li>Tailored solutions for every business type</li>
      <li>Robust and scalable technology</li>
      <li>Dedicated customer support</li>
      <li>Transparent pricing and reliable delivery</li>
    </Box>
  </motion.div>
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

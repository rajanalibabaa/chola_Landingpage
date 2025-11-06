"use client";
import React from "react";
import Box from "@mui/material/Box";
import  Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import  List  from "@mui/material/List";

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
            src="/cholabiz_aboutpage.jpeg"
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
            color="white"
            fontWeight="bold"
            sx={{
              mb: 1,
              display: "flex",
              gap: 0.1,
              mt: { xs: 5 },
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Box component="span" sx={{ color: "#ff9800" }}>
              C
            </Box>
            HOL
            <Box component="span" sx={{ color: "#74ed3f" }}>
              A
            </Box>{" "}
            <Box
              component="span"
              display={{ xs: "none", md: "block" }}
              ml={0.5}
            >
              Business Automation PVT LTD
            </Box>
            <Typography
              display={{ xs: "block", md: "none", sm: "block" }}
              ml={0.5}
            >
              Business Automation PVT LTD
            </Typography>
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
        <Box sx={{ textAlign: "center", mt: 3 }}>
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
              About Us
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
                color: "black",
                mb: 2,
              }}
            >
              Who We Are
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
              maxWidth: 750,
              mx: "auto",
              mt: 2,
              lineHeight: 1.6,
            }}
          >
            Driving Digital Transformation Through Intelligent Automation
          </Typography>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 5 } }}>
          {/* INTRO */}
          <Box sx={{ mb: { xs: 6, md: 5 } }}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(55,65,81,0.95)",
                      lineHeight: 1.8,
                      mb: 2,
                    }}
                  >
                    CHOLA Business Automation Private Limited, operating under
                    the brand name CholaBiz, is a premier business technology
                    company focused on delivering intelligent automation
                    solutions that redefine operational excellence.
                    Headquartered in Chennai, India, we specialize in custom
                    software development, CRM implementation, WhatsApp
                    automation, franchise management systems, and integrated
                    business process automation platforms that empower
                    enterprises to scale efficiently and sustainably.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ color: "rgba(55,65,81,0.95)", lineHeight: 1.8 }}
                  >
                    At CholaBiz, we combine strategic insight, technological
                    expertise, and industry knowledge to design solutions that
                    help organizations simplify operations, enhance
                    productivity, and achieve measurable growth.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Box>

          {/* VISION & MISSION */}
          <Box
            
          >
            <Grid container alignItems="stretch">
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
                      // backgroundColor: "#fff",
                      // borderRadius: "12px",
                      // boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
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
                      To be recognized as a trusted technology partner enabling
                      businesses to achieve excellence through innovation,
                      automation, and digital intelligence.
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
                      variant="div"
                      sx={{
                        color: "rgba(75,85,99,0.95)",
                        lineHeight: 1.7,
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        flex: 1,
                      }}
                    >
                      <ul>
                        <li>
                          • To design and deliver intelligent business
                          automation systems that transform operations
                        </li>
                        <li>
                          • To develop scalable and customized solutions that
                          align with each client’s strategic goals.
                        </li>
                        <li>
                          • To build long-term partnerships based on trust,
                          value creation, and technological advancement
                        </li>
                      </ul>
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
          <Box gap={2} display={"flex"} flexDirection={"column"}>
            <Typography variant="h6" fontWeight={"bold"}>
              Our Expertise
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "rgba(55,65,81,0.95)", lineHeight: 1.8, mb: 0 }}
            >
              We provide comprehensive automation and technology solutions
              tailored to diverse industry verticals, including retail,
              franchise networks, real estate, finance, education, and
              manufacturing. Our key areas of expertise include:
            </Typography>
            <List sx={{ color: "rgba(55,65,81,0.95)", lineHeight: 1.8, mb: 2 }}>
              <li>
                {" "}
                <strong>• Custom CRM Solutions –</strong> End-to-end customer
                relationship management systems that drive sales and efficiency.
              </li>
              <li>
                {" "}
                <strong>• WhatsApp Business Automation – </strong>Seamless
                customer engagement and communication automation through
                WhatsApp APIs
              </li>
              <li>
                {" "}
                <strong>• Franchise Management Systems –</strong> Robust
                software for franchise recruitment, performance monitoring, and
                operational management
              </li>
              <li>
                {" "}
                <strong>• Business Process Automation –</strong> Streamlining
                repetitive tasks and workflows for maximum accuracy and
                productivity{" "}
              </li>
              <li>
                {" "}
                <strong>• API Integrations & System Connectivity –</strong>{" "}
                Unifying data and digital tools for real-time decision-making
                and efficiency
              </li>
            </List>
          </Box>
          <Box gap={2} display={"flex"} flexDirection={"column"}>
            <Typography variant="h6" fontWeight={"bold"}>
              Why Choose CHOLA Business Automation
            </Typography>
            <List sx={{ color: "rgba(55,65,81,0.95)", lineHeight: 1.8, mb: 2 }}>
              <li>
                <strong>• Strategic Approach:</strong> Every solution is
                designed with a deep understanding of business objectives and
                operational challenges.
              </li>
              <li>
                {" "}
                <strong>• Customized Technology:</strong> We build systems
                tailored to each client’s workflow, ensuring seamless
                integration and usability.
              </li>
              <li>
                <strong>• Experienced Team: </strong>Our specialists bring
                decades of combined experience in software development,
                automation, and enterprise solutions.
              </li>
              <li>
                <strong>• Quality and Reliability:</strong> We follow best
                practices in development, data security, and post-deployment
                support.
              </li>
              <li>
                <strong>• Scalable Solutions:</strong> Every platform we build
                is engineered to evolve with your business
              </li>
            </List>
          </Box>
          <Box gap={2} display={"flex"} flexDirection={"column"}>
            <Typography variant="h6" fontWeight={"bold"}>
              {" "}
              Our Commitment
            </Typography>
            <Typography
              sx={{ color: "rgba(55,65,81,0.95)", lineHeight: 1.8, mb: 2 }}
            >
              At CHOLA Business Automation, we believe that true innovation
              begins with understanding. We take the time to analyze, plan, and
              implement solutions that create long-term value — not just
              automation. Our commitment is to empower organizations with the
              right technology to thrive in an increasingly digital world.
            </Typography>
          </Box>
          <Divider sx={{ borderColor: "#e5e7eb", mb: { xs: 3, md: 3 } }} />

          <Grid
            display={{ xs: "block", md: "flex" }}
            flexDirection={"row"}
            spacing={2}
            gap={4}
            alignItems="center"
          >
            {/* RIGHT SIDE — CONTACT INFO */}
            <Grid item xs={12} md={6} mb={1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Box sx={{ textAlign: { xs: "center", md: "center" } }}>
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
                      mx: { xs: "auto", md: 0 },
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
                    <br />
                    Phone:{" "}
                    <span style={{ fontWeight: 600, color: "#111827" }}>
                      +91 98413 23388
                    </span>
                  </Typography>
                </Box>
              </motion.div>
            </Grid>

            {/* LEFT SIDE — GOOGLE MAP */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                <iframe
                  title="Chola Business Automation Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7774.022661115364!2d80.21255830000004!3d13.034950300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sChola%20Business%20Automation%20Private%20Limited%2076%2F18%2C%20B-8%2C%202nd%20Floor%2C%20100%20Feet%20Road%2C%20Ashok%20Nagar%2C%20Chennai%20%E2%80%93%20600083%2C%20Tamil%20Nadu%2C%20India.!5e0!3m2!1sen!2sin!4v1762411797465!5m2!1sen!2sin"
                  width="750vh"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

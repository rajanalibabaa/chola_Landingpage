"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  TextField,
  Typography,
  Paper,
  Grid,
  Snackbar,
  Alert,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { keyframes } from "@emotion/react";

// Animation for the left side
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
    attachment: null,
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, type: "success", message: "" });
  const [activeFeature, setActiveFeature] = useState(0);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    {
      title: "Fast Response",
      description: "We typically respond to all inquiries within 24 hours",
      icon: "⏱️",
    },
    {
      title: "Expert Team",
      description: "Our specialists have 10+ years of industry experience",
      icon: "👨‍💼",
    },
    {
      title: "Custom Solutions",
      description: "We tailor our services to meet your specific needs",
      icon: "🛠️",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      setSnackbar({ open: true, type: "error", message: "You must accept the Privacy Policy." });
      return;
    }

    setLoading(true);

    try {
      const formPayload = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null) formPayload.append(key, formData[key]);
      });

      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/contact", {
        method: "POST",
        body: formPayload,
      });

      if (!response.ok) {
        setSnackbar({ open: true, type: "error", message: "Failed to send message" });
        return;
      }

      const result = await response.json();
      setSnackbar({ open: true, type: "success", message: result.message });

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        agree: false,
        attachment: null,
      });
    } catch (err) {
      setSnackbar({ open: true, type: "error", message: err.message || "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = (_, reason) => {
    if (reason === "clickaway") return;
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        bgcolor: "#f8faf7", // Light green background
      }}
    >
      {/* Left Side with Animation */}
      {!isMobile && (
        <Box
          sx={{
            width: "60%",
            bgcolor: "primary.main",
            background: "linear-gradient(135deg, #ff8c00 0%, #ffa94d 100%)", // Orange gradient
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 4,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              animation: `${floatAnimation} 6s ease-in-out infinite`,
              mb: 4,
              textAlign: "center",
            }}
          >
            <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
              Let's Talk
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.9 }}>
              We'd love to hear from you
            </Typography>
          </Box>

          {/* Animated circles in background */}
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              left: "20%",
              width: 100,
              height: 100,
              borderRadius: "50%",
              bgcolor: "rgba(255,255,255,0.1)",
              animation: `${floatAnimation} 8s ease-in-out infinite`,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "15%",
              right: "20%",
              width: 150,
              height: 150,
              borderRadius: "50%",
              bgcolor: "rgba(255,255,255,0.07)",
              animation: `${floatAnimation} 9s ease-in-out infinite`,
              animationDelay: "1s",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "30%",
              right: "10%",
              width: 80,
              height: 80,
              borderRadius: "50%",
              bgcolor: "rgba(255,255,255,0.05)",
              animation: `${floatAnimation} 7s ease-in-out infinite`,
              animationDelay: "0.5s",
            }}
          />

          {/* Feature cards */}
          <Box sx={{ width: "100%", maxWidth: 500, mt: 4 }}>
            {features.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  p: 3,
                  mb: 2,
                  borderRadius: 2,
                  bgcolor: index === activeFeature ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.05)",
                  transition: "all 0.5s ease",
                  transform: index === activeFeature ? "scale(1.03)" : "scale(1)",
                  animation: index === activeFeature ? `${fadeIn} 0.5s ease` : "none",
                  display: index === activeFeature ? "block" : "none",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Typography variant="h3" sx={{ mr: 2 }}>
                    {feature.icon}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {feature.title}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ opacity: 0.9, pl: 7 }}>
                  {feature.description}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Contact information */}
          <Box sx={{ mt: 6, textAlign: "center", animation: `${fadeIn} 1s ease` }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Prefer to email directly?
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.9 }}>
              info@company.com
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.9, mt: 1 }}>
              +1 (555) 123-4567
            </Typography>
          </Box>
        </Box>
      )}

      {/* Right Side with Contact Form */}
      <Box
        sx={{
          width: isMobile ? "100%" : "55%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          mt: 7
        }}
      >
        <Paper elevation={1} sx={{ 
          p: { xs: 3, sm: 4 }, 
          maxWidth: 600, 
          width: "100%", 
          borderRadius: 3,
          bgcolor: "#ffffff"
        }}>
          <Typography variant="h4" align="center" fontWeight="bold" gutterBottom
            sx={{ color: "#0df72d" }} // Orange color for heading
          >
            Contact Us
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 3 }}>
            Fill out the form and we'll get back to you as soon as possible
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3} sx={{ display: "grid" ,gridTemplateColumns:" repeat(2, 1fr)"}}>
              <Grid item xs={12}>
                <TextField 
                  label="Your full name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  fullWidth 
                  variant="outlined" 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  label="Company" 
                  name="company" 
                  value={formData.company} 
                  onChange={handleChange} 
                  fullWidth 
                  variant="outlined" 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  label="Your email address" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  fullWidth 
                  variant="outlined" 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  label="Your phone number" 
                  name="phone" 
                  type="tel" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  fullWidth 
                  variant="outlined" 
                />
       
              </Grid>
          
               </Grid>
     <Grid container spacing={3} sx={{ display: "grid" ,gridTemplateColumns:" repeat(2, 1fr)"}}></Grid>
                          <Grid item xs={12}mt={3}>
                          <TextField 
                    label="About a project" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    fullWidth
                    multiline 
                    rows={4}
                    variant="outlined" 
                  />
                </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
          
                  <Button variant="outlined" component="label" fullWidth sx={{ 
                    py: 1.5, 
                    borderRadius: "8px",
                    color: "#ff8c00", // Orange text
                    borderColor: "#ff8c00", // Orange border
                    "&:hover": {
                      borderColor: "#e67e00", // Darker orange on hover
                      backgroundColor: "rgba(255, 140, 0, 0.04)"
                    }
                  }}>
                    {formData.attachment ? formData.attachment.name : "Attach a file"}
                    <input type="file" hidden onChange={(e) => setFormData((prev) => ({ ...prev, attachment: e.target.files[0] }))} />
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox name="agree" checked={formData.agree} onChange={handleChange} 
                    sx={{ 
                      color: "#ff8c00", // Orange checkbox
                      "&.Mui-checked": { color: "#ff8c00" } 
                    }} 
                  />}
                  label={
                    <Typography variant="body2">
                      By sending this form I confirm that I have read and accept the{" "}
                      <a href="/privacy-policy" style={{ color: "#ff8c00" }}>
                        Privacy Policy
                      </a>
                    </Typography>
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  sx={{ 
                    py: 1.5, 
                    borderRadius: "50px", 
                    fontWeight: "bold", 
                    width: "100%",
                    backgroundColor: "#0df72d", // Orange background
                    "&:hover": { backgroundColor: "#e67e00" } // Darker orange on hover
                  }}
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : "Submit"}
                </Button>
              </Grid>
           
          </form>

          {/* Snackbar popup */}
          <Snackbar
            open={snackbar.open}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert onClose={handleCloseSnackbar} severity={snackbar.type} sx={{ width: "100%" }}>
              {snackbar.message}
            </Alert>
          </Snackbar>
        </Paper>
      </Box>
    </Box>
  );
}
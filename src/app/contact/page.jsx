"use client";
import React, { useState } from "react";
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
} from "@mui/material";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

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
      setStatus({ type: "error", message: "You must accept the Privacy Policy." });
      return;
    }
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        agree: false,
      });
    } catch (err) {
      setStatus({ type: "error", message: err.message || "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "grey.100",
        p: 2,
      }}
    >
      <Paper
        elevation={1}
        sx={{
          p: { xs: 3, sm: 4 },
          maxWidth: 600,
          width: "100%",
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          color="primary"
          fontWeight="bold"
          gutterBottom
        >
          Contact Us
        </Typography>

        {status && (
          <Box
            sx={{
              mb: 2,
              p: 2,
              borderRadius: 2,
              bgcolor: status.type === "success" ? "green.100" : "red.100",
              color: status.type === "success" ? "green.700" : "red.700",
            }}
          >
            {status.message}
          </Box>
        )}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Full name */}
            <Grid item xs={12}>
              <TextField
                label="Your full name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                fullWidth
                variant="standard"
              />
            </Grid>

            {/* Company */}
            <Grid item xs={12}>
              <TextField
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                fullWidth
                variant="standard"
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12}>
              <TextField
                label="Your email address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                fullWidth
                variant="standard"
              />
            </Grid>

            {/* Phone */}
            <Grid item xs={12}>
              <TextField
                label="Your phone number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                variant="standard"
              />
            </Grid>

            {/* About project */}
            <Grid item xs={12}>
              <TextField
                label="About a project"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                fullWidth
                multiline
                variant="standard"
              />
            </Grid>

            {/* Checkbox */}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2">
                    By sending this form I confirm that I have read and accept the{" "}
                    <a href="/privacy-policy" style={{ color: "#1976d2" }}>
                      Privacy Policy
                    </a>
                  </Typography>
                }
              />
            </Grid>

            {/* Submit */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
                sx={{
                  py: 1.5,
                  borderRadius: "50px",
                  fontWeight: "bold",
                  width: "100%",
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}

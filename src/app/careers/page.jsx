"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Paper,
  Stack,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";

export default function StudentFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    applyFor: "",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleResumeChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    setLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    if (resumeFile) data.append("resume", resumeFile);

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/careers",
        { method: "POST", body: data }
      );

      if (!response.ok) throw new Error("Failed to submit form");

      const result = await response.json();
      console.log("Form Submitted:", result);
      setSubmitStatus({
        type: "success",
        message: "Form submitted successfully!",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        education: "",
        applyFor: "",
        message: "",
      });
      setResumeFile(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to submit form. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  return (
    <Box
      className="min-h-screen flex items-center justify-center p-4 mt-13"
      sx={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.6), rgba(255,255,255,0.6)), url('/hero-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          backdropFilter: "blur(12px)",
          borderRadius: "16px",
          border: "1px solid rgba(88, 81, 81, 0.15)",
          p: { xs: 3, sm: 5, md: 6 },
          maxWidth: "900px",
          width: "100%",
          opacity: 0.97,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full mx-auto">
            <div className="text-center mb-6">
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ color: "text.primary", mb: 1 }}
              >
                Registration
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Complete the form to start your educational adventure
              </Typography>
            </div>

            {submitStatus && (
              <Alert severity={submitStatus.type} sx={{ mb: 3 }}>
                {submitStatus.message}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <Stack spacing={3} sx={{ width: "100%" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      fullWidth
                      required
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      fullWidth
                      required
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      fullWidth
                      required
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Your Education"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Apply For"
                      name="applyFor"
                      value={formData.applyFor}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      fullWidth
                      multiline
                      rows={3}
                      size="small"
                    />
                  </Grid>
                </Grid>

                {/* Resume Upload */}
                <div>
                  <Typography variant="subtitle2" mb={1} color="text.secondary">
                    Upload Resume
                  </Typography>
                  <Button
                    variant="outlined"
                    component="label"
                    fullWidth
                    sx={{ textTransform: "none" }}
                  >
                    {resumeFile ? resumeFile.name : "Choose File"}
                    <input
                      type="file"
                      hidden
                      accept=".pdf,.doc,.docx"
                      onChange={handleResumeChange}
                    />
                  </Button>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={loading}
                  sx={{
                    py: 1.5,
                    borderRadius: "10px",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    fontWeight: 600,
                    background: "linear-gradient(90deg, #3b82f6, #10b981)",
                    "&:hover": {
                      background: "linear-gradient(90deg, #2563eb, #059669)",
                    },
                  }}
                >
                  {loading ? (
                    <>
                      <CircularProgress size={20} color="inherit" />
                      &nbsp;Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </Stack>
            </form>
          </div>
        </motion.div>
      </Paper>
    </Box>
  );
}

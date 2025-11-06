"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import  Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { motion } from "framer-motion";

export default function StudentFormPage() {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    education: "",
    applyFor: "",
    message: "",
    attachment: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [resumeFile, setResumeFile] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setResumeFile(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result.split(",")[1];
      setFormData((prev) => ({
        ...prev,
        attachment: { name: file.name, type: file.type, base64 },
      }));
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/career", formData);
      setSubmitStatus({ type: "success", message: "Application submitted ✅" });
      setFormData(initialFormData);
      setResumeFile(null);
    } catch (err) {
      setSubmitStatus({ type: "error", message: "Failed to submit ❌" });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('/cholabiz_carrer_background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        p: { xs: 2, sm: 4, md: 6 },
        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          borderRadius: "16px",
          overflow: "hidden",
          maxWidth: "1100px",
          width: "100%",
          height: "auto",
          mt: 7,
        }}
      >
        {/* LEFT SIDE CONTENT */}
        <Box
          sx={{
            p: { xs: 3, md: 5 },
            background:
              "linear-gradient(180deg, #3b82f6 0%, #10b981 100%)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h4" fontWeight="bold" mb={2}>
              Join Our Team 🚀
            </Typography>
            <Typography variant="body1" mb={3}>
              At <strong>chola business automation</strong>, we believe in empowering talent to
              innovate and grow. Be a part of our dynamic team that values
              creativity, learning, and collaboration.
            </Typography>

            <Divider
              sx={{ borderColor: "rgba(255,255,255,0.3)", my: 2 }}
            />

            <Typography variant="h6" mb={1}>
              💡 Why Work With Us:
            </Typography>
            <ul style={{ marginLeft: "1rem" }}>
              <li>Friendly & innovative environment</li>
              <li>Opportunities to learn new tech</li>
              <li>Flexible working hours</li>
              <li>Career growth & mentorship</li>
            </ul>

            <Box
              component="img"
              src="/cholabiz_carrer.jpg"
              
              alt="Join Our Team"
              sx={{
                width: "100%",
                // height: "60%",
                borderRadius: "12px",
                mt: 3,
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              }}
            />
          </motion.div>
        </Box>

        {/* RIGHT SIDE FORM */}
        <Box
          sx={{
            p: { xs: 3, md: 5 },
            backgroundColor: "white",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              fontWeight="bold"
              sx={{ mb: 1 }}
            >
              Registration Form
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
              mb={3}
            >
              Complete the form to start your career journey with us.
            </Typography>

            {submitStatus && (
              <Alert severity={submitStatus.type} sx={{ mb: 3 }}>
                {submitStatus.message}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <Stack spacing={2.5}>
                <TextField
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                  size="small"
                />
                <TextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                  size="small"
                />
                <TextField
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                  required
                  size="small"
                />
                <TextField
                  label="Education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
                <TextField
                  label="Apply For"
                  name="applyFor"
                  value={formData.applyFor}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
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

                {/* Resume Upload */}
                <div>
                  <Typography
                    variant="subtitle2"
                    mb={1}
                    color="text.secondary"
                  >
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
                    fontWeight: 600,
                    background: "linear-gradient(90deg, #3b82f6, #10b981)",
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, #2563eb, #059669)",
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
          </motion.div>
        </Box>
      </Paper>
    </Box>
  );
}

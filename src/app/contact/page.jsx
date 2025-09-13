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
  Snackbar,
  Alert,
} from "@mui/material";

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
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "grey.100",
        p: 2,
      }}
    >
      <Paper elevation={1} sx={{ p: { xs: 3, sm: 4 }, maxWidth: 600, width: "100%", borderRadius: 3 }}>
        <Typography variant="h4" align="center" color="primary" fontWeight="bold" gutterBottom>
          Contact Us
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField label="Your full name" name="name" value={formData.name} onChange={handleChange} required fullWidth variant="standard" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Company" name="company" value={formData.company} onChange={handleChange} fullWidth variant="standard" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Your email address" name="email" type="email" value={formData.email} onChange={handleChange} required fullWidth variant="standard" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Your phone number" name="phone" type="tel" value={formData.phone} onChange={handleChange} fullWidth variant="standard" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="About a project" name="message" value={formData.message} onChange={handleChange} required fullWidth multiline variant="standard" />
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" component="label" fullWidth sx={{ py: 1.5, borderRadius: "8px" }}>
                {formData.attachment ? formData.attachment.name : "Attach a file"}
                <input type="file" hidden onChange={(e) => setFormData((prev) => ({ ...prev, attachment: e.target.files[0] }))} />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox name="agree" checked={formData.agree} onChange={handleChange} color="primary" />}
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
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
                sx={{ py: 1.5, borderRadius: "50px", fontWeight: "bold", width: "100%" }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
              </Button>
            </Grid>
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
  );
}

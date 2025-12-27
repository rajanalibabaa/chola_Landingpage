"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Alert,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  InputAdornment,
} from "@mui/material";

/* Axios instance */
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

export default function CholaClientRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    alternateEmail: "",
    phone: "",
    alternatePhone: "",
    companyName: "",
    domainName: "",
  });

  const [otp, setOtp] = useState("");
  const [otpToken, setOtpToken] = useState(""); // token from backend
  const [otpOpen, setOtpOpen] = useState(false);

  const [timer, setTimer] = useState(60);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  /* OTP Timer */
  useEffect(() => {
    if (otpOpen && timer > 0) {
      const interval = setInterval(() => {
        setTimer((t) => t - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [otpOpen, timer]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  /* SEND OTP */
  const sendOtp = async () => {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await api.post("http://localhost:5050/api/v1/otp/send", {
        email: formData.email,
      });

      setOtpToken(res.data?.data?.token);
      setOtpOpen(true);
      setTimer(60);
      setMessage("OTP sent to your email");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  /* VERIFY OTP */
  const verifyOtp = async () => {
    if (!otp) {
      setError("Please enter OTP");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await api.post(
        "http://localhost:5050/api/v1/otp/verify",
        { otp },
        {
          headers: {
            Authorization: `Bearer ${otpToken}`,
          },
        }
      );

      setMessage(res.data?.message || "OTP verified successfully ✅");
      setOtpOpen(false);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  /* RESEND OTP */
  const resendOtp = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await api.post("/otp/send", {
        email: formData.email,
      });

      setOtpToken(res.data?.data?.token);
      setTimer(60);
      setMessage("OTP resent successfully");
    } catch (err) {
      setError(err.response?.data?.message || "Resend failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper elevation={4} sx={{ p: 4, width: 720 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Chola Client Registration
        </Typography>

        {message && <Alert severity="success" sx={{ mb: 2 }}>{message}</Alert>}
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        {/* TWO COLUMN FORM */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Full Name" name="name" onChange={handleChange} />
          </Grid>

          {/* EMAIL + VERIFY BUTTON INSIDE INPUT */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      size="small"
                      onClick={sendOtp}
                      disabled={loading || !formData.email}
                    >
                      {loading ? <CircularProgress size={16} /> : "Verify"}
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Alternate Email" name="alternateEmail" onChange={handleChange} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Phone" name="phone" onChange={handleChange} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Alternate Phone" name="alternatePhone" onChange={handleChange} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Company Name" name="companyName" onChange={handleChange} />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth label="Domain Name" name="domainName" onChange={handleChange} />
          </Grid>
        </Grid>
      </Paper>

      {/* OTP POPUP */}
      <Dialog open={otpOpen} maxWidth="xs" fullWidth>
        <DialogTitle>Email Verification</DialogTitle>
        <DialogContent>
          <Typography variant="body2">
            Enter the 6-digit OTP sent to your email
          </Typography>

          <TextField
            fullWidth
            label="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            inputProps={{
              maxLength: 6,
              style: { textAlign: "center", letterSpacing: 6 },
            }}
            margin="normal"
          />

          <Button
            size="small"
            fullWidth
            disabled={timer > 0 || loading}
            onClick={resendOtp}
          >
            Resend OTP {timer > 0 && `(${timer}s)`}
          </Button>
        </DialogContent>

        <DialogActions>
          <Button
            fullWidth
            variant="contained"
            onClick={verifyOtp}
            disabled={loading}
          >
            {loading ? <CircularProgress size={22} /> : "Verify OTP"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

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
import { CheckCircle, Cancel } from "@mui/icons-material";
import PopupSnackbar from "../../../components/ui/PopupSnackbar";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

/* Axios instance */
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

export default function CholaClientRegistration() {
  const router = useRouter();
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
  const [otpOpen, setOtpOpen] = useState(false);
  const [timer, setTimer] = useState(60);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitLoading, setSubmitLoading] = useState(false);
  const [formTouched, setFormTouched] = useState(false);
  
  // Snackbar states
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [color, setcolor] = useState("info");

  /* OTP TIMER */
  useEffect(() => {
    if (otpOpen && timer > 0) {
      const interval = setInterval(() => {
        setTimer((t) => t - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [otpOpen, timer]);

  // Function to show snackbar
  const showSnackbar = (message, severity = "info") => {
    setSnackbarMessage(message);
    setcolor(severity);
    setSnackbarOpen(true);
  };

  // Function to handle API responses and show appropriate snackbar
  const handleApiResponse = (response, successMessage) => {
    const status = response?.data?.statusCode || response?.status;
    const message = response?.data?.message || successMessage;

    if (status === 200 || status === 201) {
      console.log("API Success Response:", status, message); // Debug
      showSnackbar(message || "Operation successful", "success");
      return true;
    } else {
      console.log("API Error Response:", status, message); // Debug
      showSnackbar(message || "Something went wrong", "error");
      return false;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Mark form as touched
    if (!formTouched) {
      setFormTouched(true);
    }
    
    // Clear field-specific error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  /* SEND / RESEND OTP (SAME API) */
  const sendOrResendOtp = async () => {
    // Validate email format before sending OTP
    const emailError = validateEmail(formData.email);
    if (emailError) {
      setErrors({ ...errors, email: emailError });
      showSnackbar(emailError, "error");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");
    try {
      const response = await api.post("https://clientbackend.cholabiz.com/api/v1/otp/reg-send-resend", {
        email: formData.email,
      });
      
      if (handleApiResponse(response, "OTP sent to your email")) {
        setOtpOpen(true);
        setTimer(60);
        setMessage("OTP sent to your email");
        setIsEmailVerified(false); // Reset verification status when sending new OTP
        setErrors({ ...errors, email: "" });
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Failed to send OTP";
      setError(errorMsg);
      setErrors({ ...errors, email: errorMsg });
      showSnackbar(errorMsg, "error");
    } finally {
      setLoading(false);
    }
  };

  /* VERIFY OTP */
  const verifyOtp = async () => {
    if (!otp) {
      const errorMsg = "Please enter OTP";
      setError(errorMsg);
      showSnackbar(errorMsg, "error");
      return;
    }

    if (otp.length !== 6) {
      const errorMsg = "OTP must be 6 digits";
      setError(errorMsg);
      showSnackbar(errorMsg, "error");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await api.post("https://clientbackend.cholabiz.com/api/v1/otp/reg-verify", {
        email: formData.email,
        otp,
      });
      
      if (handleApiResponse(response, "Email verified successfully!")) {
        setMessage(response.data?.message || "Email verified successfully!");
        setIsEmailVerified(true);
        setOtpOpen(false);
        setOtp(""); // Clear OTP input
        setErrors({ ...errors, email: "" });
      } else {
        setIsEmailVerified(false);
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Invalid OTP";
      setError(errorMsg);
      setIsEmailVerified(false);
      showSnackbar(errorMsg, "error");
    } finally {
      setLoading(false);
    }
  };

  /* VALIDATION FUNCTIONS */
  const validateEmail = (email) => {
    if (!email) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validatePhone = (phone) => {
    if (!phone) return "Phone number is required";
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) return "Please enter a valid 10-digit phone number";
    return "";
  };

  const validateDomain = (domain) => {
    if (!domain) return "Domain name is required";
    const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
    if (!domainRegex.test(domain)) return "Please enter a valid domain name";
    return "";
  };

  const validateForm = () => {
    const newErrors = {};

    // Required field validations
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.domainName.trim()) newErrors.domainName = "Domain name is required";

    // Email format validation
    if (!newErrors.email) {
      const emailError = validateEmail(formData.email);
      if (emailError) newErrors.email = emailError;
    }

    // Phone format validation
    if (!newErrors.phone) {
      const phoneError = validatePhone(formData.phone);
      if (phoneError) newErrors.phone = phoneError;
    }

    // Domain format validation
    if (!newErrors.domainName) {
      const domainError = validateDomain(formData.domainName);
      if (domainError) newErrors.domainName = domainError;
    }

    // Validate alternate phone if provided
    if (formData.alternatePhone.trim()) {
      const altPhoneError = validatePhone(formData.alternatePhone);
      if (altPhoneError) newErrors.alternatePhone = altPhoneError;
    }

    // Validate alternate email if provided
    if (formData.alternateEmail.trim()) {
      const altEmailError = validateEmail(formData.alternateEmail);
      if (altEmailError) newErrors.alternateEmail = altEmailError;
    }

    return newErrors;
  };

  /* SUBMIT FORM */
  const handleSubmit = async () => {
    setError("");
    setMessage("");

    // First validate the form
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const errorMsg = "Please fix the errors in the form before submitting";
      setError(errorMsg);
      showSnackbar(errorMsg, "error");
      return;
    }
      
    console.log("Form Data Ready for Submission:", formData); // Debug
    // Check if email is verified
    if (!isEmailVerified) {
      const errorMsg = "Please verify your email before submitting";
      setError(errorMsg);
      setErrors({ ...errors, email: "Email must be verified" });
      showSnackbar(errorMsg, "error");
      return;
    }

    setSubmitLoading(true);
    try {
      // Get token from localStorage or wherever you store it
      // const token = localStorage.getItem("adminToken") || 
      //               sessionStorage.getItem("adminToken") || 
      //               getCookie("adminToken");
      
      // if (!token) {
      //   throw new Error("Authentication token not found. Please login again.");
      // }

      // console.log("Submitting registration with token:", token.substring(0, 20) + "..."); // Debug

      // Make the API call with token in the URL parameter
      const response = await api.post(`https://clientbackend.cholabiz.com/api/v1/registration`, formData);
      console.log("Submitting registration with data:", response); // Debug
      
      console.log("Registration Response:", response); // Debug
      
      if (handleApiResponse(response, "Registration successful!")) {
        setMessage(response.data?.message || "Registration successful!");
        
        // Reset form after successful registration
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            alternateEmail: "",
            phone: "",
            alternatePhone: "",
            companyName: "",
            domainName: "",
          });
          setIsEmailVerified(false);
          setErrors({});
          setFormTouched(false);
          setOtp("");
          
          // Optionally redirect after successful registration
          // router.push("/success"); // Uncomment if you want to redirect
        }, 2000);
      }
    } catch (err) {
      console.error("Registration Error:", err); // Debug
      
      let errorMsg = "Registration failed. Please try again.";
      
      if (err.response) {
        // Server responded with error
        errorMsg = err.response.data?.message || errorMsg;
        
        // Handle token expiration
        if (err.response.status === 401) {
          errorMsg = "Session expired. Please login again.";
          // Redirect to login
          setTimeout(() => {
            router.push("/admin/login");
          }, 2000);
        }
      } else if (err.request) {
        // No response from server
        errorMsg = "No response from server. Please check your connection.";
      } else if (err.message.includes("token")) {
        // Token not found
        errorMsg = "Authentication required. Please login first.";
        // Redirect to login
        setTimeout(() => {
          router.push("/admin/login");
        }, 2000);
      }
      
      setError(errorMsg);
      showSnackbar(errorMsg, "error");
    } finally {
      setSubmitLoading(false);
    }
  };

  /* CHECK IF ALL REQUIRED FIELDS ARE FILLED - Only for UI indication */
  const isFormComplete = () => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      formData.phone.trim() &&
      formData.companyName.trim() &&
      formData.domainName.trim() &&
      isEmailVerified
    );
  };

  /* CHECK IF FORM HAS ERRORS */
  const hasFormErrors = () => {
    return Object.keys(errors).some(key => errors[key]);
  };

  // Helper function to get cookie (if storing token in cookies)
  const getCookie = (name) => {
    if (typeof document === 'undefined') return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url('/clientloginbg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      {/* Snackbar Component */}
      <PopupSnackbar
        open={snackbarOpen}
        message={snackbarMessage}
        severity={color}
        onClose={() => setSnackbarOpen(false)}
        autoHideDuration={3000}
      />

      <Paper elevation={4} sx={{ p: 4, width: 720, maxWidth: "100%", position: "relative" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Chola Client Registration
        </Typography>
        
        {/* {message && (
          <Alert 
            severity="success" 
            sx={{ mb: 2 }}
            onClose={() => setMessage("")}
          >
            {message}
          </Alert>
        )}
        
        {error && (
          <Alert 
            severity="error" 
            sx={{ mb: 2 }}
            onClose={() => setError("")}
          >
            {error}
          </Alert>
        )} */}
        

        <Grid container spacing={2} mt={1} sx={{display:"grid",gridTemplateColumns:"repeat(2, 1fr)"}}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Full Name *"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              disabled={submitLoading}
              required
            />
          </Grid>
          
          <Grid item xs={12} sm={6} >
            <TextField
              fullWidth
              label="Email *"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              disabled={submitLoading}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {isEmailVerified ? (
                      <Box sx={{ display: "flex", alignItems: "center", color: "success.main" }}>
                        <CheckCircle fontSize="small" sx={{ mr: 0.5 }} />
                        Verified
                      </Box>
                    ) : (
                      <Button
                        size="small"
                        onClick={sendOrResendOtp}
                        disabled={loading || !formData.email || submitLoading}
                        variant={errors.email ? "contained" : "outlined"}
                        color={errors.email ? "error" : "primary"}
                      >
                        {loading ? <CircularProgress size={16} /> : "Verify"}
                      </Button>
                    )}
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Alternate Email"
              name="alternateEmail"
              type="email"
              value={formData.alternateEmail}
              onChange={handleChange}
              error={!!errors.alternateEmail}
              helperText={errors.alternateEmail}
              disabled={submitLoading}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone *"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
              disabled={submitLoading}
              required
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Alternate Phone"
              name="alternatePhone"
              value={formData.alternatePhone}
              onChange={handleChange}
              error={!!errors.alternatePhone}
              helperText={errors.alternatePhone}
              disabled={submitLoading}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Company Name *"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              error={!!errors.companyName}
              helperText={errors.companyName}
              disabled={submitLoading}
              required
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Domain Name *"
              name="domainName"
              value={formData.domainName}
              onChange={handleChange}
              error={!!errors.domainName}
              helperText={errors.domainName}
              disabled={submitLoading}
              required
              placeholder="example.com"
            />
          </Grid>
        </Grid>

        {/* Submit Button - NEVER DISABLED */}
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit}
            disabled={submitLoading}
            sx={{ 
              minWidth: 200,
              bgcolor: submitLoading ? 'grey.400' : hasFormErrors() ? 'warning.main' : !isFormComplete() ? 'info.main' : 'warning.main',
              '&:hover': {
                bgcolor: submitLoading ? 'grey.400' : 
                         hasFormErrors() ? 'warning.dark' : 
                         !isFormComplete() ? 'info.dark' : 'primary.dark',
              }
            }}
            startIcon={submitLoading ? <CircularProgress size={20} color="inherit" /> : null}
          >
            {submitLoading ? (
              "Processing..."
            ) : hasFormErrors() ? (
              "Fix Errors to Submit"
            ) : !isFormComplete() ? (
              "Complete Form to Submit"
            ) : (
              "Submit Registration"
            )}
          </Button>
        </Box>

        <Box sx={{ mt: 2, display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
          <Typography variant="caption" color="text.secondary">
            * Required fields
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            {isEmailVerified ? (
              <>
                <CheckCircle fontSize="small" sx={{ color: "success.main", mr: 0.5 }} />
                <Typography variant="caption" color="success.main">
                  Email Verified
                </Typography>
              </>
            ) : (
              <>
                <Cancel fontSize="small" sx={{ color: "warning.main", mr: 0.5 }} />
                <Typography variant="caption" color="warning.main">
                  Email Not Verified
                </Typography>
              </>
            )}
          </Box>
        </Box>
      </Paper>

      {/* OTP DIALOG */}
      <Dialog open={otpOpen} maxWidth="xs" fullWidth onClose={() => !loading && setOtpOpen(false)}>
        <DialogTitle>Email Verification</DialogTitle>
        <DialogContent>
          <Typography variant="body2" gutterBottom>
            Enter the 6-digit OTP sent to your email
          </Typography>
          <Typography variant="body2" color="primary" fontWeight="bold" gutterBottom>
            {formData.email}
          </Typography>
          <TextField
            fullWidth
            label="OTP"
            value={otp}
            onChange={(e) => {
              setOtp(e.target.value.replace(/\D/g, '').slice(0, 6));
              setError("");
            }}
            inputProps={{ 
              maxLength: 6, 
              style: { 
                textAlign: "center", 
                fontSize: "1.5rem", 
                letterSpacing: "8px" 
              } 
            }}
            margin="normal"
            error={!!error}
            helperText={error}
            autoFocus
            disabled={loading}
          />
          <Button
            size="small"
            fullWidth
            disabled={timer > 0 || loading}
            onClick={sendOrResendOtp}
            sx={{ mt: 1 }}
          >
            {timer > 0 ? `Resend OTP in ${timer}s` : 'Resend OTP'}
          </Button>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOtpOpen(false)}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={verifyOtp}
            disabled={loading || otp.length !== 6}
          >
            {loading ? <CircularProgress size={22} /> : "Verify OTP"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
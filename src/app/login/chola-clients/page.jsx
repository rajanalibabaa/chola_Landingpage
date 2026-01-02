"use client";

import { useState } from "react";
import { PostApiCall } from "../../../utils/apiClient";
import PopupSnackbar from "../../../components/ui/PopupSnackbar";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  CircularProgress,
  useTheme,
  Paper,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function CholaClientsLogin() {
  const theme = useTheme();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [color, setColor] = useState("");
  const [loadingSend, setLoadingSend] = useState(false);
  const [loadingVerify, setLoadingVerify] = useState(false);
  const [token, setToken] = useState(null);

  const handleSendOtp = async () => {
    setLoadingSend(true);
    if (!email) {
      setOpen(true);
      setMsg("Please enter your email address");
      setColor("error");
      setTimeout(() => {
        setOpen(false);
        setMsg("");
      }, 1500);
      setLoadingSend(false);
      return;
    }
    try {
      const res = await PostApiCall("http://localhost:5050/api/v1/otp/send", {
        email,
      });

      if (res.statuscode === 200) {
        setToken(res.data.token);
        setOtpSent(true);
        setMsg(res.message);
        setColor("success");
      } else {
        setMsg(res.message || res.data.message);
        setColor("error");
      }
    } catch (err) {
      setMsg("Error sending OTP");
      setColor("error");
    } finally {
      setOpen(true);
      setLoadingSend(false);
      setTimeout(() => {
        setOpen(false);
        setMsg("");
      }, 1500);
    }
  };

  const handleVerifyOtp = async () => {
    setLoadingVerify(true);
    try {
      const res = await PostApiCall(
        "http://localhost:5050/api/v1/chola/client/login",
        { otp },
        token,
        true
      );
alert(JSON.stringify(res));

      if (res.statuscode === 200) {
        setMsg(res.message);
        setColor("success");
        setTimeout(() => {
          // const redirect = `https://${res.data.path}/admin/${res.data.token}`;
          const redirect = `http://localhost:5173/admin/${res.data.token}`;
          window.location.href = redirect;
        }, 1200);
      } else {
        setMsg(res.message || res.data.message);
        setColor("error");
      }
    } catch (err) {
      setMsg("Error verifying OTP");
      setColor("error");
    } finally {
      setOpen(true);
      setLoadingVerify(false);
      setTimeout(() => {
        setOpen(false);
        setMsg("");
      }, 1500);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          backdropFilter: "blur(10px)",
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(18, 18, 18, 0.85)"
              : "rgba(255, 255, 255, 0.85)",
          padding: 4,
          width: 400,
          borderRadius: 4,
          textAlign: "center",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <LockOutlinedIcon
          sx={{
            fontSize: 40,
            color: theme.palette.primary.main,
            mb: 1,
          }}
        />
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Chola Clients Login
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          Secure access for Chola Clients
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
          />

          {!otpSent && (
            <Button
              variant="contained"
              size="large"
              sx={{ borderRadius: 2, py: 1.2 }}
              onClick={handleSendOtp}
              disabled={loadingSend}
              startIcon={loadingSend && <CircularProgress size={20} />}
            >
              {loadingSend ? "Sending..." : "Send OTP"}
            </Button>
          )}

          {otpSent && (
            <>
              <TextField
                label="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                fullWidth
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
              <Button
                variant="contained"
                size="large"
                sx={{ borderRadius: 2, py: 1.2 }}
                disabled={loadingVerify}
                onClick={handleVerifyOtp}
                startIcon={loadingVerify && <CircularProgress size={20} />}
              >
                {loadingVerify ? "Verifying..." : "Verify OTP"}
              </Button>
              <Button
                variant="text"
                onClick={handleSendOtp}
                disabled={loadingSend}
                sx={{ mt: -1 }}
              >
                {loadingSend ? "Resending..." : "Resend OTP"}
              </Button>
            </>
          )}
        </Stack>

        <PopupSnackbar
          open={open}
          message={msg}
          severity={color}
          onClose={() => setOpen(false)}
        />
      </Paper>
    </Box>
  );
}

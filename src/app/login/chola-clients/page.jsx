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
} from "@mui/material";

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
      setMsg(res.message);
      setColor("error");
      setTimeout(() => {
        setOpen(false);
        setMsg("");
      }, 1500);
    }

    try {
      const res = await PostApiCall("http://localhost:5050/api/v1/otp/send", {
        email,
      });

      if ([400, 404, 500, 505, 409, 401].includes(res.statuscode)) {
        setOpen(true);
        setMsg(res.message || res.data.message);
        setColor("error");
        setTimeout(() => {
          setOpen(false);
          setMsg("");
        }, 1500);
      }
      if (res.statuscode === 200) {
        setToken(res.data.token);
        setOpen(true);
        setOtpSent(true);
        setMsg(res.message);
        setColor("success");
        setTimeout(() => {
          setOpen(false);
          setMsg("");
        }, 1500);
      }
    } catch (err) {
      console.error("Error sending OTP:", err.message);
      setMsg("Error sending OTP");
      setColor("danger");
    } finally {
      setLoadingSend(false);
    }
  };

  const handleResendOtp = async () => {
    setLoadingSend(true);

    try {
      const res = await PostApiCall("http://localhost:5050/api/v1/otp/send", {
        email,
      });

      if ([400, 404, 500, 505, 409, 401].includes(res.statuscode)) {
        setOpen(true);
        setMsg(res.message);
        setColor("error");
        setTimeout(() => {
          setOpen(false);
          setMsg("");
        }, 1500);
      }

      if (res.statuscode === 200) {
        setToken(res.data.token);
        setOpen(true);
        setOtpSent(true);
        setMsg(res.message);
        setColor("success");

        setTimeout(() => {
          setOpen(false);
          setMsg("");
        }, 1500);
      }
    } catch (err) {
      console.error("Error resending OTP:", err.message);
      setMsg("Error sending OTP");
      setColor("error");
    } finally {
      setLoadingSend(false);
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

      if ([400, 404, 500, 505, 409, 401].includes(res.statuscode)) {
        setOpen(true);
        setMsg(res.message || res.data.message);
        setColor("error");
        setTimeout(() => {
          setLoadingVerify(false);
          setOpen(false);
          setMsg("");          
        }, 1500);
      }
    
      if (res.statuscode === 200) {
        setToken("");
        setOpen(true);
        setOtpSent(true);
        setMsg(res.message);
        setColor("success");
        setTimeout(() => {
          setLoadingVerify(false);
          setOpen(false);
          setMsg(""); 
          const redirect   = `https://${res.data.path}/admin/${res.data.token}`    
          window.location.href = redirect;
        }, 1500);
      }
    } catch (err) {
      console.error("Error verifying OTP:", err.message);

      setOpen(true);
      setMsg(err.message || err.message);
      setColor("error");
      setTimeout(() => {
        setOpen(false);
        setMsg("");
        setLoadingVerify(false);
      }, 1500);
    }
  };

  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        mx="auto"
        maxWidth={800}
        p={4}
        borderRadius={2}
        sx={{
          bgcolor:
            theme.palette.mode === "dark" ? "grey.900" : "background.paper",
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" mb={3} textAlign="center" color="text.primary">
          Chola Clients Login
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            InputProps={{
              sx: {
                bgcolor:
                  theme.palette.mode === "dark" ? "grey.800" : "grey.100",
                color: "text.primary",
              },
            }}
          />

          {!otpSent && (
            <Button
              variant="contained"
              onClick={handleSendOtp}
              disabled={loadingSend}
              startIcon={loadingSend && <CircularProgress size={20} />}
            >
              {loadingSend ? "Sending..." : "Send OTP"}
            </Button>
          )}

          {otpSent && !otpVerified && (
            <>
              <TextField
                label="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                fullWidth
                InputProps={{
                  sx: {
                    bgcolor:
                      theme.palette.mode === "dark" ? "grey.800" : "grey.100",
                    color: "text.primary",
                  },
                }}
              />
              <Button
                variant="contained"
                onClick={handleVerifyOtp}
                disabled={loadingVerify}
                startIcon={loadingVerify && <CircularProgress size={20} />}
              >
                {loadingVerify ? "Verifying..." : "Verify OTP"}
              </Button>
              <Button
                variant="text"
                onClick={handleResendOtp}
                disabled={loadingSend}
                startIcon={loadingSend && <CircularProgress size={20} />}
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
      </Box>
    </Box>
  );
}

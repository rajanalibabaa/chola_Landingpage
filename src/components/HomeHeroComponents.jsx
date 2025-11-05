"use client";
import React ,{ useState ,useEffect,useRef} from "react";
import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
   const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
 // Wait until video starts playing before showing content
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setVideoLoaded(true);
    video.addEventListener("canplay", handleCanPlay);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <Box
      sx={{
        minHeight: { xs: "130vh", md: "100vh" },
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      mt={{ xs: -10, md: 0 }}
    >
   <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill",
          zIndex: -1,
        }}
        onCanPlay={() => setVideoLoaded(true)}
      >
        <source src="/head1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
      {/* 🔹 Text Content */}
      <Box
        sx={{
          zIndex: 3,
          maxWidth: 1200,
          width: "100%",
          px: 2,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2.6rem", md: "3rem" },
              lineHeight: 1.6,
              color: "black",
            }}
          >
            WELCOME !!
            <Box
              component="span"
              sx={{
                display: "block",
                background: "black",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              <Box component="span" sx={{ color: "#ff9800" }}>C</Box> <Box component={"span"} sx={{ color: "black" }} >H O L {" "}</Box>
              <Box component="span" sx={{ color: "#74ed3f" }}>A</Box> BUSINESS AUTOMATION
            </Box>
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: "1.3rem", md: "1.25rem" },
              fontWeight: 500,
              color: "black",
              maxWidth: 600,
            }}
          >
            We craft{" "}
            <Box component="span" sx={{ fontWeight: "bold", color: "#ef4444" }}>
              cutting-edge{" "}
            </Box>
            web and mobile applications that empower businesses to scale and thrive
            in the digital era.
          </Typography>
           <Button
            component={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              mt: 4,
              px: 4,
              py: 1.2,
              fontWeight: 600,
              borderRadius: "50px",
              background: "linear-gradient(90deg, #fb923c, #ef4444, #facc15)",
              color: "white",
            }}
          >
            🚀 Get Started
          </Button>
        </motion.div>

        <Box
          sx={{
            mt: 3,
            display: "flex",
            gap: 2,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
         
          {/* <Button
            component={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              px: 4,
              py: 1.2,
              fontWeight: 600,
              borderRadius: "50px",
              border: "2px solid #ef4444",
              background: "rgba(255,255,255,0.9)",
              color: "#ef4444",
            }}
          >
            Learn More
          </Button> */}
        </Box>
      </Box>

      {/* 🔹 Woman Image at Bottom (Responsive + Animated) */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        animate={{ opacity: 1, y: [1, 8, 2], scale: 1.1 }} // 👈 added subtle float
        transition={{
          duration: 1.2,
          ease: "easeOut",
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{
          position: "absolute",
          bottom: 0,
              top:{xs:"70%"},
          left: "55%",
          transform: "translateX(10%)",
          zIndex: 2,
          width: isMobile ? "80%" : "70%", 
          maxWidth: "1250px",              // max limit on large screens
        }}
      >
        <Image
          src="/head4.png"
          alt="Standing Woman"
          width={0}
          height={0}
          sizes="50vw"
          style={{
             width: isMobile ? "90%" : "60%",
             marginLeft: isMobile ? "-28%" : "0",
             
            height: "auto", // ✅ keeps aspect ratio
            objectFit: "contain",
          }}
          priority
        />
      </motion.div>
    </Box>
  );
}

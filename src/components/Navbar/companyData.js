import React from "react";
import StarIcon from "@mui/icons-material/Star";
import VerifiedIcon from "@mui/icons-material/Verified";
import SecurityIcon from "@mui/icons-material/Security";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export const companyData = {
  "About Cleveroad": [
    { icon: <StarIcon />, title: "Media Coverage" },
    { icon: <StarIcon />, title: "Testimonials" },
    { icon: <StarIcon />, title: "Awards" },
    { icon: <StarIcon />, title: "FAQ" },
    { icon: <StarIcon />, title: "Career" },
    { icon: <StarIcon />, title: "Latest Press releases" },
  ],
  "Certifications & Achievements": [
    { icon: <VerifiedIcon />, title: "ISO 9001 certified", desc: "Quality control standard" },
    { icon: <StarIcon />, title: "AWS Partner achieved", desc: "Cloud technical expertise" },
    { icon: <SecurityIcon />, title: "ISO 27001 certified", desc: "Data security standard" },
    { icon: <EmojiEventsIcon />, title: "Clutch Top 1000 in 2024", desc: "7th place in Global rating" },
  ],
};

export const companyColors = {
  "About Cleveroad": "#ff9800",
  "Certifications & Achievements": "#3f51b5",
};

import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import ArticleIcon from "@mui/icons-material/Article";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export const blogData = {
  "Client Guides": [
    { icon: <SchoolIcon />, title: "Expert guidance on business digital transformation" },
  ],
  "How-To": [
    { icon: <ArticleIcon />, title: "Step-by-step processes for business digitalization" },
  ],
  "Cleveroad": [
    { icon: <ArticleIcon />, title: "Company news, award press releases, and achievements" },
  ],
  "Healthcare": [
    { icon: <LocalHospitalIcon />, title: "Guides to building innovative HealthTech solutions" },
  ],
  "Logistics": [
    { icon: <DirectionsCarIcon />, title: "IT Insights on tech advancement in digitally connected logistics" },
  ],
  "FinTech": [
    { icon: <AccountBalanceIcon />, title: "Explore digital solutions for transforming financial services" },
  ],
};

export const blogColors = {
  "Client Guides": "#1976d2",
  "How-To": "#2e7d32",
  "Cleveroad": "#9c27b0",
  "Healthcare": "#ff9800",
  "Logistics": "#f57c00",
  "FinTech": "#3f51b5",
};

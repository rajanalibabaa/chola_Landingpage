import React from "react";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import StoreIcon from "@mui/icons-material/Store";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PeopleIcon from "@mui/icons-material/People";
import FlightIcon from "@mui/icons-material/Flight";
import SchoolIcon from "@mui/icons-material/School";

// Industries data
export const industriesData = {
  "HealthTech & MedTech": [
    { icon: <LocalHospitalIcon />, title: "EHR, EMR, patient portal", desc: "Solutions for processing patient data" },
    { icon: <LocalHospitalIcon />, title: "Telemedicine", desc: "Online medicine, telecare, and remote care" },
    { icon: <LocalHospitalIcon />, title: "Patient monitoring", desc: "IoT-based and real-time RPM systems" },
    { icon: <LocalHospitalIcon />, title: "Mental health tech", desc: "Online sessions, self monitoring, wellbeing" },
  ],
  "Supply Chain & Logistics": [
    { icon: <DirectionsCarIcon />, title: "Warehouse management", desc: "WMS, IoT, automated picking, mobile" },
    { icon: <DirectionsCarIcon />, title: "Last mile delivery", desc: "ETA, robotic delivery, route planning" },
    { icon: <DirectionsCarIcon />, title: "Freight tech", desc: "Software for truck, sea, and other freight" },
    { icon: <DirectionsCarIcon />, title: "Blockchain in logistics", desc: "Smart contracts, payments, invoicing" },
  ],
  "FinTech & Blockchain": [
    { icon: <AccountBalanceIcon />, title: "FinTech", desc: "Investment, trading, wallets, P2P, loans" },
    { icon: <AccountBalanceIcon />, title: "Banking", desc: "ERP, CRM, mobile banking, integrations" },
    { icon: <AccountBalanceIcon />, title: "Insurance", desc: "Management systems, fraud analysis, CRM" },
    { icon: <CurrencyBitcoinIcon />, title: "Blockchain in finance", desc: "Cryptocurrency, DeFi, DEX, cybersecurity" },
  ],
};

export const otherIndustries = [
    { icon: <StoreIcon />, title: "Marketplaces", desc: "Building B2B, C2C, and C2B solutions" },
    { icon: <LiveTvIcon />, title: "Media content streaming", desc: "VoD, OTT, live streams with AWS, Wowza" },
    { icon: <StoreIcon />, title: "Retail", desc: "RMS, POS, CRM systems" },
    { icon: <PeopleIcon />, title: "Social networks", desc: "Developing messengers, dating apps" },
    { icon: <FlightIcon />, title: "Travel", desc: "Building booking engines, HMS, and more" },
    { icon: <SchoolIcon />, title: "Education", desc: "Digital platforms, LMS, and SMS" },
  ]
// Optional: colors per industry category
export const industriesColors = {
  "HealthTech & MedTech": "#1976d2",
  "Supply Chain & Logistics": "#2e7d32",
  "FinTech & Blockchain": "#9c27b0",
  "Other Industries": "#ff9800",
};

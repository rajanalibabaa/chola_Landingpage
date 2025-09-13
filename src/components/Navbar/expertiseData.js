import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

export const expertiseData = {
  "Business Digitalization": [
    { icon: <BusinessCenterIcon />, title: "CRM, HRM, ERP systems", desc: "Streamline your business processes" },
    { icon: <CodeIcon />, title: "Legacy soft modernization", desc: "Reengineering, redesign, and migration" },
    { icon: <StorageIcon />, title: "Infrastructure services", desc: "Server, cloud, and other IT optimisation" },
    { icon: <WebIcon />, title: "Managed IT services", desc: "On-demand services and full IT coverage" },
  ],
  "Startups Launching": [
    { icon: <BusinessCenterIcon />, title: "Discovery phase", desc: "SRS, UX prototype, SWOT analysis" },
    { icon: <CodeIcon />, title: "PoC/MVP development", desc: "Reducing time-to-market with MVP" },
    { icon: <WebIcon />, title: "Product design", desc: "Distinctive UI/UX for mobile and web" },
    { icon: <StorageIcon />, title: "CTO as a Service", desc: "CaaS consulting services for startups" },
  ],
  "Technology Experts": [
    { icon: <CodeIcon />, title: "Hire React JS engineers", desc: "Stable and scalable frontend solutions" },
    { icon: <WebIcon />, title: "Hire .NET engineers", desc: "Mobile, web, and desktop applications" },
    { icon: <StorageIcon />, title: "Hire Flutter engineers", desc: "Cost-effective cross-platform approach" },
    { icon: <BusinessCenterIcon />, title: "Hire Node.js engineers", desc: "Profound backend for web and mobile" },
  ],
};

// Optional: colors for this menu
export const expertiseColors = {
  "Business Digitalization": "#ff9800", // orange
  "Startups Launching": "#3f51b5",      // blue
  "Technology Experts": "#4caf50",      // green
};

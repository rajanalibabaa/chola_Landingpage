import React from "react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AndroidIcon from "@mui/icons-material/Android";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import CodeIcon from "@mui/icons-material/Code";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BugReportIcon from "@mui/icons-material/BugReport";
import GroupsIcon from "@mui/icons-material/Groups";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

export const servicesData = {
   "Web Development": [
    { icon: <WebIcon />, title: "Front-end development", desc: "User-centric software with smooth UI" },
    { icon: <StorageIcon />, title: "Back-end development", desc: "Robust and secure server-side solutions" },
    { icon: <CodeIcon />, title: "Web app development", desc: "Secure and performant web applications" },
    { icon: <BusinessCenterIcon />, title: "DevOps services", desc: "Security, automation, cloud consulting" },
  ],
  "Mobile Development": [
        { icon: <FlutterDashIcon />, title: "Flutter app development", desc: "Dart-based cross-platform development" },
    { icon: <CodeIcon />, title: "React-native app development", desc: "Building apps using JavaScript framework" },
    { icon: <PhoneIphoneIcon />, title: "iOS app development", desc: "Native Swift apps for all Apple devices" },
    { icon: <AndroidIcon />, title: "Android app development", desc: "Build native apps for Android with Kotlin" },
  ],
 
  "Extra Services": [
    { icon: <DesignServicesIcon />, title: "UI/UX design", desc: "Material and HIG design for all platforms" },
    { icon: <BugReportIcon />, title: "Software testing", desc: "Manual testing & automation testing" },
    { icon: <GroupsIcon />, title: "Dedicated team", desc: "Experienced tech staff to extend a team" },
    { icon: <BusinessCenterIcon />, title: "IT consulting", desc: "AWS-certified advisers for your project" },
  ],
};

export const extraServices = [
    { icon: <CodeIcon />, title: "Custom Software Development", desc: "Bespoke solutions for web and mobile" },
  { icon: <BusinessCenterIcon />, title: "Product Discovery", desc: "Business analysis and solution architecture" },

  { icon: <GroupsIcon />, title: "IT Staff Augmentation", desc: "Experts for a tech projects on any request" },
];

// Colors per category
export const categoryColors = {
  "Mobile Development": "#1976d2",
  "Web Development": "#2e7d32",
  "Extra Services": "#9c27b0",
};

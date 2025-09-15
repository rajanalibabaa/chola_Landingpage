"use client";
import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { usePathname } from "next/navigation";
import DesktopMenu from "./DesktopMenu";
import MobileDrawer from "./MobileDrawer";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    // { name: "Home", href: "/" },
    // { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Expertise", href: "/expertise" },
    // { name: "Company", href: "/company" },
    // { name: "Project", href: "/project" },
    // { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Latest News", href: "/",  },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <AppBar position="fixed" sx={{ background: "white", color: "black", boxShadow: 2 }}>
      <Toolbar className="flex justify-between">
        <Link href="/">
          <Box className="flex items-center space-x-2">
          <Image src="/logo.png" alt="logo" width={100} height={40} />
 
        </Box>
        </Link>

        {/* Desktop Menu */}
        <DesktopMenu links={links} pathname={pathname} />

        {/* Mobile Menu */}
        <IconButton edge="end" color="inherit" sx={{ display: { md: "none" } }} onClick={() => setIsOpen(true)}>
          <MenuIcon />
        </IconButton>
        <MobileDrawer isOpen={isOpen} setIsOpen={setIsOpen} links={links} pathname={pathname} />
      </Toolbar>
    </AppBar>
  );
}

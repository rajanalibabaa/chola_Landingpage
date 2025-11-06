"use client";
import React, { useState } from "react";
import  Box  from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import AppBar  from "@mui/material/AppBar";
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
        { name: "Home", href: "/", prefetch: true },
            { name: "About Us", href: "/about", prefetch: true },

    { name: "Products", href: "/products-services", prefetch: true },

    { name: "Services", href: "/"},
    { name: "Industries", href: "/" },
    { name: "Expertise", href: "/" },
    { name: "Careers", href: "/careers" },
    { name: "Latest News", href: "/"},
    { name: "Contact", href: "/contact", },
  ];

  return (
    <AppBar position="fixed" sx={{ background: "#000000c3", color: "white" }}>
      <Toolbar className="flex justify-between">
        <Link href="/" prefetch>
          <Box className="flex items-center space-x-2">
          <Image src="/cholabiz_logo.jpeg" alt="logo" priority  width={100} height={40} />
 
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

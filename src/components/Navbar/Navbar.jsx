"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { usePathname } from "next/navigation";
import DesktopMenu from "./DesktopMenu";
import MobileDrawer from "./MobileDrawer";
import Link from "next/link";
import {
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Typography,
  ListItemIcon,
} from "@mui/material";
import {
  Person,
  Login,
  HowToReg,
  AccountCircle,
  Settings,
  Logout,
} from "@mui/icons-material";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null); 
  const [anchorEl, setAnchorEl] = useState(null);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/", prefetch: true },
    { name: "About Us", href: "/about", prefetch: true },
    { name: "Products", href: "/products-services", prefetch: true },
    { name: "Services", href: "/" },
    { name: "Industries", href: "/" },
    { name: "Expertise", href: "/" },
    { name: "Careers", href: "/careers" },
    { name: "Latest News", href: "/" },
    { name: "Contact", href: "/contact" },
  ];

  const loginRoute = "/login/chola-clients/";
  const registerRoute = "/chola-admin/client-registration/"; 

  // For demo - replace with actual auth logic
  const handleLogin = () => {
    // Simulate login
    setUser({
      name: "John Doe",
      email: "john@example.com",
      avatar: "/default-avatar.png", // Add a default avatar image
    });
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setUser(null);
    setAnchorEl(null);
  };

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <AppBar position="fixed" sx={{ background: "#000000c3", color: "white" }}>
      <Toolbar className="flex justify-between items-center">
        <Link href="/" prefetch>
          <Box className="flex items-center space-x-2">
            <Image
              src="/cholabiz_logo.jpeg"
              alt="logo"
              priority
              width={100}
              height={40}
            />
          </Box>
        </Link>

        <Box className="flex items-center space-x-4">
          {/* Desktop Menu */}
          <DesktopMenu links={links} pathname={pathname} />

          {/* Avatar Dropdown */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <IconButton
              onClick={handleAvatarClick}
              sx={{
                p: 0,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              {user ? (
                <Avatar
                  alt={user.name}
                  src={user.avatar}
                  sx={{ width: 40, height: 40 }}
                />
              ) : (
                <Avatar sx={{ bgcolor: "#44f924ff", width: 40, height: 40 }}>
                  <Person sx={{ color: "black" }} />
                </Avatar>
              )}
            </IconButton>

            <Menu
              id="avatar-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                elevation: 3,
                sx: {
                  mt: 1.5,
                  minWidth: 200,
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              {user ? (
                <>
                  <Box sx={{ px: 2, py: 1 }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {user.email}
                    </Typography>
                  </Box>
                  <Divider />
                  <MenuItem 
                    component={Link} 
                    href="/profile" 
                    onClick={handleClose}
                  >
                    <ListItemIcon>
                      <AccountCircle fontSize="small" />
                    </ListItemIcon>
                    Profile
                  </MenuItem>
                  <MenuItem 
                    component={Link} 
                    href="/settings" 
                    onClick={handleClose}
                  >
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem 
                    component={Link} 
                    href={loginRoute} 
                    onClick={handleClose}
                  >
                    <ListItemIcon>
                      <Login fontSize="small" />
                    </ListItemIcon>
                    Login
                  </MenuItem>
                  <MenuItem 
                    component={Link} 
                    href={registerRoute} 
                    onClick={handleClose}
                  >
                    <ListItemIcon>
                      <HowToReg fontSize="small" />
                    </ListItemIcon>
                    Register
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            sx={{ display: { md: "none" } }}
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        links={links}
        pathname={pathname}
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        loginRoute={loginRoute}
        registerRoute={registerRoute}
      />
    </AppBar>
  );
}
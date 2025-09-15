"use client";
import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  Divider,
  List,
  ListItemText,
  Collapse,
  Grid,
  ListItemButton,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Link from "next/link";
import { servicesData, extraServices, categoryColors } from "./servicesData";
import { expertiseData, expertiseColors } from "./expertiseData";
import { companyData, companyColors } from "./companyData";
import { industriesData, industriesColors } from "./industriesData";
import { blogData, blogColors } from "./blogData";

export default function MobileDrawer({ isOpen, setIsOpen, links, pathname }) {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  return (
    <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
      <Box sx={{ width: 280, p: 2 }}>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold" color="orange">
            MySite
          </Typography>
          <ListItemButton onClick={() => setIsOpen(false)}>
            <Typography variant="body1">Close</Typography>
          </ListItemButton>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Main Links */}
        <List>
          {links.map((link) => {
            const isActive = pathname === link.href;

            // Services
            if (link.name === "Services") {
              return (
                <Box key={link.name}>
                  <ListItemButton onClick={() => setServiceOpen(!serviceOpen)}>
                    <ListItemText
                      primary={link.name}
                      primaryTypographyProps={{
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "orange" : "inherit",
                      }}
                    />
                    {serviceOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={serviceOpen} timeout="auto" unmountOnExit>
                    <Box sx={{ pl: 3 }}>
                      {Object.entries(servicesData).map(([category, items]) => (
                        <Box key={category} sx={{ mb: 2 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontWeight: "bold",
                              color: "orange",
                              mt: 1,
                            }}
                          >
                            {category}
                          </Typography>
                          {items.map((item, i) => (
                            <Box
                              key={i}
                              sx={{
                                mb: 1,
                                display: "flex",
                                gap: 1,
                                alignItems: "flex-start",
                              }}
                            >
                              {React.cloneElement(item.icon, {
                                sx: { color: categoryColors[category] },
                              })}
                              <Box>
                                <Typography variant="body2" fontWeight="500">
                                  {item.title}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                >
                                  {item.desc}
                                </Typography>
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      ))}
                      <Divider sx={{ my: 2 }} />
                      <Grid container spacing={2}>
                        {extraServices.map((item, i) => (
                          <Grid item xs={12} key={i}>
                            <Box display="flex" alignItems="flex-start" gap={1}>
                              {item.icon}
                              <Box>
                                <Typography variant="body2" fontWeight="600">
                                  {item.title}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                >
                                  {item.desc}
                                </Typography>
                              </Box>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Collapse>
                </Box>
              );
            }

            // Expertise
            if (link.name === "Expertise") {
              return (
                <Box key={link.name}>
                  <ListItemButton
                    onClick={() => setExpertiseOpen(!expertiseOpen)}
                  >
                    <ListItemText
                      primary={link.name}
                      primaryTypographyProps={{
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "orange" : "inherit",
                      }}
                    />
                    {expertiseOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={expertiseOpen} timeout="auto" unmountOnExit>
                    <Box sx={{ pl: 3 }}>
                      {Object.entries(expertiseData).map(
                        ([category, items]) => (
                          <Box key={category} sx={{ mb: 2 }}>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                fontWeight: "bold",
                                color: expertiseColors[category],
                                mt: 1,
                              }}
                            >
                              {category}
                            </Typography>
                            {items.map((item, i) => (
                              <Box
                                key={i}
                                sx={{
                                  mb: 1,
                                  display: "flex",
                                  gap: 1,
                                  alignItems: "flex-start",
                                }}
                              >
                                {React.cloneElement(item.icon, {
                                  sx: { color: expertiseColors[category] },
                                })}
                                <Box>
                                  <Typography
                                    variant="body2"
                                    fontWeight="500"
                                  >
                                    {item.title}
                                  </Typography>
                                  <Typography
                                    variant="caption"
                                    color="text.secondary"
                                  >
                                    {item.desc}
                                  </Typography>
                                </Box>
                              </Box>
                            ))}
                          </Box>
                        )
                      )}
                    </Box>
                  </Collapse>
                </Box>
              );
            }

            // Company
            if (link.name === "Company") {
              return (
                <Box key={link.name}>
                  <ListItemButton onClick={() => setCompanyOpen(!companyOpen)}>
                    <ListItemText
                      primary={link.name}
                      primaryTypographyProps={{
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "orange" : "inherit",
                      }}
                    />
                    {companyOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={companyOpen} timeout="auto" unmountOnExit>
                    <Box sx={{ pl: 3 }}>
                      {Object.entries(companyData).map(([category, items]) => (
                        <Box key={category} sx={{ mb: 2 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontWeight: "bold",
                              color: companyColors[category],
                              mt: 1,
                            }}
                          >
                            {category}
                          </Typography>
                          {items.map((item, i) => (
                            <Box
                              key={i}
                              sx={{
                                mb: 1,
                                display: "flex",
                                gap: 1,
                                alignItems: "flex-start",
                              }}
                            >
                              {React.cloneElement(item.icon, {
                                sx: { color: companyColors[category] },
                              })}
                              <Box>
                                <Typography variant="body2" fontWeight="500">
                                  {item.title}
                                </Typography>
                                {item.desc && (
                                  <Typography
                                    variant="caption"
                                    color="text.secondary"
                                  >
                                    {item.desc}
                                  </Typography>
                                )}
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      ))}
                    </Box>
                  </Collapse>
                </Box>
              );
            }

            // Industries
            if (link.name === "Industries") {
              return (
                <Box key={link.name}>
                  <ListItemButton
                    onClick={() => setIndustriesOpen(!industriesOpen)}
                  >
                    <ListItemText
                      primary={link.name}
                      primaryTypographyProps={{
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "orange" : "inherit",
                      }}
                    />
                    {industriesOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={industriesOpen} timeout="auto" unmountOnExit>
                    <Box sx={{ pl: 3 }}>
                      {Object.entries(industriesData).map(
                        ([category, items]) => (
                          <Box key={category} sx={{ mb: 2 }}>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                fontWeight: "bold",
                                color: industriesColors[category],
                                mt: 1,
                              }}
                            >
                              {category}
                            </Typography>
                            {items.map((item, i) => (
                              <Box
                                key={i}
                                sx={{
                                  mb: 1,
                                  display: "flex",
                                  gap: 1,
                                  alignItems: "flex-start",
                                }}
                              >
                                {React.cloneElement(item.icon, {
                                  sx: { color: industriesColors[category] },
                                })}
                                <Box>
                                  <Typography
                                    variant="body2"
                                    fontWeight="500"
                                  >
                                    {item.title}
                                  </Typography>
                                  {item.desc && (
                                    <Typography
                                      variant="caption"
                                      color="text.secondary"
                                    >
                                      {item.desc}
                                    </Typography>
                                  )}
                                </Box>
                              </Box>
                            ))}
                          </Box>
                        )
                      )}
                    </Box>
                  </Collapse>
                </Box>
              );
            }

            // Blog
            if (link.name === "Blog") {
              return (
                <Box key={link.name}>
                  <ListItemButton onClick={() => setBlogOpen(!blogOpen)}>
                    <ListItemText
                      primary={link.name}
                      primaryTypographyProps={{
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "orange" : "inherit",
                      }}
                    />
                    {blogOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={blogOpen} timeout="auto" unmountOnExit>
                    <Box sx={{ pl: 3 }}>
                      {Object.entries(blogData).map(([category, items]) => (
                        <Box key={category} sx={{ mb: 2 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontWeight: "bold",
                              color: blogColors[category],
                              mt: 1,
                            }}
                          >
                            {category}
                          </Typography>
                          {items.map((item, i) => (
                            <Box
                              key={i}
                              sx={{
                                mb: 1,
                                display: "flex",
                                gap: 1,
                                alignItems: "flex-start",
                              }}
                            >
                              {React.cloneElement(item.icon, {
                                sx: { color: blogColors[category] },
                              })}
                              <Box>
                                <Typography variant="body2" fontWeight="500">
                                  {item.title}
                                </Typography>
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      ))}
                    </Box>
                  </Collapse>
                </Box>
              );
            }

            // Regular Links
            return (
              <ListItemButton
                key={link.name}
                component={Link}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                <ListItemText
                  primary={link.name}
                  primaryTypographyProps={{
                    fontWeight: isActive ? "bold" : "normal",
                    color: isActive ? "orange" : "inherit",
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}

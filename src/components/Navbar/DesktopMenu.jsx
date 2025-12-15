"use client";
import React from "react";
import  Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import  Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import { servicesData, extraServices, categoryColors } from "./servicesData";
import { expertiseData, expertiseColors } from "./expertiseData";
import { companyData, companyColors } from "./companyData";
import {
  industriesData,
  industriesColors,
  otherIndustries,
} from "./industriesData";
import { blogData, blogColors } from "./blogData";

export default function DesktopMenu({ links, pathname }) {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
      {links.map((link) => {
        const isActive = pathname === link.href;

        // Services Dropdown
        if (link.name === "Services") {
          return (
            <Box
              key={link.name}
              sx={{
                position: "relative",
                "&:hover .dropdown": { display: "grid" },
              }}
            >
              <Button
                sx={{
                  color: isActive ? "orange" : "inherit",
                  fontWeight: isActive ? "bold" : "normal",
                }}
              >
                {link.name}
              </Button>
              <Box
                className="dropdown"
                sx={{
                  display: "none",
                  position: "absolute",
                  top: "100%",
                  left: "50%", // 👈 anchor in the middle
                  transform: "translateX(-50%)", // 👈 shift back half its width
                  width: "1200px",
                  background: "white",
                  boxShadow: 3,
                  borderRadius: 2,
                  p: 5,
                  zIndex: 1200,
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 3,
                //   m:3
                }}
              >
                {Object.entries(servicesData).map(([category, items]) => (
                  <Box key={category}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: "bold", color: "orange", mb: 1 }}
                    >
                      {category}
                    </Typography>
                    {items.map((item, i) => (
                      <Box
                        key={i}
                        sx={{
                          mb: 1,
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1,
                        }}
                      >
                        {React.cloneElement(item.icon, {
                          sx: { color: categoryColors[category] },
                        })}
                        <Box>
                          <Typography variant="body1" fontWeight="500">
                            {item.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.desc}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                ))}

                <Box sx={{ gridColumn: "1 / -1", mt: 3 }}>
                  <Divider sx={{ mb: 2 }} />
                  <Grid container spacing={2}>
                    {extraServices.map((item, i) => (
                      <Grid item xs={12} sm={4} key={i}>
                        <Box display="flex" alignItems="flex-start" gap={1}>
                          {item.icon}
                          <Box>
                            <Typography variant="body1" fontWeight="600">
                              {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {item.desc}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </Box>
          );
        }

        // Industries dropdown
        if (link.name === "Industries") {
          return (
            <Box
              key={link.name}
              sx={{
                position: "relative",
                "&:hover .dropdown": { display: "grid" },
              }}
            >
              <Button
                sx={{
                  color: isActive ? "orange" : "inherit",
                  fontWeight: isActive ? "bold" : "normal",
                }}
              >
                {link.name}
              </Button>
              <Box
                className="dropdown"
                sx={{
                  display: "none",
                  position: "absolute",
                  top: "100%",
                  left: "61%", // 👈 anchor in the middle
                  transform: "translateX(-61%)", // 👈 shift back half its width
                  width: "1200px",
                  background: "white",
                  boxShadow: 3,
                  borderRadius: 2,
                   p: 5,
                  zIndex: 1200,
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 3,
                }}
              >
                {Object.entries(industriesData).map(([category, items]) => (
                  <Box key={category}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "bold",
                        color: industriesColors[category],
                        mb: 1,
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
                          alignItems: "flex-start",
                          gap: 1,
                        }}
                      >
                        {React.cloneElement(item.icon, {
                          sx: { color: industriesColors[category] },
                        })}
                        <Box>
                          <Typography variant="body1" fontWeight="500">
                            {item.title}
                          </Typography>
                          {item.desc && (
                            <Typography variant="body2" color="text.secondary">
                              {item.desc}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                ))}

                {otherIndustries && (
                  <Box sx={{ gridColumn: "1 / -1", mt: 3 }}>
                    <Divider sx={{ mb: 2 }} />
                    <Grid container spacing={2}>
                      {otherIndustries.map((item, i) => (
                        <Grid item md={4} key={i}>
                          {" "}
                          {/* ✅ Always 3 columns */}
                          <Box display="flex" alignItems="flex-start" gap={1}>
                            {item.icon}
                            <Box>
                              <Typography variant="body1" fontWeight="600">
                                {item.title}
                              </Typography>
                              <Typography
                                variant="body2"
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
                )}
              </Box>
            </Box>
          );
        }

        // Expertise Dropdown
        if (link.name === "Expertise") {
          return (
            <Box
              key={link.name}
              sx={{
                position: "relative",
                "&:hover .dropdown": { display: "grid" },
              }}
            >
              <Button
                sx={{
                  color: isActive ? "orange" : "inherit",
                  fontWeight: isActive ? "bold" : "normal",
                }}
              >
                {link.name}
              </Button>
              <Box
                className="dropdown"
                sx={{
                  display: "none",
                  position: "absolute",
                  top: "100%",
                  left: "72%", // 👈 anchor in the middle
                  transform: "translateX(-72%)", // 👈 shift back half its width
                  width: "1200px",
                  background: "white",
                  boxShadow: 3,
                  borderRadius: 2,
                   p: 5,
                  zIndex: 1200,
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 3,
                }}
              >
                {Object.entries(expertiseData).map(([category, items]) => (
                  <Box key={category}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "bold",
                        color: expertiseColors[category],
                        mb: 1,
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
                          alignItems: "flex-start",
                          gap: 1,
                        }}
                      >
                        {React.cloneElement(item.icon, {
                          sx: { color: expertiseColors[category] },
                        })}
                        <Box>
                          <Typography variant="body1" fontWeight="500">
                            {item.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.desc}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                ))}
              </Box>
            </Box>
          );
        }

        // company dropdown
        // if (link.name === "Company") {
        //   return (
        //     <Box
        //       key={link.name}
        //       sx={{
        //         position: "relative",
        //         "&:hover .dropdown": { display: "grid" },
        //       }}
        //     >
        //       <Button
        //         sx={{
        //           color: isActive ? "orange" : "inherit",
        //           fontWeight: isActive ? "bold" : "normal",
        //         }}
        //       >
        //         {link.name}
        //       </Button>
        //       <Box
        //         className="dropdown"
        //         sx={{
        //           display: "none",
        //           position: "absolute",
        //           top: "100%",
        //           left: "72%", // 👈 anchor in the middle
        //           transform: "translateX(-72%)",
        //           width: "800px",
        //           background: "white",
        //           boxShadow: 3,
        //           borderRadius: 2,
        //            p: 5,
        //           zIndex: 1200,
        //           gridTemplateColumns: "repeat(2, 1fr)",
        //           gap: 3,
        //         }}
        //       >
        //         {Object.entries(companyData).map(([category, items]) => (
        //           <Box key={category}>
        //             <Typography
        //               variant="subtitle1"
        //               sx={{
        //                 fontWeight: "bold",
        //                 color: companyColors[category],
        //                 mb: 1,
        //               }}
        //             >
        //               {category}
        //             </Typography>
        //             {items.map((item, i) => (
        //               <Box
        //                 key={i}
        //                 sx={{
        //                   mb: 1,
        //                   display: "flex",
        //                   alignItems: "flex-start",
        //                   gap: 1,
        //                 }}
        //               >
        //                 {React.cloneElement(item.icon, {
        //                   sx: { color: companyColors[category] },
        //                 })}
        //                 <Box>
        //                   <Typography variant="body1" fontWeight="500">
        //                     {item.title}
        //                   </Typography>
        //                   {item.desc && (
        //                     <Typography variant="body2" color="text.secondary">
        //                       {item.desc}
        //                     </Typography>
        //                   )}
        //                 </Box>
        //               </Box>
        //             ))}
        //           </Box>
        //         ))}
        //       </Box>
        //     </Box>
        //   );
        // }

        // if (link.name === "Blog") {
        //   return (
        //     <Box
        //       key={link.name}
        //       sx={{
        //         position: "relative",
        //         "&:hover .dropdown": { display: "grid" },
        //       }}
        //     >
        //       <Button
        //         sx={{
        //           color: isActive ? "orange" : "inherit",
        //           fontWeight: isActive ? "bold" : "normal",
        //         }}
        //       >
        //         {link.name}
        //       </Button>
        //       <Box
        //         className="dropdown"
        //         sx={{
        //           display: "none",
        //           position: "absolute",
        //           top: "100%",
        //           left: "85%", // 👈 anchor in the middle
        //           transform: "translateX(-85%)",
        //           width: "800px",
        //           background: "white",
        //           boxShadow: 3,
        //           borderRadius: 2,
        //            p: 5,
        //           zIndex: 1200,
        //           gridTemplateColumns: "repeat(3, 1fr)",
        //           gap: 3,
        //         }}
        //       >
        //         {Object.entries(blogData).map(([category, items]) => (
        //           <Box key={category}>
        //             <Typography
        //               variant="subtitle1"
        //               sx={{
        //                 fontWeight: "bold",
        //                 color: blogColors[category],
        //                 mb: 1,
        //               }}
        //             >
        //               {category}
        //             </Typography>
        //             {items.map((item, i) => (
        //               <Box
        //                 key={i}
        //                 sx={{
        //                   mb: 1,
        //                   display: "flex",
        //                   alignItems: "flex-start",
        //                   gap: 1,
        //                 }}
        //               >
        //                 {React.cloneElement(item.icon, {
        //                   sx: { color: blogColors[category] },
        //                 })}
        //                 <Box>
        //                   <Typography variant="body1" fontWeight="500">
        //                     {item.title}
        //                   </Typography>
        //                 </Box>
        //               </Box>
        //             ))}
        //           </Box>
        //         ))}
        //       </Box>
        //     </Box>
        //   );
        // }

        return (
          <Button
            key={link.name}
            component={Link}
            href={link.href}
            sx={{
              mt: -.5,
              color:
                link.name === "Contact"
                  ? "white"
                  : isActive
                  ? "orange"
                  : "inherit",
              fontWeight: isActive ? "bold" : "normal",
              backgroundColor: link.name === "Contact" ? "#ff9800" : "transparent",
              px: link.name === "Contact" ? 3 : 2,
              py: link.name === "Contact" ? 1.2 : 1,
              borderRadius: link.name === "Contact" ? "50px" : 1,
              textTransform: "none", // keep text as-is
              "&:hover": {
                backgroundColor:
                  link.name === "Contact" ? "ff9800" : "rgba(0,0,0,0.04)",
              },
            }}
          >
            {link.name}
          </Button>
        );
      })}
    </Box>
  );
}

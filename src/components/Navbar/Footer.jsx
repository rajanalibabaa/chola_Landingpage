import React from "react";
import { Box, Typography, Grid, IconButton, Link } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
	return (
		<Box component="footer" sx={{
			bgcolor: "#222",
			color: "#fff",
			py: 4,
			px: { xs: 2, sm: 6 },
			mt: 8,
		}}>
			<Grid container spacing={2} alignItems="center" sx={{display:"flex"}}>
				<Grid item xs={12} md={4}>
					<Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
						Chola Business Automation PVT LTD
					</Typography>
					<Typography variant="body2" color="grey.400">
						Empowering your digital journey.
					</Typography>
				</Grid>
                <Grid>
				<Grid item xs={12} md={4} sx={{ textAlign: { xs: "left", md: "Right" } }}>
					<Box>
				
						<Link href="/contact" color="inherit" underline="hover" sx={{ mx: 1 }}>
							Contact
						</Link>
					
					</Box>
				</Grid>
				<Grid item xs={12} md={4} sx={{ textAlign: { xs: "left", md: "right" } }}>
					<IconButton href="https://facebook.com" target="_blank" sx={{ color: "#fff" }}>
						<FacebookIcon />
					</IconButton>
					<IconButton href="https://twitter.com" target="_blank" sx={{ color: "#fff" }}>
						<TwitterIcon />
					</IconButton>
					<IconButton href="https://linkedin.com" target="_blank" sx={{ color: "#fff" }}>
						<LinkedInIcon />
					</IconButton>
				</Grid>
                </Grid>
			</Grid>
			<Box sx={{ borderTop: "1px solid #444", mt: 3, pt: 2, textAlign: "center" }}>
				<Typography variant="body2" color="grey.500">
					&copy; {new Date().getFullYear()} Chola Technologies. All rights reserved.
				</Typography>
			</Box>
		</Box>
	);
};

export default Footer;

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
			<Grid container spacing={2} alignItems="center"  >
		
                	<Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                        		<Grid item xs={12} md={8}>
					<Typography variant="h6" fontWeight="bold" sx={{ mb: 0 }}>
						<Box component="span" sx={{ color: "#ff9800", display: "inline" }}>C</Box>HOL<Box component="span" sx={{ color: "#74ed3f", display: "inline" }}>A</Box> Business Automation PVT LTD
					</Typography>
					<Typography variant="body2" color="grey.400">
						Empowering your digital journey.
					</Typography>
				</Grid>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" ,ml:"52%"}}>
				<Link href="/contact" color="inherit" underline="hover" sx={{ mx: 1, fontWeight: "bold" }}>
					Contact
				</Link>
				<Link href="/careers" color="inherit" underline="hover" sx={{ mx: 1, fontWeight: "bold" }}>
					Careers
				</Link>
				<IconButton href="https://facebook.com" target="_blank" sx={{ color: "#fff" }}>
					<FacebookIcon />
				</IconButton>
				<IconButton href="https://twitter.com" target="_blank" sx={{ color: "#fff" }}>
					<TwitterIcon />
				</IconButton>
				<IconButton href="https://linkedin.com" target="_blank" sx={{ color: "#fff" }}>
					<LinkedInIcon />
				</IconButton>
			</Box>
			</Grid>
			{/* End-of-footer right side links and icons */}
		
			<Box sx={{ borderTop: "1px solid #444", mt: 3, pt: 2, textAlign: "center" }}>
				<Typography variant="body2" color="grey.500">
					&copy; {new Date().getFullYear()} Chola Business Automation PVT LTD. All rights reserved.
				</Typography>
			</Box>
		</Box>
	);
};

export default Footer;

import React from "react";
import { Box, Typography, TextField, Button, Link, Grid } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import logo from "../assets/logo2.png"

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#121212", color: "#fff", p: 4 }}>
      <Grid container spacing={3}>
        {/* Left Section: Logo and Description */}
        <Grid item xs={12} sm={4}>
         <img src={logo} alt = "logo" />
          <Typography variant="body1" sx={{ mt: 1 }}>
            Innovative IT solutions tailored to your needs.
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
            <Link href="#" color="inherit">
              <Facebook />
            </Link>
            <Link href="#" color="inherit">
              <Instagram />
            </Link>
            <Link href="#" color="inherit">
              <LinkedIn />
            </Link>
            <Link href="#" color="inherit">
              <Twitter />
            </Link>
          </Box>
        </Grid>

        {/* Middle Section: Links */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Links
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Typography variant="body2">
              <Link href="#" color="inherit" underline="none">
                Home
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit" underline="none">
                About Us
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit" underline="none">
                Services
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit" underline="none">
                Blog
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit" underline="none">
                Contact Us
              </Link>
            </Typography>
          </Box>
        </Grid>

        {/* Right Section: Newsletter */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Newsletter
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Your Email"
            fullWidth
            sx={{
              mt: 2,
              bgcolor: "#fff",
              borderRadius: 1,
              input: { color: "#000" },
            }}
          />
          <Button
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "red",
              "&:hover": { bgcolor: "darkred" },
            }}
            fullWidth
          >
            Subscribe
          </Button>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          borderTop: "1px solid #444",
          mt: 3,
          pt: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="body2">
          ALL RIGHTS RESERVED BY @AIXESS.COM 2025
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

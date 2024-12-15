import React, { useEffect } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import ServiceCard from "./serviceCard";
import services from "../data/data";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const ServicesSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing style
      once: true, // Animation runs only once
    });
  }, []);

  return (
    <>
      <Box sx={{ py: { xs: 4, sm: 6, md: 8 }, backgroundColor: "#fff" }} id="services-section">
        <Container maxWidth="lg">
          {/* Section Title */}
          <Box
            sx={{ textAlign: "center", mb: { xs: 4, sm: 6 } }}
            data-aos="fade-up" // Fade-up animation for the title
          >
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Adjust title size for different screens
              }}
            >
              Our Services
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{
                maxWidth: "600px",
                mx: "auto",
                mb: { xs: 3, sm: 4 },
                fontSize: { xs: "14px", sm: "16px" }, // Adjust subtitle font size for mobile
              }}
            >
              Tailored services to help your business thrive in the digital
              landscape with cutting-edge technology.
            </Typography>
          </Box>

          {/* Service Cards */}
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid
                item
                xs={12} // 1 column on mobile
                sm={6}  // 2 columns on small screens (tablets)
                md={4}  // 3 columns on larger screens (desktops)
                key={index}
                data-aos="zoom-in" // Zoom-in animation for each card
                data-aos-delay={index * 100} // Delay for a staggered effect
              >
                <ServiceCard service={service} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ServicesSection;

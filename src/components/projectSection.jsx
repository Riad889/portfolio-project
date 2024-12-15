import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Box, Typography } from "@mui/material";
import img1 from "../assets/p1.png";
import img2 from "../assets/p2.png";
import img3 from "../assets/p3.png";

const ProjectSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <Box
      sx={{
        marginTop: "50px",
        backgroundColor: "rgba(255, 26, 26, 0.07)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: "20px", sm: "40px 20px" }, // Adjust padding based on screen size
      }}
    >
      {/* Section Title */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontFamily: "'Poppins', sans-serif",
            color: "text.primary",
          }}
          data-aos="fade-up"
        >
          Our Recent Works
        </Typography>
      </Box>

      {/* Image Gallery */}
      <Box
        sx={{
          width: { xs: "100%", sm: "70%" }, // Full width on mobile, 70% on larger screens
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {[img1, img2, img3].map((img, index) => (
          <img
            key={index}
            style={{
              height: "auto", // Adjust height for responsiveness
              width: "100%", // Make the image width responsive
              maxWidth: "386px", // Prevent images from being too wide
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              objectFit: "cover",
            }}
            src={img}
            alt={`Project ${index + 1}`}
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProjectSection;

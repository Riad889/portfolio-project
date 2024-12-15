import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import people from "../assets/people.jpg";

const AboutSection = () => {
  const imageRef = useRef(null); // Ref for the image
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the image is visible
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <Box
      sx={{
        marginTop: "50px",
        backgroundColor: "rgba(255, 26, 26, 0.07)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: "20px", md: "40px 20px" }, // Responsive padding
      }}
    >
      {/* Section Title */}
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontFamily: "'Poppins', sans-serif",
            color: "text.primary",
            fontSize: { xs: "28px", md: "36px" }, // Responsive font size
          }}
        >
          Who Are We?
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{
            maxWidth: "600px",
            mx: "auto",
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: "14px", md: "16px" }, // Responsive font size
          }}
        >
          At Alxess, we specialize in innovative IT solutions tailored to your
          needs, combining creativity and technology to help your business
          thrive in the digital age.
        </Typography>
      </Box>

      {/* Image Section */}
      <Box
        ref={imageRef} // Attach ref to the container
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          mb: { xs: 4, md: 6 },
          transform: isVisible ? "scale(1)" : "scale(0.8)", // Apply scale based on visibility
          opacity: isVisible ? 1 : 0, // Apply opacity based on visibility
          transition: "transform 1s ease-in-out, opacity 1s ease-in-out", // Smooth transition
        }}
      >
        <img
          style={{
            height: "auto",
            width: "100%",
            maxWidth: "1214px",
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
          src={people}
          alt="Who Are We"
        />
      </Box>

      {/* Call-to-Action Button */}
      <Button
        sx={{
          borderRadius: "30px",
          backgroundColor: "#FF1A1A",
          color: "white",
          height: { xs: "48px", md: "56px" }, // Responsive height
          width: { xs: "120px", md: "148px" }, // Responsive width
          fontFamily: "'Poppins', sans-serif",
          fontSize: { xs: "14px", md: "16px" }, // Responsive font size
          textTransform: "none",
          transition: ".5s",
          "&:hover": {
            backgroundColor: "white",
            color: "black",
            border: "1px solid black",
          },
        }}
      >
        Read More
      </Button>
    </Box>
  );
};

export default AboutSection;

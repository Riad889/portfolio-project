import React, { useEffect } from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import wp1 from "../assets/wp1.png";
import wp2 from "../assets/wp2.png";
import wp3 from "../assets/wp3.png";

const NewsAndBlogs = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in ms
      easing: "ease-in-out", // Easing for the animation
      once: true, // Animation occurs only once on scroll
    });
  }, []);

  const cards = [
    {
      title: "Custom App Development",
      description:
        "We create bespoke applications that meet your unique business needs and enhance user experience.",
      image: wp1,
    },
    {
      title: "Custom App Development",
      description:
        "We create bespoke applications that meet your unique business needs and enhance user experience.",
      image: wp2,
    },
    {
      title: "Custom App Development",
      description:
        "We create bespoke applications that meet your unique business needs and enhance user experience.",
      image: wp3,
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#FDECEE", padding: "40px 20px", cursor: "pointer" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "20px",
          fontFamily: "'Poppins', sans-serif",
        }}
        data-aos="fade-up" // Animation for the heading
      >
        News & Blogs
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            data-aos="zoom-in" // Animation for each card
            sx={{
              maxWidth: 345,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              borderRadius: "12px",
              backgroundColor: "white",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={card.image}
              alt={card.title}
              sx={{
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            />
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
              >
                {card.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default NewsAndBlogs;

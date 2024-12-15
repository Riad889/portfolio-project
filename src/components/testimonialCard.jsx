import React, { useEffect } from "react";
import Slider from "react-slick";
import { Box, Typography, Avatar } from "@mui/material";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS

const TestimonialCarousel = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration (in ms)
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation happens only once
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 650,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed
    responsive: [
      {
        breakpoint: 1024, // Tablets and above
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600, // Mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Chris A.",
      title: "Startup Owner",
      image: "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=",
      message:
        "Alexss transformed our digital presence with innovative solutions and exceptional support. Highly recommend their services!",
      bgColor: "#f44336",
      textColor: "white",
    },
    {
      name: "Iris A.",
      title: "Top Owner",
      image: "https://as2.ftcdn.net/v2/jpg/02/23/09/59/1000_F_223095982_nNQW2s1qfAJHMQmE4w1hG5ywvCGAJfMw.jpg",
      message:
        "Their services are top-notch, and their solutions exceeded our expectations!",
      bgColor: "#333",
      textColor: "white",
    },
    {
      name: "Mike C.",
      title: "Business Manager",
      image: "https://static.vecteezy.com/system/resources/thumbnails/007/208/986/small/excited-businessman-in-suit-pointing-with-finger-at-copy-space-and-looking-at-camera-photo.jpg",
      message:
        "Outstanding support and creative solutions! We're thrilled with the results Alexss delivered.",
      bgColor: "#333",
      textColor: "white",
    },
  ];

  return (
    <Box
      sx={{
        margin: "0 auto", // Center the carousel horizontally
        padding: { xs: "20px", sm: "40px" }, // Adjust padding for mobile and larger screens
        borderRadius: "10px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          fontWeight: "bold",
          marginBottom: "20px",
          fontSize: { xs: "1.5rem", sm: "2rem" }, // Adjust heading size on mobile
        }}
        data-aos="fade-down" // AOS Animation for heading
      >
        Client's Review
      </Typography>
      <Box 
        sx={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'center' 
        }}
      >
        <Box 
          sx={{ 
            width: { xs: '100%', sm: '70%' }, // Full width on mobile, 70% on larger screens
            '& .slick-slider': {
              width: '100%',
            },
          }}
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <Box
                key={index}
                data-aos="zoom-in" // AOS Animation for each testimonial card
                sx={{
                  backgroundColor: testimonial.bgColor,
                  borderRadius: "12px",
                  color: testimonial.textColor,
                  textAlign: "center",
                  padding: { xs: "20px", sm: "30px" }, // Adjust padding on mobile
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  sx={{
                    width: { xs: 80, sm: 120 }, // Adjust Avatar size on mobile
                    height: { xs: 80, sm: 120 },
                    margin: "0 auto",
                    marginBottom: "20px",
                    border: "3px solid white",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "'Poppins', sans-serif",
                    marginBottom: "8px",
                    fontSize: { xs: "1rem", sm: "1.25rem" }, // Adjust name size on mobile
                  }}
                >
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontStyle: "italic",
                    marginBottom: "20px",
                    fontSize: { xs: "14px", sm: "16px" }, // Adjust title size on mobile
                  }}
                >
                  {testimonial.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    lineHeight: "1.8",
                    fontSize: { xs: "14px", sm: "16px" }, // Adjust message font size on mobile
                  }}
                >
                  "{testimonial.message}"
                </Typography>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialCarousel;

import React from "react";
import { Box, Button } from "@mui/material";
import heroBanner from "../assets/Subtract.png";

const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          padding: "10px",
          marginTop: "30px",
          marginLeft: "10%",
          position: "relative", // Parent container for absolute positioning
        }}
      >
        {/* Image with Animation */}
        <Box
          sx={{
            animation: "fadeIn 1s ease-out, slideInFromLeft 1s ease-out",
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
            "@keyframes slideInFromLeft": {
              "0%": { transform: "translateX(-100px)" },
              "100%": { transform: "translateX(0)" },
            },
          }}
        >
          <img
            style={{ height: "651px", width: "647.5px" }}
            src={heroBanner}
            alt="hero-banner"
          />
        </Box>

        {/* Text Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            animation: "fadeIn 1.5s ease-out, slideInFromRight 1.5s ease-out",
            "@keyframes slideInFromRight": {
              "0%": { transform: "translateX(100px)" },
              "100%": { transform: "translateX(0)" },
            },
          }}
        >
          {/* First Box */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "412px",
              height: "98px",
              marginLeft: "170px",
              backgroundColor: "#F6F6F6",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              position: "relative",
            }}
          >
            <h1
              style={{
                fontSize: "50px",
                fontFamily: "'Poppins', sans-serif",
                color: "red",
              }}
            >
              150 +{" "}
            </h1>
            <h3 style={{ color: "red" }}>Innovative Excellence</h3>
          </Box>

          {/* Overlapping Box */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "412px",
              height: "98px",
              backgroundColor: "black",
              borderRadius: "12px",
              position: "absolute",
              top: "16.7%",
              left: "-150px",
              zIndex: 2,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h1
              style={{
                fontSize: "50px",
                fontFamily: "'Poppins', sans-serif",
                color: "white",
              }}
            >
              15{" "}
            </h1>
            <h3 style={{ color: "white" }}>Client-Centric Approach</h3>
          </Box>
          <Box
            sx={{
              marginTop: "20%",
              marginLeft: "100px",
            }}
          >
            <h1
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "bolder",
                fontSize: "65px",
                letterSpacing: ".04rem",
                marginBottom: "-40px",
              }}
            >
              Innovation
            </h1>
            <h1
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "65px",
                fontWeight: "100",
                letterSpacing: ".04rem",
              }}
            >
              IT Solutions for
            </h1>
            <h3
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "20px",
                lineHeight: "normal",
                letterSpacing: ".63rem",
              }}
            >
              {" "}
              YOUR BUSINESS
            </h3>
            <Button
              sx={{
                marginTop: "20px",
                borderRadius: "30px",
                backgroundColor: "#FF1A1A",
                color: "white",
                height: "56px",
                width: "155px",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
                textTransform: "none",
                transition: ".5s",
                animation: "fadeIn 2s ease-out",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                  border: "1px solid black",
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;

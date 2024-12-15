import React from "react";
import { Box, Button, Typography } from "@mui/material";
import CompanyIcon from "../assets/logo.png";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "10px 40px",
        marginTop: "20px",
        backgroundColor: "#fff",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo Section */}
      <img
        style={{ width: "200px", height: "auto", cursor: "pointer",marginLeft:'90px' }}
        src={CompanyIcon}
        alt="Company Logo"
      />

      {/* Navigation Links */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "30px",
          marginLeft:'350px'
        }}
      >
        {["Home", "About Us", "Services", "Blogs"].map((item, index) => (
          <Typography
            key={index}
            variant="h6"
            component="div"
            sx={{
              position: "relative",
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "bold",
              color: "text.primary",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "red",
              },
              "&:after": {
                content: '""',
                position: "absolute",
                bottom: "-5px",
                left: 0,
                width: 0,
                height: "2px",
                backgroundColor: "red",
                transition: "width 0.3s ease-in-out",
              },
              "&:hover:after": {
                width: "100%",
              },
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>

      {/* Contact Button */}
      <Button
        sx={{
          borderRadius: "30px",
          backgroundColor: "black",
          color: "white",
          height: "56px",
          marginRight:'40px',
          width: "151px",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "16px",
          textTransform: "none",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s, color 0.3s",
          "&:hover": {
            backgroundColor: "white",
            color: "#FF1A1A",
            border: "1px solid #FF1A1A",
          },
        }}
      >
        Contact Us
      </Button>
    </Box>
  );
};

export default Header;

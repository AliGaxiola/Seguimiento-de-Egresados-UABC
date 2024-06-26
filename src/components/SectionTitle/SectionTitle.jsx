// SectionTitle.jsx
import React from "react";
import { Typography, Box } from "@mui/material";

const SectionTitle = ({ text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "fit-content",
        margin: "0 auto",
        position: "relative",
        my: 5,
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        sx={{
          position: "relative",
          textAlign: "center",
          color: "green",
          "&::after": {
            content: '""',
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "-1px",
            width: "120%",
            height: "1px",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default SectionTitle;

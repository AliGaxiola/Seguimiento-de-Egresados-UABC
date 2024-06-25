import React from "react";
import { Box } from "@mui/material";

const HeroInicio = () => {
  return (
    <Box
      component="div"
      sx={{
        maxHeight: "450px",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        margin: 0,
      }}
    >
      <img
        src="/assets/hero.jpg"
        alt="Background"
        style={{
          width: "100%",
          maxHeight: "auto",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default HeroInicio;

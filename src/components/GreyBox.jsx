import React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

export default function GreyBox() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "grey", // Color de fondo gris
        width: "100%", // Ancho del elemento
        height: "1200px", // Alto del elemento
      }}
    >
      <h1>Home</h1>
      <button onClick={() => navigate("/test")}>Ir a test</button>
    </Box>
  );
}

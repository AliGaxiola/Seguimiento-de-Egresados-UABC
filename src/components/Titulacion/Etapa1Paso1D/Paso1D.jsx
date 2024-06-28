import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

function Paso1D() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{  p: 2, m: "0" }}>
      <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
        <Box
          sx={{
            flex: 1,
            mr: isMobile ? 0 : 2,
            mb: isMobile ? 2 : 0,
          }}
        >
          <Typography
            variant="body1"
            sx={{ mb: 2, fontWeight: "bold", color: "green" }}
          >
            D. En el correo mencionar los siguientes datos:
          </Typography>
          <Typography variant="body1" component="ul" sx={{ mb: 2, pl: 3 }}>
            <li>Numero de matrícula.</li>
            <li>Nombre completo del alumno.</li>
            <li>Unidad Académica.</li>
            <li>Carrera.</li>
            <li>Numero de teléfono celular.</li>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: isMobile ? 1 : 0.5,
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/gmailLogo.png"}
            alt="Icono de Gmail"
            style={{ maxWidth: "50%", maxHeight: isMobile ? "200px" : "70%" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Paso1D;
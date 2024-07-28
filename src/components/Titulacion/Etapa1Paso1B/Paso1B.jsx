import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

function Paso1B() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ p: 2, m: "0" }}>
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
            sx={{ mb: 2, fontWeight: "bold", color: "#00673D" }}
          >
            B. Adjuntar documentación requerida digitalizada con las siguientes
            características:
          </Typography>
          <Typography variant="body1" component="ul" sx={{ mb: 2, pl: 3 }}>
            <li>Escala de Grises.</li>
            <li>Formato de imagen JPG o TIFF.</li>
            <li>Documentos por separado.</li>
            <li>Tamaño del archivo no mayor a 1 mb.</li>
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Nota: La información deberá estar legible.
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
            src={process.env.PUBLIC_URL + "/assets/ArchvoAnimado.png"}
            alt="Documento con marca de verificación"
            style={{ maxWidth: "50%", maxHeight: isMobile ? "200px" : "70%" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Paso1B;

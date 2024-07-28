import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

function Paso2A() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ m: '0', p: 2 }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 2,
        }}
      >
        ETAPA 1 (ALUMNO)
      </Typography>
      <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
        <Box sx={{ flex: 1, mr: isMobile ? 0 : 2, mb: isMobile ? 2 : 0 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Departamento de Servicios Estudiantiles y Gestión Escolar
            <br />
            Requisitos para Verificación de Documentos
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <Typography
              component="span"
              sx={{ fontWeight: "bold", color: "#00673D" }}
            >
              A. Enviar correo electrónico desde tu cuenta institucional a la siguiente dirección:
            </Typography>
            <br />
            <Typography
              component="span"
              sx={{ fontWeight: "bold", color: "#00673D" }}
            >
              vddtitulacion.dsegetji@uabc.edu.mx
            </Typography>
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <Typography
              component="span"
              sx={{ fontWeight: "bold" }}
            >
              Documentos Originales requeridos para su Digitalización:
            </Typography>
            <br />
            1. Acta de Nacimiento. Adopción o Reconocimiento.
            <br />
            2. Certificado de Bachillerato o Dictamen de Revalidación.
            <br />
            3. Certificado Parcial de Bachillerato si curso dos o más escuelas.
            <br />
            (Documento que no esté expedido por la SEP deberá estar legalizado por el Gobierno del Estado de procedencia).
            <br />
            4. Certificado de Estudios Profesionales.
            <br />
            5. Constancia de Servicio Social dirigido a Profesiones
            <br />
            (Se solicita en el Departamento de Apoyo a la Extensión de la Cultura y Vinculación).
            <br />
            6. CURP tamaño carta, impresa con fecha reciente.
            <br />
            7. Constancia de acreditación de lengua extranjera. Egresados 2006-2 en adelante.
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
            src={process.env.PUBLIC_URL + "/assets/CimarronAnimado.png"}
            alt="Cimarron-Animado"
            style={{ maxWidth: "100%", maxHeight: isMobile ? "200px" : "70%" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Paso2A;

import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Paso1A from "../Titulacion/Etapa1Paso1A/Paso1A";
import Paso1B from "../Titulacion/Etapa1Paso1B/Paso1B";
import Paso1C from "../Titulacion/Etapa1Paso1C/Paso1C";
import Paso1D from "../Titulacion/Etapa1Paso1D/Paso1D";
import Etapa2Paso1A from "../Titulacion/Etapa2Paso1/Etapa2Paso1A";
//import Boton from "../Boton.jsx/Boton";
//import pdfUrl from "../../../src/pdfs/Paso 1 - Titulación-acto académico.pdf";
import CuadroTexto from "../CuadroTexto/CuadroTexto";
import SectionTitle from "../SectionTitle/SectionTitle";

function GridTitulacion() {
  return (
    <>
      <Box sx={{ flexGrow: 1, px: { xs: 15, md: 30 }, padding: 2, mt: 5 }}>
        <Grid container justifyContent="center" gap={2}>
          <Grid item xs={12}>
            {/* <Typography
              variant="h3"
              component="h2"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: 2,
              }}
            >
              ACTOS ACADÉMICOS
            </Typography> */}
             <SectionTitle text="ACTOS ACADÉMICOS" textSx={{ fontSize: '50px', marginTop: 0}} boxSx={{my: 0, mb: 2}}/>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ border: "1px solid green", width: "auto", height: "auto" }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: 2,
                mt: "30px",
              }}
            >
              PASO 1 - CERTIFICADO DE ESTUDIOS PROFESIONALES Y CERTIFICACIÓN DE
              PASANTE
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {/* <Boton
                texto="Requisitos y procesos para actos académicos."
                pdfUrl={pdfUrl}
              /> */}
              <CuadroTexto texto="REQUISITOS Y PROCESOS PARA ACTOS ACADÉMICOS." />
            </Box>
            <Paso1A />
          </Grid>
          <Grid item xs={12} sx={{ border: "1px solid green", height: "auto" }}>
            <Paso1B />
          </Grid>
          <Grid item xs={12} sx={{ border: "1px solid green", height: "auto" }}>
            <Paso1C />
          </Grid>
          <Grid item xs={12} sx={{ border: "1px solid green", height: "auto" }}>
            <Paso1D />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, px: { xs: 15, md: 30 }, padding: 2, mt: "10px" }}>
        <Grid container gap={2}>
          <Grid
            item
            xs={12}
            sx={{ border: "1px solid green", width: "auto", height: "auto" }}
          >
            <Etapa2Paso1A />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default GridTitulacion;

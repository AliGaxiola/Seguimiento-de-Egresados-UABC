import React from 'react'
import { Grid, Box, Typography } from "@mui/material";
import Paso3U from '../Paso3/Paso3U';
import Paso3D from '../Paso3/Paso3D';
import Paso3T from '../Paso3/Paso3T';
import Flechas from '../../Flechas/Flechas';

function GridTitulacionTres() {
    return (
        <>
          <Box sx={{ flexGrow: 1, px: { xs: 15, md: 30 }, padding: 2, mt: 5 }}>
            <Grid container gap={2}>
              <Grid
                item
                xs={12}
                sx={{ border: "1px solid green", width: "auto", height: "auto" }}
              >
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    marginBottom: 2,
                  }}
                >
                  PASO 3 - PRESENTAR ANTE COORDINACIÓN DE
                  TITULACIÓN FTYM
                </Typography>
                <Paso3U />
              </Grid>
              <Grid item xs={12} sx={{ border: "1px solid green", height: "auto" }}>
                <Paso3D />
              </Grid>
              <Grid item xs={12} sx={{ border: "1px solid green", height: "auto" }}>
                <Paso3T />
              </Grid>
              <Grid item xs={12} sx={{ width: "auto", height: "auto", mt: 2 }}>
                <Flechas
                  textoIzquierda="Regresar al paso 1 y 2"
                  textoDerecha="Regresar a inicio"
                  rutaIzquierda="/pasos-titulacion"
                  rutaDerecha="/"
                />
              </Grid>
            </Grid>
          </Box>
        </>
    );
}

export default GridTitulacionTres
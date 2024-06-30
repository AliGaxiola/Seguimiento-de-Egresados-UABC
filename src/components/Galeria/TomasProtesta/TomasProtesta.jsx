import * as React from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Container, Grid, Typography } from "@mui/material";
import CardBox from "../../CardBox/CardBox";

function TomasProtesta() {
  return (
    <>
      <SectionTitle text="Tomas de Protesta" />

      <Container maxWidth="xl" sx={{ marginBottom: 4 }}>
        {/* Generacion 2024-1 */}
        <Typography
          variant="h4"
          component="h2"
          sx={{ marginBottom: 5, textAlign: "center" }}
        >
          2024-1
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <CardBox
              image="/assets/hero.jpg"
              title="Acto"
              content="Aquí se coloca la descripción como dónde se realizó el evento, qué facultad lo presentó, su generación, etc."
            />
          </Grid>
        </Grid>

        {/* Generacion 2023-2 */}
        <Typography
          variant="h4"
          component="h2"
          sx={{ marginTop: 5, marginBottom: 5, textAlign: "center" }}
        >
          2023-2
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <CardBox
              image="/assets/hero.jpg"
              title="Acto"
              content="Descripción del evento 2023-2."
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default TomasProtesta;

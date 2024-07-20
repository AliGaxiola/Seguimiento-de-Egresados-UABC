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
        <Grid container justifyContent="center">
          <Grid item xs={10} sm={12} md={11}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                marginBottom: 5,
                textAlign: "center",
                fontSize: 28,
                bgcolor: "#dd971a",
                borderRadius: 1,
                padding: 1,
              }}
            >
              2024-1
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <CardBox image="/assets/FotosGaleria/TP_2024-1-1.jpeg" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <CardBox image="/assets/FotosGaleria/TP_2024-1-2.jpeg" />
          </Grid>
        </Grid>

        {/* Generacion 2023-2 */}
        <Grid container justifyContent="center">
          <Grid item xs={10} sm={12} md={11}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                marginTop: 5,
                marginBottom: 5,
                textAlign: "center",
                fontSize: 28,
                bgcolor: "#dd971a",
                borderRadius: 1,
                padding: 1,
              }}
            >
              2023-2
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <CardBox image="/assets/FotosGaleria/TP_2023-2-1.jpeg" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <CardBox image="/assets/FotosGaleria/TP_2023-2-2.jpeg" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default TomasProtesta;

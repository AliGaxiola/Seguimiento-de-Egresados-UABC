import * as React from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Container, Grid, Typography } from "@mui/material";
import CardBox from "../../CardBox/CardBox";

function ActosAcademicos() {
  return (
    <>
      <SectionTitle text="Actos Académicos" textSx={{ fontSize: "42px" }} />

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
            <CardBox
              image="/assets/FotosGaleria/AA_GT_2024-1.jpeg"
              title="Gestión Turística"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <CardBox
              image="/assets/FotosGaleria/AA_M_2024-1-1.jpeg"
              title="Mercadotecnia"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <CardBox
              image="/assets/FotosGaleria/AA_M_2024-1-2.jpeg"
              title="Mercadotecnia"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ActosAcademicos;

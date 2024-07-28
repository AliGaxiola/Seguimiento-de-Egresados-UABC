import React from "react";
import { Box, Typography, Link, List, ListItem } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        p: 10,
        backgroundColor: "#D3912A",
        display: "flex",
        color: "white",
        borderTop: "1px solid black",
        justifyContent: "space-around",
        marginTop: "120px"
      }}
    >
      <Box sx={{ mb: 1 }}>
        <Typography variant="body1">
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            FTYM
          </Typography>
          <br />
          Facultad de Turismo y Mercadotecnia
          <br />
          Universidad 14418, UABC, Parque Internacional Industrial Tijuana,
          22390
          <br />
          Tijuana, B.C.
          <br />
          Tel: 6649797578 ext. 55521
        </Typography>
      </Box>

      <Box>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
          Enlaces de interés
        </Typography>
        <List>
          <ListItem sx={{p: '0'}}>
            <Link
              href="http://ftm.tij.uabc.mx/"
              target="_blank"
              rel="noopener"
              color="inherit"
              sx={{ "&:hover": { color: "black" } }}
            >
              Facultad de Turismo y Mercadotecnia
            </Link>
          </ListItem>
          <br />
          <ListItem sx={{p: '0'}}>
            <Link
              href="http://www.bolsadetrabajo.uabc.mx/vacantes/empleos/inicio/"
              target="_blank"
              rel="noopener"
              color="inherit"
              sx={{ "&:hover": { color: "black" } }}
            >
              Bolsa de trabajo
            </Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Footer;

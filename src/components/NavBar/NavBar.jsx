import React from "react";
import { useState } from "react";
import Link from "@mui/material/Link";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link as RouterLink } from "react-router-dom";

function NavBar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth={false} disableGutters>
      <nav>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "120px",
            my: 3,
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              flexShrink: 0,
              ml: { xs: 2, md: 3 }, // Margen a la izquierda solo en pantallas pequeñas
              width: { xs: "100px", sm: "200px", md: "250px" }, // Ajuste de tamaño en pantallas pequeñas y medianas
            }}
          >
            <img
              src={
                isSmallScreen ? "/assets/Logo_chico.png" : "/assets/Logo.png"
              } // Cambiar imagen en pantallas pequeñas
              alt="UABC Logo"
              style={{ height: "auto", width: "100%" }}
            />
          </Box>

          {/* Titulos */}
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "center",
              px: { xs: 2, md: 4 },
              maxHeight: "100%",
              mr: { xs: 2, md: 3 },
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                marginBottom: 1,
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: "medium",
                color: "green",
              }}
            >
              Universidad Autónoma de Baja California
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: "1rem", md: "1.5rem" },
                fontWeight: "regular",
                color: "green",
              }}
            >
              Coordinación de Seguimiento a Egresados y Titulación
            </Typography>
          </Box>

          {/* Espacio en blanco a la derecha, se quita en tamaño de pantalla chica*/}
          <Box
            sx={{
              flexShrink: 0,
              width: "250px",
              display: { xs: "none", md: "block" },
            }}
          />
        </Box>

        {/* Navegación */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: 2,
            background: "green",
            p: 2,
          }}
        >
          <Link
            href="/"
            underline="none"
            sx={{
              color: "white",
              flexBasis: "auto",
              "&:hover": {
                bgcolor: "darkgreen",
              },
            }}
          >
            Inicio
          </Link>
          <Link
            href="/test"
            underline="none"
            sx={{
              color: "white",
              flexBasis: "auto",
              "&:hover": {
                bgcolor: "darkgreen",
              },
            }}
          >
            Actos Académicos
          </Link>
          <Link
            href="/pasos-titulacion"
            underline="none"
            sx={{
              color: "white",
              flexBasis: "auto",
              "&:hover": {
                bgcolor: "darkgreen",
              },
            }}
          >
            Titulación
          </Link>
          <Link
            href="/test"
            underline="none"
            sx={{
              color: "white",
              flexBasis: "auto",
              "&:hover": {
                bgcolor: "darkgreen",
              },
            }}
          >
            Potenciales a egresar
          </Link>
          <Link
            component="button"
            onClick={handleClick}
            underline="none"
            sx={{
              color: "white",
              flexBasis: "auto",
              "&:hover": {
                bgcolor: "darkgreen",
              },
            }}
          >
            Galería
          </Link>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            PaperProps={{
              sx: {
                bgcolor: "green",
                "& .MuiMenuItem-root": {
                  color: "white",
                  "&:hover": {
                    bgcolor: "darkgreen",
                  },
                },
                marginTop: 1,
              },
            }}
          >
            <MenuItem
              component={RouterLink}
              to="/galeria-actos-academicos"
              onClick={handleClose}
            >
              Actos Académicos
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/galeria-tomas-protesta"
              onClick={handleClose}
            >
              Toma de Protesta
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/galeria-potenciales-egresar"
              onClick={handleClose}
            >
              Ceremonia Potenciales a Egresar
            </MenuItem>
          </Menu>
        </Box>
      </nav>
    </Container>
  );
}

export default NavBar;

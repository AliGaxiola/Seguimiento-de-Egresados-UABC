import React from 'react';
import Box from '@mui/material/Box';

export default function GreyBox() {
  return (
    <Box
      sx={{
        backgroundColor: 'grey', // Color de fondo gris
        width: '100%', // Ancho del elemento
        height: '1200px', // Alto del elemento
      }}
    >
      Contenido
    </Box>
  );
}
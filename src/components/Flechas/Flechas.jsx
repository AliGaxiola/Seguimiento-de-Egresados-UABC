import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

function Flechas({ textoIzquierda, textoDerecha, textoInferior, rutaIzquierda, rutaDerecha }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Link to={rutaIzquierda} style={{ textDecoration: 'none', color: 'inherit' }}>
            <IconButton color="primary" size="large">
              <ArrowBackIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Link>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>{textoIzquierda}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <Link to={rutaDerecha} style={{ textDecoration: 'none', color: 'inherit' }}>
            <IconButton color="primary" size="large">
              <ArrowForwardIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Link>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>{textoDerecha}</Typography>
        </Box>
      </Box>
      {textoInferior && (
        <Typography variant="body1" sx={{ fontStyle: 'italic', fontWeight: 'bold', textAlign: 'center' }}>
          {textoInferior}
        </Typography>
      )}
    </Box>
  );
}

export default Flechas;
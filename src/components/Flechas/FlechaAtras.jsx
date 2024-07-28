import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

function FlechaAtras({ textoIzquierda, textoInferior, rutaIzquierda }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
        <Link to={rutaIzquierda} style={{ textDecoration: 'none', color: 'inherit' }}>
          <IconButton color="primary" size="large">
            <ArrowBackIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Link>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1, textAlign: 'center' }}>{textoIzquierda}</Typography>
      </Box>
      {textoInferior && (
        <Typography variant="body1" sx={{ fontStyle: 'italic', fontWeight: 'bold', textAlign: 'center', width: '100%' }}>
          {textoInferior}
        </Typography>
      )}
    </Box>
  );
}

export default FlechaAtras;
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Flechas({ textoIzquierda, textoDerecha, textoInferior }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="primary" size="large">
            <ArrowBackIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 'bold', ml: 1 }}>{textoIzquierda}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mr: 1 }}>{textoDerecha}</Typography>
          <IconButton color="primary" size="large">
            <ArrowForwardIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Box>
      </Box>
      {textoInferior && (
        <Typography variant="body1" sx={{ fontStyle: 'italic', fontWeight: 'bold' }}>
          {textoInferior}
        </Typography>
      )}
    </Box>
  );
}

export default Flechas;
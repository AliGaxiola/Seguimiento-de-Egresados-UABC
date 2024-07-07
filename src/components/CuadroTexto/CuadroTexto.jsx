import React from 'react';
import { Box, Typography } from '@mui/material';

function CuadroTexto({ texto }) {
  return (
    <Box 
      sx={{
        backgroundColor: '#c4850d',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
      }}
    >
      <Typography variant="body1">
        {texto}
      </Typography>
    </Box>
  );
}

export default CuadroTexto;

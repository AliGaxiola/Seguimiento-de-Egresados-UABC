import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)({
  backgroundColor: '#D28B00',
  color: '#FFFFFF',
  borderRadius: '10px', 
  padding: '10px 20px', 
  '&:hover': {
    backgroundColor: '#B37800', 
  },
});

function Boton({ texto, pdfUrl }) {
  const handleClick = () => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <CustomButton variant="contained" onClick={handleClick}>
      {texto}
    </CustomButton>
  );
}

export default Boton;
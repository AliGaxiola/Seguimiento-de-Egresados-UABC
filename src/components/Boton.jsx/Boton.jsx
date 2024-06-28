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

function Boton({ texto }) {
  return (
    <CustomButton variant="contained">
      {texto}
    </CustomButton>
  );
}

export default Boton;

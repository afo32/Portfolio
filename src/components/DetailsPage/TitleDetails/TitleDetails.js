import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './TitleDetails.css';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import { Link } from 'react-router-dom';

export function TitleDetails() {
    return (
      <div>
      <Link to="/">
        <Stack className='logoDetails' direction="row" spacing={3}>
      <IconButton aria-label="coffeeMaker" className='iconBt'>
      <CoffeeMakerIcon className='icon' />
      </IconButton>
      </Stack>
      </Link>
        <Box className='boxDetails'>
      <Typography className='titleDetails'  variant="h1" gutterBottom >
        I design & build digital products
      </Typography>
      </Box>
      </div>
    )
}
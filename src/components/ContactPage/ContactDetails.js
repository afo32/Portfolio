import { Link } from 'react-router-dom';
import './ContactDetails.css';
import { IconButton, Stack } from '@mui/material';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import * as React from 'react';
import Typography from '@mui/material/Typography';

export function ContactDetails() {
    return (
        <div>
            <Link to="/">
        <Stack className='logoDetails' direction="row" spacing={3}>
      <IconButton aria-label="coffeeMaker" className='iconBt'>
      <CoffeeMakerIcon className='icon' />
      </IconButton>
      </Stack>
      </Link>
      <div className='max-width'>
      <div className='top-bottom-margin'>
      <div className='hide-text-block'>
        <Typography variant="h2" gutterBottom className='animate' sx={{fontFamily:'semibold', lineHeight:'140%', fontSize:'5em'}}>
        Lets make something great!
      </Typography>
      </div>
        <div className='max-width-70 animate delay02'>
            <Typography variant='h4' gutterBottom sx={{fontFamily:'semibold', lineHeight:'140%', fontSize:'40px', margin:'24vh 0 4vh 0'}}>
                Contact 
            </Typography>
            <Typography variant='body1' sx={{lineHeight:'170%', fontFamily:'regular', fontSize:'22px', marginBottom:'3vh'}}>
                I´m seeking out opportunities to collaborate with companies / agencies / individuals, not just work for them. I want to bring my collective design experience to the table where we can work together to solve real business-problems in a way that optimizes all of our respective experience and knowledge.
            </Typography>
            <Typography variant='body1' sx={{lineHeight:'170%', fontFamily:'regular', fontSize:'22px', marginBottom:'3vh'}}>
                I want to aoid subjective pissing-matches, and favor open-minded collaborators where egos are out of the equation. If that all sounds about right, then lets for sure chat about how we can work together.
            </Typography>
            <Typography variant='body1' sx={{lineHeight:'170%', fontFamily:'regular', fontSize:'22px', marginBottom:'3vh'}}>
                Feel free to reach out through any platforms bellow:
            </Typography>
            <div className='links'>
                <a href='juanc1994@gmail.com' className='on-hover-40 text-color-red label-email copy-email'>
                </a>
            </div>
        </div>
      </div>
      
      </div>
        </div>
    )
}
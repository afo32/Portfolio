import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid} from '@mui/material';
import './Title.css'

export function Title () {
    return (
        <Box sx={{ width: '100%',}}>
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={1}>
        <Grid item xs={12}>
      <Typography variant="h3" gutterBottom="true" align='center'>
        Full Stack Developer
      </Typography>
      </Grid>
      <Grid item xs={12}>
      <Typography variant="h5" gutterBottom="true" align='center'>
        I design and code beautifully simple things, and i love what i do
      </Typography>
      </Grid>
      <Grid item xs={{width: 100, height:300}}>
        <img src='https://mattfarley.ca/img/hero-devices.svg' alt='This is an error' className='logo'></img>
      </Grid>
      </Grid>
      </Box>
    )
}
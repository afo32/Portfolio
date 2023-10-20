import { Grid, Typography, } from "@mui/material";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export function CenteredText() {
 return <React.Fragment>
 <CssBaseline />
 <Container fixed >
   <Box sx={{ bgcolor: '#6E07F3', height: '100%', padding: '0.8vw 12vw' }} >
 <Grid container direction="column" alignItems="center" justifyContent="space-around" spacing={1}>
    <Grid  item xs={12}>
    <Typography variant="h6" gutterBottom="true" color={"white"}>
    Hi, I’m Afo. Nice to meet you.
    </Typography>
    </Grid>
    <Grid sx={{ width: 0.7 }}>
    <Typography variant="body1" align="center" gutterBottom="true" color={"white"}>
    Since beginning my journey as a freelance designer. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
    </Typography>
    </Grid>
    </Grid>
    </Box>
      </Container>
    </React.Fragment>;
}
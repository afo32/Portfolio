import { Grid, Typography, Button, } from "@mui/material";
import './Figures.css';

import Knife from '../../../assets/knife.webp';
import { Link } from "react-router-dom";

export function Figures() {
    return (
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={1} padding='144px 70px 80px 70px'>
        <Grid item xs={12}>
      <Typography variant="h4" gutterBottom="true" align='center'>
        My Recent Work
      </Typography>
      </Grid>
      <Grid item xs={12}>
      <Typography variant="h6" gutterBottom="true" align='center'>
        Here are a few past design projects Ive worked on. Want to see more? 
        <Button variant="text" href="mailto:juanc1994@gmail.com">Email me</Button>
      </Typography>
      </Grid>
      <Grid container direction='row' alignItems='center' justifyContent='center'>
      <div className="project-grid">
      <div className="columns is-multiline">
        <div className="column">
        <figure className="image">
           <Grid item xs={1}>
           <Link to='/works/app-data'>
                  <img src={Knife} alt="knife" className="knife project-thumb"/>
           </Link>

      </Grid>
        </figure>
       
      </div>
      </div>

      </div>
      
      </Grid>
      </Grid>
    )
}
import { Grid, Typography, Button } from "@mui/material"
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from "react-router-dom";

export function Conversation() {
    return (
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={1} padding='50px 50px'>
        <Grid item xs={12}>
      <Typography variant="h4" gutterBottom="true" align='center'>
        Interested in collaborating with me?
      </Typography>
      </Grid>
      <Grid item xs={12}>
      <Typography variant="h6" gutterBottom="true" align='center'>
      I’m always open to discussing product design work or partnership opportunities.
      </Typography>
      </Grid>
      <Grid container direction="column" alignItems="center" justifyContent="center" spacing={1} padding='30px 70px'>
      <Grid item xs={12}>
      <Link to='/start-a-conversation'>
        <Button className="button" variant="contained" startIcon={<ChatIcon />}>
        START A CONVERSATION 
      </Button>
      </Link>
      
      </Grid>
      </Grid>
      </Grid>
    )
}
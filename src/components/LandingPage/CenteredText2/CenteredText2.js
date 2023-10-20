import {
  Grid,
  Typography,
  CssBaseline,
  Box,
  Container,
  Stack,
  Button,
} from "@mui/material";
import * as React from "react";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import './CenteredText2.css';
import { Link } from "react-router-dom";


export function CenteredText2() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            bgcolor: "#141c3a",
            padding: "3.5rem 1.25rem",
            borderRadius: "12px",
            boxShadow: '0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px #141c3a',
            boxSizing: 'inherit',
            display: 'block',
            marginLeft:'-0.75rem',
            marginRight:'-0.75rem',
            marginTop:'-0.75rem',
            marginBottom:'20px'
          }}
        >
          <Stack sx={{
          display:'flex',
            direction:"row",
            alignItems:"center",
            justifyContent:"space-between",
            boxSizing:'inherit',
          }}
          >
            <Grid item xs>
              <Typography variant="h4" color="white" paddingBottom='5px'>
                Start a project
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" color="white" paddingBottom='25px'>
                Interested in working together? We should queue up a time to
                chat. I’ll buy the coffee.
              </Typography>
            </Grid>
            <Grid item xs>
            <Link to='/lets-do-it'>
              <Button
                className="button"
                variant="contained"
                startIcon={<BakeryDiningIcon />}
              >
                LETS DO IT
              </Button>
            </Link>
              
            </Grid>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}

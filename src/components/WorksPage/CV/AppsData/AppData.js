import "./AppData.css";
import { Link } from "react-router-dom";
import { Stack, IconButton, Typography, Button } from "@mui/material";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";

import RestImg from '/Users/juanc/Desktop/program/react/portfolio/src/assets/rest.jpg'

export function AppData() {
  return (
    <div className="block-image-overflow">
            <Link to="/works">
              <Stack className="logoDetails" direction="row" spacing={3}>
                <IconButton aria-label="coffeeMaker">
                  <CoffeeMakerIcon className="icon" />
                </IconButton>
              </Stack>
            </Link>

            <Typography variant="h1" sx={{margin:'360px 300px 0 300px', fontFamily:'semibold'}}>
              Afo's Restaurant
            </Typography>
            <Typography variant="h6" sx={{color:'#888888', margin:'0 300px 0 300px'}}>
              The menu you will remember
            </Typography>
            <img src={RestImg} alt="rest" className="img" />
            <div className="about-container">
              <Typography variant="h4" sx={{fontFamily:'semibold', lineHeight:'140%', fontSize:'40px', margin:'24vh 0 4vh 0'}}>
              Afo's Restaurant Website
            </Typography>
            <Typography variant="body1" sx={{fontFamily:'regular', lineHeight:'160%', fontSize:'24px', marginBottom:'4vh'}}>
            Afo's Restaurant is an internship on Gordon Ramsey's homepage. It contains all the elements of the main page and links to some of their recipes
            </Typography>
            <Typography variant="body2" sx={{lineHeight:'170%', fontFamily:'regular', fontSize:'18px', marginBottom:'3vh'}}>
            Afos Restaurant was my first internship that I had to do when I did the Upgrade Hub boodcamp, this was to practice the frontend themes HTML, CSS5 and a bit of JavaScript. It also has mediasquerys for any device.
            </Typography>
            <Button variant="text" href='https://github.com/afo32/Portfolio'>
              Website
            </Button>
            </div>
            
    </div>
  );
}

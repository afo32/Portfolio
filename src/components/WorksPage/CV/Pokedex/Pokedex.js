import "./Pokedex.css";
import { Link } from "react-router-dom";
import { Stack, IconButton, Typography, Button } from "@mui/material";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";

import PokedexImg from '/Users/juanc/Desktop/program/react/portfolio/src/assets/pokedex.jpg'

export function Pokedex() {
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
              Afo's Pokedex
            </Typography>
            <Typography variant="h6" sx={{color:'#888888', margin:'0 300px 0 300px'}}>
              Gotta catch them all!
            </Typography>
            <img src={PokedexImg} alt="rest" className="img" />
            <div className="about-container">
              <Typography variant="h4" sx={{fontFamily:'semibold', lineHeight:'140%', fontSize:'40px', margin:'24vh 0 4vh 0'}}>
              Afo's Pokedex App
            </Typography>
            <Typography variant="body1" sx={{fontFamily:'regular', lineHeight:'160%', fontSize:'24px', marginBottom:'4vh'}}>
            The Afo´s Pokedex is an application based on the pokedex of the classic Pokemon games. It contains all the pokemon that exist to this day.
            </Typography>
            <Typography variant="body2" sx={{lineHeight:'170%', fontFamily:'regular', fontSize:'18px', marginBottom:'3vh'}}>
            The Afo´s pokedex is my second application made because in it you can find each pokemon and within these you have the characteristics: pokedex number, photo, name, hp, attack, defense and the games in which it appears. It is also a dynamic application. Made with React, typescript and css.
            </Typography>
            <Button variant="text" href='https://github.com/afo32/pokedex-react'>
              Website
            </Button>
            </div>
            
    </div>
  );
}

import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  Link,
} from "react-router-dom";
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export function NavBar() {
  return (      <div className="App">
        <Box sx={{ flexGrow: 1, marginBottom: "100px" }}>
          <AppBar position="static" color="transparent">
            <Toolbar>
                <Typography
                  color="#000000"
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  Juan C. Afonso Programador Full Stack
                </Typography>
              <Link to="/details">
                <Button color="inherit">Acerca de mi</Button>
              </Link>
              <Link to="/works">
                <Button color="inherit">Trabajos</Button>
              </Link>
              <Link to="/contact">
                <Button color="inherit">Contáctame</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
        <header className="App-header"></header>
      </div>
  );
}

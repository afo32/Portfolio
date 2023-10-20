import "./Footer.css";
import * as React from "react";
import Box from "@mui/material/Box";
import AirlineSeatFlatAngledIcon from "@mui/icons-material/AirlineSeatFlatAngled";
import Typography from "@mui/material/Typography";

export function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: 400,
        backgroundColor: "#6E07F3",
        color: 'white',
        textAlign: 'center !important',
        display:'block'
      }}
    >
      <div className="container">
      <div className="container-icon">
         <AirlineSeatFlatAngledIcon fontSize='inherit'/>
      </div>
        <div className="container-typo">
        <div className="container-typo2">
          <Typography variant="h1" gutterBottom fontSize='1.6rem' opacity='0.8'>
          Living, learning & leveling up one day at a time.
          </Typography>
        </div>
        </div>
      </div>
    </Box>
  );
}

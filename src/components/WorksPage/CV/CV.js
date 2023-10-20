import "./CV.css";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Link, Outlet,  } from "react-router-dom";

export function CV() {

  return (
    <div className="body">
      <Stack spacing={0.5} className="max-width">
        <div className="btn">
          <Link to={'/works/app-data'}>
            <Button
              variant="text"
              disableTouchRipple
              size="small"
              sx={{ display: "contents"}}
            >
              <div className="margin-animate">
                <div className="work-block">
                  <Typography
                    variant="h1"
                    sx={{
                      fontFamily: "semibold",
                      lineHeight: "140%",
                      fontSize: "6em",
                      color: "black",
                    }}
                  >
                    Afo's Restaurant
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "medium",
                      fontSize: "16px",
                      marginBottom: "0",
                      color: "red",
                      lineHeight: "170%",
                    }}
                  >
                    Web and mobile
                  </Typography>
                </div>
              </div>
            </Button>
          </Link>
          <Outlet />
        </div>
      </Stack>
    </div>
  );
}

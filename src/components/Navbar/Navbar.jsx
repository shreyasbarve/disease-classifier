import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { navbarStyles } from "./styles";

import { Link } from "react-router-dom";

export default function Navbar() {
  const classes = navbarStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar className={classes.navbar}>
          <Link to="/" className={classes.link}>
            <Typography className={classes.title} variant="button" noWrap>
              Disease Classifier
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

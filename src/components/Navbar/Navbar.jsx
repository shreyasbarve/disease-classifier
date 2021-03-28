import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { navbarStyles } from "./styles";

import { Link } from "react-router-dom";

// google login
import { GoogleLogin } from "react-google-login";

export default function Navbar({ handleOpen }) {
  const classes = navbarStyles();

  const googleResponse = (res) => console.log(res);

  return (
    <div className={classes.grow}>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar className={classes.navbar}>
          <Link to="/" className={classes.link}>
            <Typography className={classes.title} variant="button" noWrap>
              Disease Classifier
            </Typography>
          </Link>
          <GoogleLogin
            clientId="251679347805-1jqkl4k5o3vv9c7t679vav5tc8l6koia.apps.googleusercontent.com"
            buttonText="Login with google"
            onSuccess={googleResponse}
            onFailure={googleResponse}
            cookiePolicy={"single_host_origin"}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

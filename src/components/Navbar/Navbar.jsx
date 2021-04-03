import React, { useState } from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { navbarStyles } from "./styles";

import { Link } from "react-router-dom";

// firebase
import { firebase_provider, auth } from "../../firebase";
import MyButton from "../Button/MyButton";

export default function Navbar() {
  const classes = navbarStyles();
  const [userData, setUserData] = useState({});

  // signing in function
  async function googleSignInPopup() {
    try {
      const res = await auth.signInWithPopup(firebase_provider);
      setUserData({
        ...userData,
        uid: res.user.uid,
        email: res.additionalUserInfo.profile.email,
      });
      // function to post data to backend
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={classes.grow}>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar className={classes.navbar}>
          <Link to="/" className={classes.link}>
            <Typography className={classes.title} variant="button" noWrap>
              Disease Classifier
            </Typography>
          </Link>
          <MyButton onClick={googleSignInPopup}>Login with Google</MyButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

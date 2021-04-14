// core
import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { navbarStyles } from "./styles";
import { Link } from "react-router-dom";

// components
import MyButton from "../Button/MyButton";

// firebase
import { firebase_provider, auth } from "../../firebase";

// redux and api
import { register_user } from "../../redux/actions/user";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const classes = navbarStyles();

  // redux
  const dispatch = useDispatch();

  // signing in function
  const googleSignInPopup = async () => {
    try {
      const res = await auth.signInWithPopup(firebase_provider);
      const id = res.user.uid;
      const mail = res.additionalUserInfo.profile.email;
      dispatch(register_user({ uid: id, email: mail }));
    } catch (err) {
      console.log(err);
    }
  };

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

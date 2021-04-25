// core
import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

// navigation
import { Link } from "react-router-dom";

// styles
import { navbarStyles } from "./styles";

// components
import MyButton from "../Button/MyButton";

// firebase
import { firebase_provider, auth } from "../../firebase";

// redux and api
import { register_user } from "../../redux/actions/user";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const classes = navbarStyles();

  // navigation
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  // signing in function
  const googleSignInPopup = async () => {
    try {
      const res = await auth.signInWithPopup(firebase_provider);
      const uid = res.user.uid;
      const email = res.additionalUserInfo.profile.email;
      dispatch(register_user({ uid: uid, email: email }));
      history.replace(`/home/${uid}`);
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

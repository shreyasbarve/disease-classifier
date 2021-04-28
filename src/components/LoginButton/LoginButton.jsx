// core
import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

// cookies
import { bake_cookie } from "sfcookies";

// firebase
import { firebase_provider, auth } from "../../firebase";

// redux and api
import { register_user } from "../../redux/actions/user";
import { useDispatch } from "react-redux";

export default function LoginButton() {
  // navigation
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  // signing in function
  const googleSignInPopup = async () => {
    try {
      const res = await auth.signInWithPopup(firebase_provider);
      bake_cookie("name", res.additionalUserInfo.profile.name);
      const uid = res.user.uid;
      const email = res.additionalUserInfo.profile.email;
      bake_cookie("email", res.additionalUserInfo.profile.email);
      dispatch(register_user({ uid: uid, email: email }));
      history.replace(`/home/${uid}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Button
      variant="contained"
      onClick={googleSignInPopup}
      style={{ backgroundColor: "#fff", color: "#000" }}
    >
      Login with Google
    </Button>
  );
}

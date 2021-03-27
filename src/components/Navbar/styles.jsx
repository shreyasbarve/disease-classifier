import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export const navbarStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
  appbar: {
    // borderRadius: "50px",
    backgroundColor: grey[100],
  },
  navbar: {
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    color: "#000",
  },
  title: {
    fontSize: "1.5rem",
  },
}));

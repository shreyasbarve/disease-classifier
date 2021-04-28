import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

export const navbarStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: blue[600],
  },
  navbar: {
    justifyContent: "center",
  },
  titleLink: {
    textDecoration: "none",
    flexGrow: 1,
  },
  title: {
    color: "#fff",
    fontSize: "1.5rem",
  },
}));

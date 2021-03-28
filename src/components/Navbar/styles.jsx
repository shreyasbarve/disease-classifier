import { makeStyles } from "@material-ui/core/styles";

export const navbarStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "#fff",
    boxShadow: "none",
    borderBottom: "2px solid #000",
  },
  navbar: {
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    color: "#000",
    flexGrow: 1,
  },
  title: {
    fontSize: "1.5rem",
  },
}));

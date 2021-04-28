import { makeStyles } from "@material-ui/core/styles";

const loginStyles = makeStyles(() => ({
  root: {
    height: "100vh",
  },
  grid: {
    marginTop: "2rem",
  },
  copyright: {
    fontSize: "1.2rem",
    letterSpacing: 2,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 10,
  },
}));

export default loginStyles;

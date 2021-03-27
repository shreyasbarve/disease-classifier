import { makeStyles } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";

const loginStyles = makeStyles(() => ({
  root: {
    backgroundColor: blueGrey[200],
    height: "100vh",
  },
  grid: {
    marginTop: "2rem",
  },
}));

export default loginStyles;

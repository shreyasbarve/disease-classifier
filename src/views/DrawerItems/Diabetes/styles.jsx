import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  title: {
    letterSpacing: 3,
    fontSize: "1.3rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: blue[600],
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  graphContainer: {
    marginTop: "4rem",
  },
}));

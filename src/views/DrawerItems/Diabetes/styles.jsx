import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  title: {
    letterSpacing: 3,
    fontSize: "1.3rem",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

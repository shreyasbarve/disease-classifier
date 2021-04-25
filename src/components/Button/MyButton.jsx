// core
import Button from "@material-ui/core/Button";

// styles
import useStyles from "./styles";

export default function MyButton({ children }) {
  // styles
  const classes = useStyles();

  return (
    <Button color="primary" variant="contained" className={classes.button}>
      {children}
    </Button>
  );
}

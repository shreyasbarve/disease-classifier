// core
import Button from "@material-ui/core/Button";

// styles
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

const MyButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    lineHeight: 1.5,
    "&:hover": {
      //   backgroundColor: "#fff",
      borderColor: purple[500],
      border: "3px",
      //   boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
}))(Button);

export default MyButton;

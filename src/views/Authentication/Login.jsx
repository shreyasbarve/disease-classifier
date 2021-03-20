// core
import { Backdrop, Grid, Paper, Typography } from "@material-ui/core";

// styles
import loginStyles from "./styles";

export default function Login() {
  const classes = loginStyles();

  return (
    <Backdrop open={true}>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h5">Login</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Backdrop>
  );
}

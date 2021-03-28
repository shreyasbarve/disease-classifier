// core
import { Link, Typography, Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";

// styles
import loginStyles from "./styles";

// components
import MyCard from "../../components/Card/MyCard";
import Navbar from "../../components/Navbar/Navbar";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Disease Classifier
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Login() {
  const classes = loginStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <Container>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} md={6} lg={3}>
            <MyCard />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MyCard />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MyCard />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MyCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

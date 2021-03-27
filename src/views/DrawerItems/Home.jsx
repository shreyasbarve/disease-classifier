import { Grid } from "@material-ui/core";
import MyCard from "../../components/Card/MyCard";

export default function Home() {
  return (
    <Grid container spacing={3}>
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
  );
}

// core
import {
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@material-ui/core";

// components
import Form from "./Form";
import MyPieChart from "../../../components/Graphs/MyPieChart";

// redux and api
import { useSelector } from "react-redux";

// styles
import { useStyles } from "./styles";

export default function Pneumonia() {
  // styles
  const classes = useStyles();

  // redux
  const details = useSelector((state) => state.diabetesReducer);

  return (
    <Grid container spacing={3}>
      {/* left */}
      <Grid item xs={12} md={6}>
        <Form />
      </Grid>

      {/* right */}
      <Grid item xs={12} md={6} className={classes.rightGrid}>
        <Paper className={classes.paper} elevation={5}>
          <Grid container>
            {/* Title */}
            <Grid item xs={12} className={classes.title}>
              Results
            </Grid>

            {/* results */}
            <Grid item xs={12}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Gradient Boost Classifier</TableCell>
                      <TableCell>Random Forest Classifier</TableCell>
                      <TableCell>KNN Classifier</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        {details.RandomForestNormal === 0 ? "NO" : "YES"}
                      </TableCell>
                      <TableCell>
                        {details.RandomForestUnskewed === 0 ? "NO" : "YES"}
                      </TableCell>
                      <TableCell>
                        {details.KNNUnskewed === 0 ? "NO" : "YES"}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Typography variant="overline">
                According to our prediction you don't have diabetes
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper} elevation={5}>
          <Grid container>
            <Grid item xs={12}>
              {/* Title */}
              <Grid item xs={12} className={classes.title}>
                contribution of factors affecting the prediction
              </Grid>

              {/* graph canvas */}
              <Grid item xs={12}>
                <MyPieChart />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

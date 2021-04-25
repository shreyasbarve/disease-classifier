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

// styles
import { useStyles } from "./styles";

// redux and api
import { useSelector } from "react-redux";

export default function Result() {
  // styles
  const classes = useStyles();

  // redux
  const details = useSelector((state) => state.diabetesReducer);

  return (
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
            According to our prediction{" "}
            {details.Ones >= 2 ? (
              <Typography color="error">have diabetes</Typography>
            ) : (
              <Typography color="primary">don't have diabetes</Typography>
            )}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

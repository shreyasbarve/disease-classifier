// core
import { useState } from "react";

// components
import {
  Grid,
  Paper,
  TextField,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

// redux and api
import {
  predict_diabetes_4,
  predict_diabetes_8,
} from "../../../redux/actions/diabetes";
import { useDispatch, useSelector } from "react-redux";
import { failure_snackbar } from "../../../redux/actions/snackbar";

// styles
import { useStyles } from "./styles";

export default function Diabetes() {
  const classes = useStyles();

  // redux
  const dispatch = useDispatch();
  const details = useSelector((state) => state.diabetesReducer);

  const initialState = {
    pregnancies: 0,
    glucose: 0,
    bp: 0,
    skin_thickness: 0,
    insulin: 0,
    bmi: 0,
    dp_function: "0.130",
    age: 0,
    //
    // pregnancies: 1,
    // glucose: 130,
    // bp: 120,
    // skin_thickness: 5,
    // insulin: 26,
    // bmi: 25,
    // dp_function: "0.130",
    // age: 30,
  };

  const [userData, setuserData] = useState(initialState);

  const handleChange = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.glucose <= 0 || userData.bmi <= 0 || userData.age <= 0) {
      dispatch(failure_snackbar("Insufficient Data"));
    } else if (
      userData.pregnancies <= 0 ||
      userData.bp <= 0 ||
      userData.skin_thickness <= 0 ||
      userData.insulin <= 0
    ) {
      dispatch(
        predict_diabetes_4({
          glucose: userData.glucose,
          bmi: userData.bmi,
          dp_function: userData.dp_function,
          age: userData.age,
        })
      );
    } else {
      dispatch(predict_diabetes_8(userData));
    }
    setuserData(initialState);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper} elevation={5}>
          {/* input */}
          <Grid container spacing={3}>
            {/* Title */}
            <Grid item xs={12} className={classes.title}>
              MEDICAL DETAILS
            </Grid>

            {/* group 1 */}
            <Grid item xs={6}>
              <TextField
                name="bp"
                label="Blood Pressure"
                variant="outlined"
                value={userData.bp}
                onChange={(e) => handleChange(e)}
                helperText="Systolic value in mm/hg"
                fullWidth
                margin="normal"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                name="glucose"
                label="Glucose Level"
                variant="outlined"
                value={userData.glucose}
                onChange={(e) => handleChange(e)}
                helperText="Glucose count in mg/dl"
                fullWidth
                margin="normal"
                required
              />
            </Grid>
            {/* group 1 */}

            {/* group 2 */}
            <Grid item xs={6}>
              <TextField
                name="skin_thickness"
                label="Skin thickness"
                variant="outlined"
                value={userData.skin_thickness}
                onChange={(e) => handleChange(e)}
                helperText="Skin thickness in mm"
                fullWidth
                margin="normal"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                name="insulin"
                label="Insulin"
                variant="outlined"
                value={userData.insulin}
                onChange={(e) => handleChange(e)}
                fullWidth
                margin="normal"
              />
            </Grid>
            {/* group 2 */}

            {/* group 3 */}
            <Grid item xs={6}>
              <TextField
                name="bmi"
                label="BMI"
                variant="outlined"
                value={userData.bmi}
                onChange={(e) => handleChange(e)}
                fullWidth
                margin="normal"
                required
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                name="pregnancies"
                label="Total Pregnancies"
                variant="outlined"
                value={userData.pregnancies}
                onChange={(e) => handleChange(e)}
                fullWidth
                margin="normal"
              />
            </Grid>
            {/* group 3 */}

            {/* group 4 */}
            <Grid item xs={12}>
              <TextField
                name="age"
                label="Age"
                variant="outlined"
                value={userData.age}
                onChange={(e) => handleChange(e)}
                helperText="Age in years"
                margin="normal"
                required
              />
            </Grid>
            {/* group 4 */}

            {/* group 5 */}
            <Grid item xs={12}>
              <Button variant="outlined" color="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </Grid>
            {/* group 5 */}
          </Grid>
        </Paper>
      </Grid>

      {/* results */}
      <Grid item xs={12} md={6}>
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
                      <TableCell>Random Forest Normal</TableCell>
                      <TableCell>Random Forest Un-Skewed</TableCell>
                      <TableCell>KNN Un-Skewed</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{details.RandomForestNormal}</TableCell>
                      <TableCell>{details.RandomForestUnskewed}</TableCell>
                      <TableCell>{details.KNNUnskewed}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

            <Grid item xs={12}>
              Graph here
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

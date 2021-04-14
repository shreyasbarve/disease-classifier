import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Typography,
  Paper,
  Grid,
  TextField,
  Slider,
  withStyles,
  Input,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";

// redux and api
import {
  predict_diabetes_4,
  predict_diabetes_8,
} from "../../redux/actions/diabetes";
import { useDispatch, useSelector } from "react-redux";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  root1: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "40%",
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 60,
  },
  contentShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default function Diabetes({ open, setOpen, opt, setopt }) {
  // redux
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);

  const classes = useStyles();
  const theme = useTheme();
  const [img1, setimg1] = useState(null);
  const [img2, setimg2] = useState(null);
  const [months, setMonths] = useState(0);
  const [gender, setGender] = useState(0);

  const initialState = {
    pregnancies: 0,
    glucose: 0,
    bp: 0,
    skin_thickness: 0,
    insulin: 0,
    bmi: 0,
    dp_function: "0.130",
    age: 0,
  };

  const [userData, setuserData] = useState(initialState);

  const handleChange = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = dispatch(predict_diabetes_8(userData));
    console.log(res);
    setuserData(initialState);
    console.log(details);
  };

  const genderChange = (event) => {
    console.log(event.target.value);
    setGender({ gender: event.target.value });
  };

  const handleSlide = (event, newValue) => {
    setuserData({ ...userData, months: newValue });
  };

  const fileuploader = () => {};

  const fileselector = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setimg1({ img1: event.target.value });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
    console.log(event.target.files[0]);
  };

  const fileselector1 = (event) => {
    console.log(event.target.files[0]);
    setimg2({ img2: URL.createObjectURL(event.target.files[0]) });
  };

  return (
    <div className={classes.root}>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {/* <div className={classes.toolbar} /> */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>Input Features</Paper>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  <div>
                    <input type="file" onChange={fileselector} />
                    <img src={img1} />
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  <div>
                    <input type="file" onChange={fileselector1} />
                    <img src={img2} />
                  </div>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Paper className={classes.paper}>
                  <center>Medical Details</center>
                  <div className={classes.root}>
                    <div className={classes.root1}>
                      <TextField
                        name="bp"
                        width="50%"
                        variant="outlined"
                        label="Blood Pressure"
                        style={{ margin: 8 }}
                        value={userData.bp}
                        onChange={(e) => handleChange(e)}
                        helperText="Systolic BP"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />

                      <TextField
                        name="glucose"
                        label="Glucose Level"
                        variant="outlined"
                        style={{ margin: 8 }}
                        value={userData.glucose}
                        onChange={(e) => handleChange(e)}
                        helperText="Glucose count"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />

                      <TextField
                        name="skin_thickness"
                        label="Skin thickness"
                        variant="outlined"
                        style={{ margin: 8 }}
                        value={userData.skin_thickness}
                        onChange={(e) => handleChange(e)}
                        helperText="Systolic BP"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />

                      <TextField
                        name="insulin"
                        label="Insulin"
                        variant="outlined"
                        style={{ margin: 8 }}
                        value={userData.insulin}
                        onChange={(e) => handleChange(e)}
                        helperText="Systolic BP"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />

                      <TextField
                        name="bmi"
                        label="BMI"
                        style={{ margin: 8 }}
                        value={userData.bmi}
                        onChange={(e) => handleChange(e)}
                        helperText="Systolic BP"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        color="primary"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />

                      <TextField
                        name="pregnancies"
                        label="Total Pregnancies"
                        style={{ margin: 8 }}
                        value={userData.pregnancies}
                        onChange={(e) => handleChange(e)}
                        helperText="Systolic BP"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        color="primary"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      {/* <div className={classes.margin} />
                      <Input
                        className={classes.input}
                        value={userData.months}
                        onChange={(e) => ({
                          ...userData,
                          months: e.target.value,
                        })}
                        margin="dense"
                        onChange={handleSlide}
                        // onBlur={handleBlur}
                        inputProps={{
                          step: 1,
                          min: 0,
                          max: 10,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                      /> */}
                      <div width="50%">
                        <TextField
                          name="age"
                          label="Age"
                          style={{ margin: 8 }}
                          value={userData.age}
                          helperText="user's age"
                          onChange={(e) => handleChange(e)}
                          fullWidth
                          margin="normal"
                          variant="outlined"
                          color="primary"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>

                      <br></br>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleSubmit}
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          {/* Output */}

          <Grid item xs={12} sm={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>Prediction</Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>xs=12 sm=6</Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>xs=12 sm=6</Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>xs=6 sm=3</Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>xs=6 sm=3</Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>xs=6 sm=3</Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>xs=6 sm=3</Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

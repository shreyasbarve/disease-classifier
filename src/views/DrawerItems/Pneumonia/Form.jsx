// core
import { useState } from "react";
import { Paper, Grid, Button, Typography } from "@material-ui/core";

// image upload
import FileBase from "react-file-base64";

// styles
import { useStyles } from "./styles";

// redux and api
// import { useDispatch } from "react-redux";

export default function Form() {
  //   styles
  const classes = useStyles();
  //   redux
  // const dispatch = useDispatch();

  const [file, setFile] = useState("");

  return (
    <Paper className={classes.paper} elevation={5}>
      <Grid container spacing={3}>
        {/* Title */}
        <Grid item xs={12} className={classes.title}>
          UPLOAD IMAGE
        </Grid>

        <Grid item xs={12}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setFile(base64)}
          />
        </Grid>

        {file === "" ? null : (
          <Grid item xs={12} className={classes.imageContainer}>
            <Typography variant="button">Your selected image</Typography>
            <img src={file} width="100%" height="100%" alt="pneumonia" />
          </Grid>
        )}

        {/* group 5 */}
        <Grid item xs={12}>
          <Button variant="outlined" color="primary">
            Submit
          </Button>
        </Grid>
        {/* group 5 */}
      </Grid>
    </Paper>
  );
}

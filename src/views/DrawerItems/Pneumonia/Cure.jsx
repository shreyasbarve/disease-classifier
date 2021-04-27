// core
import { Grid, List, ListItemText, Paper, Typography } from "@material-ui/core";

// styles
import { useStyles } from "./styles";

export default function Cure() {
  // styles
  const classes = useStyles();

  const data = [
    "Get lots of rest",
    "Drink plenty of fluids (they’ll loosen up the gunk in your lungs so you can cough it out)",
    "Use a humidifier or take a warm bath (more gunk-loosening)",
    "Don’t smoke",
    "Stay home until your fever goes down and you aren’t coughing anything out",
    "Oxygen treatment",
    "IV fluids and medications",
    "Treatments to help loosen up the gunk",
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography className={classes.title}>
            Some ways to cure pneumonia
          </Typography>
          <List>
            {data.map((item, index) => (
              <ListItemText primary={`${index + 1}. ${item}`} key={index} />
            ))}
          </List>

          <Typography className={classes.source}>
            Source:
            <br />
            <a
              href="https://www.webmd.com/lung/bacterial-pneumonia"
              className={classes.link}
            >
              <Typography color="primary">
                https://www.webmd.com/lung/bacterial-pneumonia
              </Typography>
            </a>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

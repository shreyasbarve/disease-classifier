// core
import { Grid, List, ListItemText, Paper, Typography } from "@material-ui/core";

// styles
import { useStyles } from "./styles";

export default function Prevention() {
  // styles
  const classes = useStyles();

  const data = [
    "Cut Sugar and Refined Carbs From Your Diet",
    "Work Out Regularly",
    "Drink Water as Your Primary Beverage",
    "Lose Weight If You’re Overweight or Obese",
    "Quit Smoking",
    "Follow a Very-Low-Carb Diet",
    "Watch Portion Sizes",
    "Avoid Sedentary Behaviors",
    "Eat a High-Fiber Diet",
    "Optimize Vitamin D Levels",
    "Minimize Your Intake of Processed Foods",
    "Drink Coffee or Tea",
    "Consider Taking These Natural Herbs",
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography className={classes.title}>
            Some ways to prevent diabetes
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
              href="https://www.healthline.com/nutrition/prevent-diabetes"
              className={classes.link}
            >
              <Typography color="primary">
                https://www.healthline.com/nutrition/prevent-diabetes
              </Typography>
            </a>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

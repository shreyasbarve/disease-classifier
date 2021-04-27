// core
import { Fragment } from "react";
import {
  Divider,
  Grid,
  List,
  ListItemText,
  ListSubheader,
  Paper,
  Typography,
} from "@material-ui/core";

// styles
import { useStyles } from "./styles";

export default function Cure() {
  // styles
  const classes = useStyles();

  const data = [
    {
      name: "Type2 diabetes",
      cures: ["diet", "exercise", "medication", "insulin therapy"],
    },
    {
      name: "Type1 diabetes",
      cures: [
        "maintain normal blood sugar level through regular monitoring",
        "exercise",
        "diet",
        "insulin therapy",
      ],
    },
    {
      name: "Prediabetes",
      cures: [
        "Physical exercise",
        "Weight loss",
        "Low carbohydrate diet",
        "Mediterranean diet",
        "Low fat diet and Diabetic diet",
      ],
    },
    {
      name: "Gestational diabetes",
      cures: [
        "healthy diet",
        "physical exercise",
        "anti-diabetic medication",
        "insulin therapy",
      ],
    },
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography className={classes.title}>
            Some ways to cure diabetes
          </Typography>
          <Divider />
          {data.map((item, index) => (
            <Fragment key={index}>
              <List subheader={<ListSubheader>{item.name}</ListSubheader>}>
                {item.cures.map((text, index) => (
                  <ListItemText primary={`${index + 1}. ${text}`} key={index} />
                ))}
              </List>
              <Divider />
            </Fragment>
          ))}

          <Typography className={classes.source}>
            Source:
            <br />
            <a
              href="https://www.google.com/search?q=how+to+cure+diabetes&oq=how+to+cure+diabetes"
              className={classes.link}
            >
              <Typography color="primary">
                https://www.google.com/search?q=how+to+cure+diabetes&oq=how+to+cure+diabetes
              </Typography>
            </a>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

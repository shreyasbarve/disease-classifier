// core
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

// styles
import { useStyles } from "./styles";

export default function NameCard({
  name,
  roll,
  college,
  img,
  linkedin,
  github,
}) {
  // styles
  const classes = useStyles();

  return (
    <Card className={classes.root2}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Name : {name}
            <br />
            Roll : {roll}
            <br />
            College :Rcoem
            <br />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={linkedin} target="blank">
          <Button variant="contained" size="small" color="primary">
            Linkedin
          </Button>
        </a>
        <a href={github} target="blank">
          <Button
            variant="contained"
            size="small"
            color="secondary"
            text-align="right"
          >
            Github
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}

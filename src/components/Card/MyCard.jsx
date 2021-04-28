// core
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
} from "@material-ui/core";

// styles
import cardStyles from "./styles";

// image
import cover from "../../images/cover.jpg";

export default function MyCard() {
  // styles
  const classes = cardStyles();

  return (
    <Card className={classes.root} elevation={6}>
      <CardHeader
        avatar={<Avatar className={classes.avatar}>C</Avatar>}
        title="Card title"
        subheader="Card subtitle"
      />
      <CardMedia className={classes.media} image={cover} title="Card Title" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" noWrap>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          labore dolor suscipit adipisci? Illo iusto totam eum inventore
          corporis vitae asperiores aperiam impedit. Officiis modi nobis facilis
          tempore, laborum ducimus?
        </Typography>
      </CardContent>
    </Card>
  );
}

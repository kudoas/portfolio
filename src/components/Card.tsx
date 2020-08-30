import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
  },
  media: {
    paddingTop: "56.25%",
  },
});

type Props = {
  title: string;
  image: string;
  detail: string;
  skills: string;
};

const CardItem: React.FCX<Props> = (props) => {
  const { title, className, image, detail, skills } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent className={classes.cardContent}>
        <Typography component="h3" variant="h5">
          {title}
        </Typography>
        <Typography component="p">{detail}</Typography>
        <Typography component="p">{skills}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardItem;

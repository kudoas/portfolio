import React from "react";
import styled from "@emotion/styled";
import { makeStyles } from "@material-ui/core/styles";
import { Card as MuiCard, Button, CardContent, CardMedia, CardActions } from "@material-ui/core";

const useStyles = makeStyles({
  cardContent: {
    flexGrow: 1,
    msWordBreak: "break-all",
  },
  media: {
    paddingTop: "56.25%",
  },
});

type Props = Partial<{
  title: string;
  image: string;
  detail: string;
  skills: string[];
  // eslint-disable-next-line no-undef
  repoLink: JSX.Element;
  // eslint-disable-next-line no-undef
  url: JSX.Element;
}>;

const Card: React.FCX<Props> = ({ className, title, image, detail, skills, repoLink, url }) => {
  const classes = useStyles();
  return (
    <MuiCard className={className}>
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent className={classes.cardContent}>
        <h3>{title}</h3>
        <p>{detail}</p>
        <ul>
          {skills!.map((s, i) => (
            <li key={s + i}>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardActions>
        {repoLink ? (
          <Button size="small" color="primary">
            {repoLink}
          </Button>
        ) : null}
        {url ? (
          <Button size="small" color="primary">
            {url}
          </Button>
        ) : null}
      </CardActions>
    </MuiCard>
  );
};

const StyledCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  h3 {
    height: 4rem;
  }
  p {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
  li {
    display: inline-block;
    overflow-wrap: break-word;
    font-size: 1.3rem;
    margin-right: 5px;
    border-radius: 20px;
    padding: 3px 15px;
    color: #fff;
    background-color: #63a4ff;
    transition: all 0.3s;
  }
  span {
    white-space: nowrap;
  }
  a {
    font-size: 1.3rem;
  }
`;

export default StyledCard;

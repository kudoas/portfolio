import React from "react";
import styled from "@emotion/styled";
import { Card as MuiCard, Button, CardContent, CardMedia, CardActions } from "@mui/material";

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
  return (
    <MuiCard className={className}>
      <CardMedia className="CardMedia" image={image} title={title} />
      <CardContent className="CardContent">
        <h3>{title}</h3>
        <p>{detail}</p>
        <ul>
          {skills!.map((s, i) => (
            <li className="skill" key={s + i}>
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
  font-size: 1.6rem;

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

  .CardMedia {
    padding-top: 56.25%; // 16:9
  }
  .CardContent {
    flex-grow: 1;
    ms-word-break: "break-all";
  }
`;

export default StyledCard;

import { FCX } from "react";
import styled from "@emotion/styled";
import { Card as MuiCard, Button, CardContent, CardMedia, CardActions } from "@mui/material";

type Props = {
  title: string;
  image: string;
  detail: string;
  skills: string[];
  repoLink: string;
};

const Card: FCX<Props> = ({ className, title, image, detail, skills, repoLink }) => (
  <MuiCard className={className}>
    <CardMedia className="CardMedia" image={image} title={title} />
    <CardContent className="CardContent">
      <h3>{title}</h3>
      <p>{detail}</p>
      <ul>
        {skills.map((s, i) => (
          <li className="skill" key={s + i}>
            <span>{s}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        <a href={repoLink} target="_blank" rel="noreferrer">
          GitHub Link
        </a>
      </Button>
    </CardActions>
  </MuiCard>
);

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

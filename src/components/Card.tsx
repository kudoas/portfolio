import React from "react";
import styled from "@emotion/styled";

import { StyledTitle } from "./Title";

type Props = {
  title: string;
  icon: string;
  detail: string;
  skills: string;
};

export const Card: React.FCX<Props> = (props) => {
  const { title, className, icon, detail, skills } = props;

  return (
    <div className={className}>
      <StyledTitle tag="h3">{title}</StyledTitle>
      <img src={icon} alt={title} />
      <p>{detail}</p>
      <p>{skills}</p>
    </div>
  );
};

export const StyledCard = styled(Card)`
  width: 300px;
  padding: 8px;
  h3 {
    margin: 10px;
  }
  img {
    display: block;
    width: 100%;
  }
  p {
    margin: 10px;
  }
`;

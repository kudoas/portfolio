import React from "react";
import styled from "@emotion/styled";

import { Title } from "../UI/Title";
import { Wave } from "../../styles/Wave";

export const Top: React.FCX = ({ className }) => {
  return (
    <section className={className + " " + "#top"}>
      <Title tag="h1">Daichi Kudo</Title>
      <p>PORTFOLIO</p>
      <Wave />
    </section>
  );
};

export const StyledTop = styled(Top)`
  width: 100%;
  background: #09f;
  color: #fff;
  text-align: center;
  overflow: hidden;
  h1 {
    margin: 12rem 1.25rem 2.5rem 1.25rem;
  }
  p {
    font-size: 3rem;
    margin: 0 1.25rem 5rem 1.25rem;
  }
  svg {
    display: block;
  }
`;

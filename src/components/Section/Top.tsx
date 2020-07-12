import React from "react";
import styled from "@emotion/styled";

import { Wave } from "../UI/Wave";

export const Top: React.FCX = ({ className }) => {
  return (
    <section className={className}>
      <h1>Daichi Kudo</h1>
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
    font-size: 6.4rem;
    letter-spacing: 0.2rem;
    margin: 7rem 1.25rem 2.5rem 1.25rem;
  }
  p {
    font-size: 3rem;
    margin: 0 1.25rem 5rem 1.25rem;
  }
  svg {
    display: block;
  }
`;

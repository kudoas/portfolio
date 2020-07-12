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
  background: #09f;
  color: #fff;
  text-align: center;
  overflow: hidden;
  h1 {
    margin: 7rem 1.25rem 2.5rem 1.25rem;
  }
  p {
    font-size: 1.5rem;
    margin: 0 1.25rem 5rem 1.25rem;
  }
  svg {
    display: block;
  }
`;

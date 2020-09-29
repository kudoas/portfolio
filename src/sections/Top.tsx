import React from "react";
import styled from "@emotion/styled";

import { Wave } from "../components/Wave";

export const Top: React.FCX = ({ className }) => {
  return (
    <section className={className + " " + "#top"}>
      <h1>Daichi Kudo</h1>
      <p>PORTFOLIO</p>
      <Wave />
    </section>
  );
};

export const StyledTop = styled(Top)`
  width: 100%;
  font-family: "Courgette", cursive;
  background: linear-gradient(270deg, #009ffd 0, #2a2a72);
  /* background: linear-gradient(270deg, #2f80ed 0, #56ccf2); */
  color: white;
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

import React from "react";
import styled from "@emotion/styled";

import { Wave } from "../UI/Wave";

export const Top: React.FCX = ({ className }) => {
  return (
    <section className={className}>
      <div>
        <h1>Daichi Kudo</h1>
        <p>PORTFOLIO</p>
      </div>
      <Wave />
    </section>
  );
};

export const StyledTop = styled(Top)`
  div {
    background: rgb(0, 153, 255);
    padding-top: 20px;
    color: white;
    text-align: center;
    height: 35vh;
    h1 {
      font-size: 64px;
      margin-top: 100px;
      margin-bottom: 10px;
    }
    p {
      font-size: 20px;
    }
  }
`;

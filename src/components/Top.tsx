import { FCX } from "react";
import styled from "@emotion/styled";

import { Wave } from "./Wave";

export const Top: FCX = ({ className }) => {
  return (
    <section className={className + " " + "#top"}>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h1>Daichi Kudo's Portfolio</h1>
      <Wave />
    </section>
  );
};

export const StyledTop = styled(Top)`
  width: 100%;
  font-family: "Courgette", cursive;
  animation: gradation 20s infinite;
  background: linear-gradient(315deg, #83eaf1 0%, #63a4ff 74%);

  @keyframes gradation {
    0% {
      background: #83eaf1;
    }
    50% {
      background: #63a4ff;
    }
    100% {
      background: #83eaf1;
    }
  }
  color: white;
  text-align: center;
  overflow: hidden;

  svg {
    display: block;
  }
`;

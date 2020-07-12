import React from "react";
import styled from "@emotion/styled";

import { StyledTable } from "./../UI/Table";

export const Expreience: React.FCX = ({ className }) => {
  const tableLists = [
    [["2020/08"], ["Comming Soon"]],
    [["2020/09"], ["Comming Soon"]],
  ];

  return (
    <section className={className}>
      <h2>Experiences</h2>
      <div>
        <h3>インターン</h3>
        <StyledTable tableLists={tableLists} />
      </div>
    </section>
  );
};

export const StyledExpreience = styled(Expreience)`
  margin: 0 auto;
`;

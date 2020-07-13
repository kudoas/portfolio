import React from "react";
import styled from "@emotion/styled";

import { Title } from "./../UI/Title";
import { StyledTable } from "./../UI/Table";

export const Expreience: React.FCX = ({ className }) => {
  const tableLists = [
    [["2020/08"], ["Comming Soon"]],
    [["2020/09"], ["Comming Soon"]],
  ];

  return (
    <section className={className + " " + "#experiences"}>
      <Title tag="h2">Experiences</Title>
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

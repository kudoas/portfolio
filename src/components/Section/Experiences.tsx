import React from "react";
import styled from "@emotion/styled";

import { StyledTitle } from "./../UI/Title";
import { StyledTable } from "./../UI/Table";

export const Expreience: React.FCX = ({ className }) => {
  const tableLists = [
    [["2020/08"], ["Comming Soon"]],
    [["2020/09"], ["Comming Soon"]],
  ];

  return (
    <section className={className + " " + "#experiences"}>
      <StyledTitle tag="h2">Experiences</StyledTitle>
      <div className="intern">
        <StyledTitle tag="h3">インターン</StyledTitle>
        <StyledTable tableLists={tableLists} />
      </div>
    </section>
  );
};

export const StyledExpreience = styled(Expreience)`
  .intern {
    text-align: center;
    table {
      margin: 20px auto;
    }
  }
`;

import React from "react";
import styled from "@emotion/styled";

export const Title: React.FCX = (props) => {
  const { children, className } = props;

  return (
    <div className={className}>
      <h2>{children}</h2>
    </div>
  );
};

export const StyledTitle = styled(Title)`
  text-align: center;
  h2 {
    margin: 20px 5%;
    &::after {
      display: block;
      height: 2px;
      content: "";
      background: #09f;
    }
  }
`;

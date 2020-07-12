import React, { useState, Children } from "react";
import styled from "@emotion/styled";

const Root = styled.h1`
  font-size: 10remm;
`;

type Props = {
  tag?: string;
};

export const Title: React.FCX<Props> = (props) => {
  const { className, tag, children } = props;

  let Component;
  switch (tag) {
    case "h2":
      Component = Root.withComponent("h2");
      break;
    case "h3":
      Component = Root.withComponent("h3");
      break;
    default:
      Component = Root;
  }

  return (
    <div className={className}>
      <Component>{children}</Component>
    </div>
  );
};

export const StyledTitle = styled(Title)`
  text-align: center;
`;

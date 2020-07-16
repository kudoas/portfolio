import React from "react";
import styled from "@emotion/styled";

type Props = {
  tag: "h1" | "h2" | "h3";
};

export const Title: React.FCX<Props> = (props) => {
  const { tag, children, className } = props;

  let Component;
  switch (tag) {
    case "h1":
      Component = styled.h1`
        font-size: 6.4rem;
        letter-spacing: 0.2rem;
      `;
      break;
    case "h2":
      Component = styled.h2`
        text-align: center;
        margin: 20px 5%;
        &::after {
          display: block;
          height: 2px;
          content: "";
          background: #09f;
        }
      `;
      break;
    case "h3":
      Component = styled.h3``;
      break;
  }

  return (
    <div className={className}>
      <Component>{children}</Component>
    </div>
  );
};

export const StyledTitle = styled(Title)`
  display: inline;
  text-align: center;
`;

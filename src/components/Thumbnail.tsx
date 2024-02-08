import { FCX } from "react";
import styled from "@emotion/styled";

import { icon } from "../assets/index";

type Props = {
  src?: string;
};

export const Thumbnail: FCX<Props> = (props) => {
  const { src } = props;

  return <StyledImg src={src ?? icon} alt="icon" />;
};

export const StyledImg = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border: 1px #eee solid;
`;

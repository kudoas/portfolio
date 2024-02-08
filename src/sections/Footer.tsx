import { FCX } from "react";
import styled from "@emotion/styled";

const Footer: FCX = ({ className }) => {
  return <footer className={"#footer" + " " + className}>Copyright © 2024</footer>;
};

export const StyledFooter = styled(Footer)`
  text-align: center;
  padding: 20px;
  margin-top: auto;
  background-color: #eee;
  font-size: 1.3rem;
`;

export default Footer;

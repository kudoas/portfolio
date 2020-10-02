import React from "react";
import styled from "@emotion/styled";

import { Link } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer: React.FCX = ({ className }) => {
  return (
    <footer className={"#footer" + " " + className}>
      Copyright © 2020. Daichi Kudo.{" "}
      <Link href="https://github.com/Kudoas/Portfolio">
        <GitHubIcon />
      </Link>
    </footer>
  );
};

export const StyledFooter = styled(Footer)`
  text-align: center;
  padding: 20px;
  margin-top: auto;
  background-color: #eee;
  font-size: 1.3rem;
`;

export default Footer;

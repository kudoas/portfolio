import React from "react";
import styled from "@emotion/styled";

export const Header: React.FCX = ({ className }) => {
  return (
    <header className={className}>
      <nav>
        <ul>
          <li>Top</li>
          <li>About</li>
          <li>Works</li>
          <li>Experineces</li>
          <li>Skills</li>
          <li>Contact</li>
          <li>Links</li>
        </ul>
      </nav>
    </header>
  );
};

export const StyledHeader = styled(Header)`
  position: sticky;
  top: 0;
  font-size: 18px;
  padding: 10px;
  margin: 0;
  background-color: #fff;
  nav {
    ul {
      text-align: center;
      li {
        display: inline-block;
        margin: 5px 30px;
      }
    }
  }
`;

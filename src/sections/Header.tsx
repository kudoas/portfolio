import React from "react";
import { Link } from "react-scroll";
import styled from "@emotion/styled";

import { NavLink } from "../components/NavLink";

export const Header: React.FCX = ({ className }) => {
  return (
    <header className={className}>
      <nav>
        {/* <NavLink navList={}/> */}
        <ul>
          <li>
            <Link to="#top" smooth={true} offset={-40} duration={500}>
              Top
            </Link>
          </li>
          <li>
            <Link to="#about" smooth={true} offset={-40} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="#experiences" smooth={true} offset={-40} duration={500}>
              Experineces
            </Link>
          </li>
          <li>
            <Link to="#works" smooth={true} offset={-40} duration={500}>
              Works
            </Link>
          </li>
          <li>
            <Link to="#skills" smooth={true} offset={-40} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="#contact" smooth={true} offset={-40} duration={500}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="#link" smooth={true} offset={-40} duration={500}>
              Links
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export const StyledHeader = styled(Header)`
  position: sticky;
  top: 0;
  font-size: 18px;
  margin: 0;
  background-color: #fff;
  nav {
    ul {
      text-align: center;
      li {
        display: inline-block;
        padding: 0 30px;
        a {
          display: inline-block;
          position: relative;
          padding: 15px 0;
          transition: 0.3s;
          color: #333;
          &::after {
            position: absolute;
            content: "";
            bottom: 0;
            left: 50%;
            width: 0;
            height: 3px;
            background: #2a2a64;
            transform: translateX(-50%);
            transition: all 0.3s ease 0s;
          }
          &:hover {
            cursor: pointer;
          }
          &:hover::after {
            width: 100%;
          }
        }
      }
    }
  }
`;

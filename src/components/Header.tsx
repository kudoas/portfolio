import { FCX } from "react";
import { Link } from "react-scroll";
import styled from "@emotion/styled";

export const Header: FCX = ({ className }) => {
  return (
    <header className={className}>
      <nav>
        <ul>
          <li>
            <Link to="#top" smooth={true} offset={-40} duration={500}>
              Top
            </Link>
          </li>
          <li>
            <Link to="#career" smooth={true} offset={-40} duration={500}>
              Career
            </Link>
          </li>
          <li>
            <Link to="#work" smooth={true} offset={-40} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="#skill" smooth={true} offset={-40} duration={500}>
              Skill
            </Link>
          </li>
          {/* <li>
            <Link to="#contact" smooth={true} offset={-40} duration={500}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="#link" smooth={true} offset={-40} duration={500}>
              Links
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export const StyledHeader = styled(Header)`
  position: sticky;
  z-index: 1;
  top: 0;
  font-size: 2rem;
  margin: 0;
  background-color: #fff;
  nav {
    ul {
      text-align: center;
      li {
        display: inline-block;
        padding: 0 30px;
        @media screen and (max-width: 768px) {
          font-size: 16px;
          padding: 0 10px;
        }
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

import React from "react";
import { Link } from "react-scroll";
import styled from "@emotion/styled";

type Props = {
  offset?: number;
  navList: string[];
};

export const NavLink: React.FCX<Props> = (props) => {
  const { className, children, offset = -40, navList } = props;

  return (
    <ul className={className}>
      {navList.map((link) => {
        <li>
          <Link to={link} smooth={true} offset={offset}>
            {children}
          </Link>
        </li>;
      })}
    </ul>
  );
};

export const StyledNavLink = styled(NavLink)`
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
`;

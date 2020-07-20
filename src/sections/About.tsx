import React from "react";
import styled from "@emotion/styled";

import { StyledTable } from "../components/Table";
import { Title } from "../components/Title";

export const About: React.FCX = ({ className }) => {
  const tableLists = [
    [["Name"], ["工藤 大地 (Daichi Kudo)"]],
    [["University"], ["明治薬科大学"]],
    [["GitHub"], ["Kudoas", "https://github.com/Kudoas"]],
    [["AtCoder"], ["kudoa", "https://atcoder.jp/users/kudoa"]],
    [["Hatena Blog"], ["kudoa", "https://kudoa.hatenablog.com/"]],
  ];

  return (
    <section className={className + " " + "#about"}>
      <Title tag="h2">About</Title>
      <div className="grid">
        <div className="icon">
          <img src="icon.png" alt="icon" />
        </div>
        <StyledTable tableLists={tableLists} />
      </div>
    </section>
  );
};

export const StyledAbout = styled(About)`
  .grid {
    margin: 0 auto;
    font-size: 1.8rem;
    display: grid;
    grid-template-columns: 30% 70%;
    .icon {
      grid-column: 1;
      margin: auto auto;
      img {
        width: 130px;
        height: 130px;
        border-radius: 20px;
      }
    }
    table {
      grid-column: 2;
      margin: 10px;
    }
  }
`;

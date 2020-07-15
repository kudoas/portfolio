import React from "react";
import styled from "@emotion/styled";

import { Title } from "./../../UI/Title";
import { StyledCard } from "./Card";

export const Works: React.FCX = ({ className }) => {
  return (
    <section className={className + " " + "#works"}>
      <Title tag="h2">Works</Title>
      <div className="grid">
        <StyledCard
          title="個人メディア"
          icon="blog.png"
          detail="日々学習したことや知見を共有するためのブログ"
          skills={"gatsby, google analytics"}
        />
        <StyledCard
          title="Burger Builder"
          icon="burger-builder.png"
          detail="(デモ)オーダーメイドのハンバーガーを注文できるアプリ"
          skills={"React.js Redux"}
        />
        <StyledCard
          title="掲示板"
          icon="board.png"
          detail="Django製の掲示板アプリ"
          skills={"Django"}
        />
        <StyledCard
          title="HTML Table Creator"
          icon="html-table-creator.png"
          detail="HTMLを作成するツール"
          skills={"React.js TypeScript ContextAPI"}
        />
      </div>
    </section>
  );
};

export const StyledWorks = styled(Works)`
  .grid {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    div {
      margin: 0 auto;
    }
  }
`;

import React from "react";
import styled from "@emotion/styled";

import { Title } from "../components/Title";
import { StyledCard } from "../components/Card";

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
          skills={"Django, PostgresQL, S3"}
        />
        <StyledCard
          title="HTML Table Creator"
          icon="html-table-creator.png"
          detail="HTMLを作成するツール"
          skills={"React.js TypeScript ContextAPI"}
        />
        <StyledCard
          title="積読管理用bot"
          icon="slack-icon.png"
          detail="週に一回登録した本を通知してくれるslack bot"
          skills={"GAS, Webhook API, Spread Sheet"}
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

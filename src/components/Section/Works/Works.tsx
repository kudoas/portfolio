import React from "react";

import { Title } from "./../../UI/Title";

export const Works: React.FCX = ({ className }) => {
  return (
    <section className={className + " " + "#works"}>
      <Title tag="h2">Works</Title>
      <div>
        <h3>掲示板アプリ</h3>
        <p>概要はホゲホゲ</p>
      </div>
    </section>
  );
};

import React from "react";

import { Title } from "../components/Title";

export const Links: React.FCX = () => {
  return (
    <section className="#link">
      <Title tag="h2">Links</Title>
      <ul>
        <li>GitHub</li>
        <li>Twitter</li>
        <li>AtCoder</li>
        <li>Hatena Blog</li>
      </ul>
    </section>
  );
};

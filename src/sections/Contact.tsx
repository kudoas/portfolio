import React from "react";

import { Title } from "../components/Title";

export const Contact: React.FCX = ({ className }) => {
  return (
    <section className={className + " " + "#contact"}>
      <Title>Contact</Title>
      <form>
        <p>
          <label>内容</label>
          <input />
        </p>
      </form>
    </section>
  );
};

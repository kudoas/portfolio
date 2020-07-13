import React from "react";

import { Title } from "./../UI/Title";

export const Contact: React.FCX = ({ className }) => {
  return (
    <section className={className + " " + "#contact"}>
      <Title tag="h2">Contact</Title>
      <form>
        <p>
          <label>内容</label>
          <input />
        </p>
      </form>
    </section>
  );
};

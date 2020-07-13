import React from "react";

import { Title } from "./../UI/Title";

export const Skills: React.FCX = ({ className }) => {
  return (
    <section className={className + " " + "#skill"}>
      <Title tag="h2">Skills</Title>
      <div>
        <h3>HTML</h3>
        <p>まあかけるし分かる</p>
      </div>
      <div>
        <h3>CSS</h3>
        <p>まあかけるし分かる</p>
      </div>
    </section>
  );
};

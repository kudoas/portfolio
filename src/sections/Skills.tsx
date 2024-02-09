import { FCX, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";

import Section from "../styles/Section";
import { Table } from "../components/Table";
import { StyledTitle } from "../components/Title";
import { skills as data } from "@data";
import { Skill } from "@types";

export const Skills: FCX = ({ className }) => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setSkills(data.skills);
  }, [skills]);

  return (
    <Section className={className + " " + "#skills"} ref={ref} inView={inView}>
      <StyledTitle>Skills</StyledTitle>
      <Table skills={skills} />
    </Section>
  );
};

export const StyledSkills = styled(Skills)`
  table {
    text-align: left;
    margin: 0 auto;
  }
`;

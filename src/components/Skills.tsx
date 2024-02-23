import { FCX, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";

import Section from "./Section";
import { StyledTitle } from "./Title";
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
      <table>
        <tbody>
          {skills.map((skill) => (
            <tr key={skill.name}>
              <h3>{skill.name}</h3>
              <td>{skill.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
};

export const StyledSkills = styled(Skills)`
  h3 {
    margin: 10px 0;
  }
  td {
    padding: 20px 0;
  }
  td:nth-of-type(1) {
    width: 40%;
  }
`;

import { FCX, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";

import { Work } from "@types";
import Section from "./Section";
import { StyledTitle } from "./Title";
import Card from "./Card";

export const Works: FCX = ({ className }) => {
  const [works, setWorks] = useState<Work[]>([]);
  useEffect(() => {
    import("../data/works").then((module) => {
      setWorks(module.works);
    });
  }, []);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <Section className={className + " " + "#work"} ref={ref} inView={inView}>
      <StyledTitle>Work</StyledTitle>
      <Grid container spacing={3} alignItems="center">
        {works.map((work) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={work.title}>
              <Card
                title={work.title}
                image={work.image}
                detail={work.detail}
                skills={work.skills}
                repoLink={work.link}
              />
            </Grid>
          );
        })}
      </Grid>
    </Section>
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

import React from "react";

import { StyledHeader } from "../sections/Header";
import { StyledTop } from "../sections/Top";
import { About } from "../sections/About";
import { StyledExpreience } from "../sections/Experiences";
import { StyledWorks } from "../sections/Works";
import { StyledSkills } from "../sections/Skills";
import { StyledFooter } from "../sections/Footer";

export const Home: React.FC = () => {
  return (
    <>
      <StyledHeader />
      <StyledTop />
      <About />
      <StyledExpreience />
      <StyledWorks />
      <StyledSkills />
      <StyledFooter />
    </>
  );
};

import React from "react";

import { StyledHeader } from "../sections/Header";
import { StyledTop } from "../sections/Top";
import { StyledAbout } from "../sections/About";
import { StyledExpreience } from "../sections/Experiences";
import { StyledWorks } from "../sections/Works";
import { StyledSkills } from "../sections/Skills";
import { Links } from "../sections/Links";
import { Contact } from "../sections/Contact";
import { StyledFooter } from "../sections/Footer";

export const Main: React.FC = () => {
  return (
    <>
      <StyledHeader />
      <StyledTop />
      <StyledAbout />
      <StyledExpreience />
      <StyledWorks />
      <StyledSkills />
      <Contact />
      <Links />
      <StyledFooter />
    </>
  );
};

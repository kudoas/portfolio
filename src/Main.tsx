import React from "react";
import { StyledHeader } from "./components/Section/Header";
import { StyledTop } from "./components/Section/Top";
import { StyledAbout } from "./components/Section/About";
import { StyledExpreience } from "./components/Section/Experiences";
import { StyledWorks } from "./components/Section/Works/Works";
import { StyledSkills } from "./components/Section/Skills";
import { Links } from "./components/Section/Links";
import { Contact } from "./components/Section/Contact";
import { StyledFooter } from "./components/Section/Footer";

export const Main: React.FCX = ({ className }) => {
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

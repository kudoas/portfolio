import React from "react";
import { StyledHeader } from "./components/Section/Header";
import { StyledTop } from "./components/Section/Top";
import { StyledAbout } from "./components/Section/About";
import { Expreience } from "./components/Section/Experience";
import { Works } from "./components/Section/Works";
import { Skills } from "./components/Section/Skills";
import { Links } from "./components/Section/Links";
import { Contact } from "./components/Section/Contact";
import { StyledFooter } from "./components/Section/Footer";

export const Main: React.FCX = ({ className }) => {
  return (
    <>
      <StyledHeader />
      <StyledTop />
      <StyledAbout />
      <Expreience />
      <Works />
      <Skills />
      <Contact />
      <Links />
      <StyledFooter />
    </>
  );
};

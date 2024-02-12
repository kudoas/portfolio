import { FC } from "react";
import { StyledHeader } from "../components/Header";
import { StyledTop } from "../components/Top";
import { StyledAbout } from "../components/About";
import { StyledExperience } from "../components/Experiences";
import { StyledWorks } from "../components/Works";
import { StyledSkills } from "../components/Skills";
import { StyledFooter } from "../components/Footer";

export const Home: FC = () => {
  return (
    <>
      <StyledHeader />
      <StyledTop />
      <StyledAbout />
      <StyledExperience />
      <StyledWorks />
      <StyledSkills />
      <StyledFooter />
    </>
  );
};

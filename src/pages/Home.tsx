import { FC } from "react";
import { StyledHeader } from "../sections/Header";
import { StyledTop } from "../sections/Top";
import { StyledAbout } from "../sections/About";
import { StyledExperience } from "../sections/Experiences";
import { StyledWorks } from "../sections/Works";
import { StyledSkills } from "../sections/Skills";
import { StyledFooter } from "../sections/Footer";

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

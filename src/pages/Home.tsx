import { FC } from "react";
import { StyledHeader } from "../components/Header";
import { StyledAbout } from "../components/About";
import { StyledCareer } from "../components/Career";
import { StyledWorks } from "../components/Works";
import { StyledSkills } from "../components/Skills";
import { StyledFooter } from "../components/Footer";

export const Home: FC = () => {
  return (
    <>
      <div className="#top"></div>
      <StyledHeader />
      <StyledAbout />
      <StyledCareer />
      <StyledWorks />
      <StyledSkills />
      <StyledFooter />
    </>
  );
};

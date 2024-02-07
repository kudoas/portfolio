import { FCX } from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

import { atcoder } from "../assets/index";
import { StyledTitle } from "../components/Title";
import { Thumbnail } from "../components/Thumbnail";
import Section from "../styles/Section";

const links = [
  {
    item: "Twitter",
    content: (
      <a href="https://twitter.com/kudoadd" key="1">
        <TwitterIcon style={{ fontSize: "40px" }} />
      </a>
    ),
  },
  {
    item: "GitHub",
    content: (
      <a href="https://github.com/Kudoas" key="2">
        <GitHubIcon style={{ fontSize: "40px" }} />
      </a>
    ),
  },
  {
    item: "Hatena Blog",
    content: (
      <a href="https://kudolog.net/" key="4">
        <i className="fa-hatena" style={{ fontSize: "35px" }}></i>
      </a>
    ),
  },
  {
    item: "AtCoder",
    content: (
      <a href="https://atcoder.jp/users/kudoa" key="3">
        <img src={atcoder} alt="atcoder" style={{ width: "40px" }} />
      </a>
    ),
  },
];

export const About: FCX = ({ className }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <Section inView={inView} className={className + " " + "#about"} ref={ref}>
      <StyledTitle>About</StyledTitle>
      <div>
        <Thumbnail />
      </div>
      <p>I&apos;m Daichi, Software Developer in Tokyo🗻.</p>
      <div>{links.map((i) => i.content)}</div>
    </Section>
  );
};

export const StyledAbout = styled(About)`
  a:link {
    color: black;
  }
  a:visited {
    color: black;
  }
  p {
    text-align: center;
    margin: 2rem 0;
    font-size: 2rem;
  }
  div {
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 0 auto 0;
  }
`;

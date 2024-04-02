import { FCX } from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";

import { StyledTitle } from "./Title";
import { Thumbnail } from "./Thumbnail";
import Section from "./Section";

const links = [
  {
    item: "Twitter",
    content: (
      <a href="https://twitter.com/da1chi24" key="1">
        <TwitterIcon style={{ fontSize: "40px" }} sx={{ margin: "10px" }} />
      </a>
    ),
  },
  {
    item: "GitHub",
    content: (
      <a href="https://github.com/kudoas" key="2">
        <GitHubIcon style={{ fontSize: "40px" }} sx={{ margin: "10px" }} />
      </a>
    ),
  },
  {
    item: "Tech Blog",
    content: (
      <a href="https://blog.da1chi.net" key="3">
        <ArticleIcon style={{ fontSize: "40px" }} sx={{ margin: "10px" }} />
      </a>
    ),
  },
  {
    item: "Hatena Blog",
    content: (
      <a href="https://da1chi.hatenablog.jp/" key="4">
        <i className="fa-hatena" style={{ fontSize: "40px" }}></i>
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
      <StyledTitle>About Me</StyledTitle>
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
    width: 50%;
    margin: 0 auto 0;
  }
`;

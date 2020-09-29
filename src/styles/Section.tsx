import styled from "@emotion/styled";

interface Props {
  inView: boolean;
}

const Section = styled.section<Props>`
  transition: all 1s ease;
  transform: ${(props) => (props.inView ? "translateY(0)" : "translateY(50px)")};
  visibility: ${(props) => (props.inView ? "visible" : "hidden")};
  opacity: ${(props) => (props.inView ? 1 : 0.5)};
`;

export default Section;

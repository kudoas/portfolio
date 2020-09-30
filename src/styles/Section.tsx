import styled from "@emotion/styled";

interface Props {
  inView: boolean;
}

const Section = styled.section<Props>`
  margin-bottom: 100px;
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
  transition: all 1s ease;
  transform: ${(props) => (props.inView ? "translateY(0)" : "translateY(50px)")};
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;

export default Section;

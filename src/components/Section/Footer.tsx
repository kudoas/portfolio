import React from "react";
import styled from "@emotion/styled";

export const Footer: React.FCX = ({ className }) => {
  return (
    <footer className={className}>
      <p>Copyright©2020. Daichi Kudo.</p>
    </footer>
  );
};

export const StyledFooter = styled(Footer)`
  border-top: 1px solid #e2e8f0;
  p {
    padding: 1rem;
    text-align: center;
  }
`;

import React from "react";
import styled from "styled-components";
import { motion } from "motion/react";

const Container = styled(motion.div)`
  position: fixed;
  right: 2.5rem;
  bottom: 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    content: "";
    margin-top: 0.5rem;
    height: 120px;
    width: 1px;
    background-color: ${(p) => p.theme.fgMuted};
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const EmailText = styled.a`
  writing-mode: vertical-rl;
  font-family: "Geist Mono", monospace;
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  color: ${(p) => p.theme.fgMuted};
  margin-bottom: 1.5rem;
  transition: color 0.25s ease, transform 0.25s ease;

  &:hover {
    color: ${(p) => p.theme.accent};
    transform: translateY(-4px);
  }
`;

const EmailBar = () => {
  return (
    <Container
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
    >
      <EmailText href="mailto:phonemyintsan31@gmail.com">
        phonemyintsan31@gmail.com
      </EmailText>
    </Container>
  );
};

export default EmailBar;

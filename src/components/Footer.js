import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 3rem 7vw 2rem;
  border-top: 1px solid ${(p) => p.theme.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Geist Mono", monospace;
  font-size: 0.78rem;
  color: ${(p) => p.theme.fgMuted};
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Brand = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  em {
    font-family: "Instrument Serif", serif;
    font-style: italic;
    color: ${(p) => p.theme.fg};
    font-size: 1rem;
  }
`;

const Built = styled.span`
  color: ${(p) => p.theme.fgSubtle};
  text-align: center;

  em {
    font-family: "Instrument Serif", serif;
    font-style: italic;
    color: ${(p) => p.theme.accent};
    font-size: 1.05rem;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 1.1rem;

  a {
    color: ${(p) => p.theme.fgMuted};
    font-size: 1rem;
    transition: color 0.25s ease, transform 0.25s ease;
  }

  a:hover {
    color: ${(p) => p.theme.accent};
    transform: translateY(-2px);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Brand>
        © 2026 <em>Phone Myint San</em>
      </Brand>
      <Built>
        Designed <em>&</em> coded in Birmingham
      </Built>
      <Socials>
        <a
          href="https://github.com/PMS06"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/pms06/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/pm_san6/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/PhoneMyintSan14"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X / Twitter"
        >
          <FaXTwitter />
        </a>
      </Socials>
    </FooterContainer>
  );
};

export default Footer;

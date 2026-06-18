import React from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const SocialBar = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 2.5rem;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

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

const IconLink = styled(motion.a)`
  font-size: 1.05rem;
  color: ${(p) => p.theme.fgMuted};
  transition: color 0.25s ease;

  &:hover {
    color: ${(p) => p.theme.accent};
  }
`;

const links = [
  { Icon: FaGithub, href: "https://github.com/PMS06", label: "GitHub" },
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/pms06/",
    label: "LinkedIn",
  },
  {
    Icon: FaInstagram,
    href: "https://www.instagram.com/pm_san6/?hl=en",
    label: "Instagram",
  },
  {
    Icon: FaXTwitter,
    href: "https://twitter.com/PhoneMyintSan14",
    label: "X / Twitter",
  },
];

const SocialMediaBar = () => {
  return (
    <SocialBar
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
    >
      {links.map(({ Icon, href, label }) => (
        <IconLink
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon />
        </IconLink>
      ))}
    </SocialBar>
  );
};

export default SocialMediaBar;

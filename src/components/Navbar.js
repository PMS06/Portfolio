import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { LuSun, LuMoon } from "react-icons/lu";

const Bar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
  font-family: "Geist Mono", "JetBrains Mono", monospace;
  font-size: 0.78rem;
  letter-spacing: 0.02em;
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  background: ${(p) =>
    p.$scrolled
      ? p.theme.mode === "dark"
        ? "rgba(14,14,16,0.72)"
        : "rgba(242,239,233,0.78)"
      : "transparent"};
  border-bottom: 1px solid
    ${(p) => (p.$scrolled ? p.theme.border : "transparent")};
  transition: background 0.3s ease, border-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.9rem 1.25rem;
  }
`;

const Mark = styled.a`
  font-family: "Instrument Serif", serif;
  font-style: italic;
  font-size: 1.6rem;
  color: ${(p) => p.theme.fg};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    background: ${(p) => p.theme.accent};
    border-radius: 50%;
    box-shadow: 0 0 14px ${(p) => p.theme.accent};
  }
`;

const Links = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 820px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${(p) => p.theme.fgMuted};
  text-transform: uppercase;
  position: relative;
  transition: color 0.2s ease;

  span.idx {
    color: ${(p) => p.theme.accent};
    margin-right: 0.4rem;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0;
    height: 1px;
    background: ${(p) => p.theme.accent};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${(p) => p.theme.fg};
  }

  &:hover::after {
    width: 100%;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const ToggleBtn = styled.button`
  background: transparent;
  border: 1px solid ${(p) => p.theme.border};
  color: ${(p) => p.theme.fg};
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: 999px;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${(p) => p.theme.accent};
    color: ${(p) => p.theme.accent};
    transform: rotate(20deg);
  }
`;

const ResumeBtn = styled.a`
  font-family: "Geist Mono", monospace;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.55rem 0.9rem;
  border: 1px solid ${(p) => p.theme.accent};
  color: ${(p) => p.theme.accent};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(p) => p.theme.accent};
    color: ${(p) => p.theme.bg};
  }

  ${(p) =>
    p.$compact &&
    css`
      @media (max-width: 820px) {
        display: none;
      }
    `}
`;

const items = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({ toggleTheme, isdarktheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Bar $scrolled={scrolled}>
      <Mark href="#top">pms.</Mark>
      <Links>
        {items.map((it, i) => (
          <NavLink key={it.id} href={`#${it.id}`}>
            <span className="idx">0{i + 1}.</span>
            {it.label}
          </NavLink>
        ))}
      </Links>
      <Right>
        <ResumeBtn href="/Resume.pdf" target="_blank" rel="noreferrer" $compact>
          Résumé ↗
        </ResumeBtn>
        <ToggleBtn onClick={toggleTheme} aria-label="Toggle theme">
          {isdarktheme ? <LuSun size={16} /> : <LuMoon size={16} />}
        </ToggleBtn>
      </Right>
    </Bar>
  );
};

export default Navbar;

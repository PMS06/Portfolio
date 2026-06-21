import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "motion/react";
import { LuArrowDownRight, LuMail, LuMapPin } from "react-icons/lu";

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.25; }
`;

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 8rem 7vw 4rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 4rem;
  align-items: end;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    padding: 7rem 6vw 3rem;
    gap: 3rem;
  }
`;

const Eyebrow = styled(motion.div)`
  font-family: "Geist Mono", monospace;
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${(p) => p.theme.accent};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  &::before {
    content: "";
    width: 32px;
    height: 1px;
    background: ${(p) => p.theme.accent};
  }
`;

const Title = styled(motion.h1)`
  font-family: "Instrument Serif", serif;
  font-weight: 400;
  font-size: clamp(3.4rem, 11vw, 9rem);
  line-height: 0.92;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.fg};

  em {
    font-style: italic;
    color: ${(p) => p.theme.accent};
  }

  .ampersand {
    font-style: italic;
    color: ${(p) => p.theme.fgMuted};
    font-size: 0.85em;
  }
`;

const Sub = styled(motion.p)`
  margin-top: 2rem;
  max-width: 640px;
  font-size: 1.12rem;
  line-height: 1.6;
  color: ${(p) => p.theme.fgMuted};

  strong {
    color: ${(p) => p.theme.fg};
    font-weight: 500;
  }
`;

const StatusRow = styled(motion.div)`
  margin-top: 2.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem 2rem;
  font-family: "Geist Mono", monospace;
  font-size: 0.78rem;
  color: ${(p) => p.theme.fgMuted};

  .item {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #36e08a;
    box-shadow: 0 0 12px rgba(54, 224, 138, 0.6);
    animation: ${blink} 1.6s infinite ease-in-out;
  }
`;

const CTARow = styled(motion.div)`
  margin-top: 3rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Primary = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 1rem 1.5rem;
  background: ${(p) => p.theme.accent};
  color: ${(p) => p.theme.bg};
  font-family: "Geist Mono", monospace;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.25s ease;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${(p) => p.theme.fg};
    transform: translateY(101%);
    transition: transform 0.35s cubic-bezier(0.7, 0, 0.2, 1);
    z-index: 0;
  }

  span {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    gap: 0.65rem;
    transition: color 0.35s ease;
  }

  &:hover::after {
    transform: translateY(0);
  }

  &:hover span {
    color: ${(p) => p.theme.bg};
  }
`;

const Secondary = styled(Primary)`
  background: transparent;
  border: 1px solid ${(p) => p.theme.border};
  color: ${(p) => p.theme.fg};

  &::after {
    background: ${(p) => p.theme.accent};
  }

  &:hover span {
    color: ${(p) => p.theme.bg};
  }
`;

const SideMeta = styled(motion.aside)`
  font-family: "Geist Mono", monospace;
  font-size: 0.78rem;
  color: ${(p) => p.theme.fgMuted};
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding-left: 1.4rem;
  border-left: 1px solid ${(p) => p.theme.border};

  @media (max-width: 1080px) {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid ${(p) => p.theme.border};
    padding-top: 1.5rem;
  }
`;

const MetaBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  .key {
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: ${(p) => p.theme.fgSubtle};
    font-size: 0.68rem;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }

  .val {
    color: ${(p) => p.theme.fg};
    font-size: 0.92rem;
  }

  .val em {
    font-family: "Instrument Serif", serif;
    font-style: italic;
    color: ${(p) => p.theme.accent};
  }
`;

const ScrollHint = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 7vw;
  font-family: "Geist Mono", monospace;
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${(p) => p.theme.fgSubtle};
  display: flex;
  align-items: center;
  gap: 0.6rem;

  .line {
    width: 60px;
    height: 1px;
    background: ${(p) => p.theme.fgSubtle};
  }

  @media (max-width: 1080px) {
    position: static;
    margin-top: 2rem;
  }
`;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

const Introduction = () => {
  return (
    <Section id="top">
      <div>
        <Eyebrow {...fadeUp(0.05)}>Portfolio / 2026</Eyebrow>
        <Title {...fadeUp(0.2)}>
          Phone <em>Myint</em>
          <br />
          San<span className="ampersand">.</span>
        </Title>
        <Sub {...fadeUp(0.45)}>
          Full-stack & mobile engineer with <strong>4+ years</strong> of
          commercial experience shipping production iOS, Android and web
          systems. I work end-to-end in <strong>React Native</strong>,{" "}
          <strong>TypeScript</strong>, and <strong>Laravel</strong>, with a
          weakness for clean architecture and a sharper user experience.
        </Sub>
        <StatusRow {...fadeUp(0.65)}>
          <span className="item">
            <LuMapPin size={13} /> Bristol, UK · from Yangon, MM
          </span>
          <span className="item">
            <LuMail size={13} /> replies within 24h
          </span>
        </StatusRow>
        <CTARow {...fadeUp(0.8)}>
          <Primary
            href="#work"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>
              View selected work <LuArrowDownRight size={16} />
            </span>
          </Primary>
          <Secondary
            href="#contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Get in touch</span>
          </Secondary>
        </CTARow>
      </div>

      <SideMeta {...fadeUp(1)}>
        <MetaBlock>
          <span className="key">⎯ currently</span>
          <span className="val">
            Developer <em>@</em> Scorchsoft
          </span>
        </MetaBlock>
        <MetaBlock>
          <span className="key">⎯ previously</span>
          <span className="val">
            Head Engineer <em>@</em> SafeNet Education
          </span>
        </MetaBlock>
        <MetaBlock>
          <span className="key">⎯ stack</span>
          <span className="val">
            RN · TS · Laravel · NestJS · Postgres · AWS
          </span>
        </MetaBlock>
        <MetaBlock>
          <span className="key">⎯ shipped</span>
          <span className="val">
            15+ production apps <em>·</em> 10k+ downloads
          </span>
        </MetaBlock>
      </SideMeta>

      <ScrollHint {...fadeUp(1.2)}>
        <motion.span
          className="line"
          animate={{ scaleX: [0.5, 1, 0.5] }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        Scroll to explore
      </ScrollHint>
    </Section>
  );
};

export default Introduction;

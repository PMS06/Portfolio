import React from "react";
import styled from "styled-components";
import { LuMapPin } from "react-icons/lu";

const Section = styled.section`
  position: relative;
  padding: 6rem 7vw;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1080px) {
    padding: 5rem 6vw;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1.25rem;
  margin-bottom: 4rem;
`;

const Numeral = styled.span`
  font-family: "Geist Mono", monospace;
  font-size: 0.85rem;
  color: ${(p) => p.theme.accent};
  letter-spacing: 0.1em;
`;

const Title = styled.h2`
  font-family: "Instrument Serif", serif;
  font-weight: 400;
  font-size: clamp(2rem, 4.5vw, 3.4rem);
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.fg};

  em {
    font-style: italic;
    color: ${(p) => p.theme.accent};
  }
`;

const Rule = styled.span`
  flex: 1;
  height: 1px;
  background: ${(p) => p.theme.border};
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const Role = styled.article`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 4rem;
  padding: 2.5rem 0;
  border-top: 1px solid ${(p) => p.theme.border};
  position: relative;
  transition: padding 0.3s ease;

  &:last-child {
    border-bottom: 1px solid ${(p) => p.theme.border};
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 1px;
    background: ${(p) => p.theme.accent};
    transition: width 0.6s cubic-bezier(0.7, 0, 0.2, 1);
  }

  &:hover::before {
    width: 100%;
  }

  &:hover .arrow {
    transform: translateX(8px);
    color: ${(p) => p.theme.accent};
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    padding: 2rem 0;
  }
`;

const Dates = styled.div`
  font-family: "Geist Mono", monospace;
  font-size: 0.8rem;
  color: ${(p) => p.theme.fgMuted};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .now {
    color: ${(p) => p.theme.accent};
  }

  .loc {
    color: ${(p) => p.theme.fgSubtle};
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
`;

const Body = styled.div``;

const RoleTitle = styled.h3`
  font-family: "Instrument Serif", serif;
  font-weight: 400;
  font-size: clamp(1.5rem, 3vw, 2.1rem);
  color: ${(p) => p.theme.fg};
  display: flex;
  align-items: baseline;
  gap: 0.7rem;
  flex-wrap: wrap;

  .company {
    font-style: italic;
    color: ${(p) => p.theme.accent};
  }

  .sep {
    color: ${(p) => p.theme.fgSubtle};
    font-family: "Geist Mono", monospace;
    font-size: 0.85rem;
  }

  .arrow {
    font-family: "Geist Mono", monospace;
    color: ${(p) => p.theme.fgSubtle};
    font-size: 1rem;
    transition: all 0.3s ease;
  }
`;

const Bullets = styled.ul`
  margin-top: 1.5rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  color: ${(p) => p.theme.fgMuted};
  font-size: 0.98rem;
  line-height: 1.7;
  max-width: 70ch;

  li {
    position: relative;
    padding-left: 1.5rem;
  }

  li::before {
    content: "▸";
    position: absolute;
    left: 0;
    color: ${(p) => p.theme.accent};
    font-size: 0.7rem;
    top: 0.45rem;
  }

  strong {
    color: ${(p) => p.theme.fg};
    font-weight: 500;
  }
`;

const Tags = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  font-family: "Geist Mono", monospace;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.32rem 0.6rem;
  color: ${(p) => p.theme.fgMuted};
  border: 1px solid ${(p) => p.theme.border};
`;

const roles = [
  {
    company: "Scorchsoft",
    title: "Developer",
    dates: "Dec 2023 — Present",
    isNow: true,
    location: "Birmingham, UK",
    bullets: [
      <>
        Delivered production apps across mobile and web — including{" "}
        <strong>Gapped</strong> (dual-camera live-streaming social platform
        with ticketing) and <strong>IStumble</strong> (care-home healthcare
        assessment with an internal React analytics dashboard).
      </>,
      <>
        Refactored <strong>~80%</strong> of <strong>Prakash Astrologer</strong>{" "}
        (10k+ downloads): migrated React Native CLI → Expo, upgraded IAP &
        push, introduced subscription billing — restored App Store compliance
        and cut crash rate significantly.
      </>,
      <>
        Led performance overhaul of a high-traffic teacher assessment platform
        — Laravel queues, Redis caching, fixed N+1s, effective DB indexing,
        ECS/Fargate setup — cutting average response time by{" "}
        <strong>~60%</strong>.
      </>,
      <>
        Worked Agile with cross-functional teams and external clients to
        gather requirements, communicate progress, and deliver tailored
        software solutions.
      </>,
    ],
    tags: [
      "React Native",
      "Laravel",
      "TypeScript",
      "Expo",
      "AWS",
      "Redis",
      "Firebase",
    ],
  },
  {
    company: "SafeNet Education",
    title: "Head Engineer",
    dates: "Dec 2022 — Nov 2023",
    location: "Yangon, Myanmar",
    bullets: [
      <>
        Built and redesigned the company's public website using{" "}
        <strong>Payload CMS</strong> and rebuilt the internal staff portal
        (React · MongoDB · MySQL · Node) — from design to deployment.
      </>,
      <>
        Implemented HTTPS enforcement, <strong>RBAC</strong>, and input
        sanitisation, achieving <strong>zero security incidents</strong> over
        12 months of live operation.
      </>,
      <>
        Managed email infrastructure for 50+ accounts at{" "}
        <strong>99.9% uptime</strong>; integrated payment, SMS, and analytics
        APIs, saving ~5 hours of manual admin per week.
      </>,
    ],
    tags: [
      "React",
      "Node.js",
      "Payload CMS",
      "MongoDB",
      "MySQL",
      "Nodemailer",
    ],
  },
];

const Experience = ({ isdarktheme }) => {
  return (
    <Section id="experience">
      <Header>
        <Numeral>02 / experience</Numeral>
        <Title>
          where I've <em>shipped</em>
        </Title>
        <Rule />
      </Header>

      <Timeline>
        {roles.map((r, i) => (
          <Role key={i}>
            <Dates>
              <span className={r.isNow ? "now" : ""}>{r.dates}</span>
              <span className="loc">
                <LuMapPin size={11} /> {r.location}
              </span>
            </Dates>
            <Body>
              <RoleTitle>
                <span>{r.title}</span>
                <span className="sep">@</span>
                <span className="company">{r.company}</span>
                <span className="arrow">↗</span>
              </RoleTitle>
              <Bullets>
                {r.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </Bullets>
              <Tags>
                {r.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </Tags>
            </Body>
          </Role>
        ))}
      </Timeline>
    </Section>
  );
};

export default Experience;

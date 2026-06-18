import React from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import { LuArrowUpRight, LuExternalLink } from "react-icons/lu";

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
  margin-bottom: 1.5rem;
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

const Caption = styled.p`
  font-family: "Geist Mono", monospace;
  font-size: 0.8rem;
  color: ${(p) => p.theme.fgMuted};
  margin-bottom: 3rem;
  max-width: 60ch;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${(p) => p.theme.border};
`;

const Card = styled(motion.a)`
  position: relative;
  display: grid;
  grid-template-columns: 200px 1fr auto;
  gap: 2.5rem;
  align-items: center;
  padding: 2.25rem 0.5rem;
  border-bottom: 1px solid ${(p) => p.theme.border};
  cursor: pointer;
  color: ${(p) => p.theme.fg};
  transition: padding 0.4s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${(p) => p.theme.accent};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(0.7, 0, 0.2, 1);
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  &:hover {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  &:hover .name,
  &:hover .desc,
  &:hover .role,
  &:hover .tags span,
  &:hover .arrow {
    color: ${(p) => p.theme.bg};
  }

  &:hover .tags span {
    border-color: ${(p) => p.theme.bg};
  }

  &:hover .arrow {
    transform: translate(8px, -8px) rotate(0deg);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.75rem 0.25rem;
  }
`;

const RoleTag = styled.div`
  font-family: "Geist Mono", monospace;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${(p) => p.theme.fgMuted};
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  transition: color 0.3s ease;

  .role {
    transition: color 0.3s ease;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${(p) => p.theme.accent};
  }

  .num {
    font-family: "Instrument Serif", serif;
    font-style: italic;
    font-size: 1.6rem;
    color: ${(p) => p.theme.fgSubtle};
    line-height: 1;
  }
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

const Name = styled.h3`
  font-family: "Instrument Serif", serif;
  font-weight: 400;
  font-size: clamp(1.65rem, 3.2vw, 2.4rem);
  line-height: 1.05;
  color: ${(p) => p.theme.fg};
  transition: color 0.3s ease;

  em {
    font-style: italic;
    color: ${(p) => p.theme.accent};
  }
`;

const Desc = styled.p`
  font-size: 0.96rem;
  line-height: 1.65;
  color: ${(p) => p.theme.fgMuted};
  max-width: 65ch;
  transition: color 0.3s ease;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.3rem;

  span {
    font-family: "Geist Mono", monospace;
    font-size: 0.68rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 0.28rem 0.5rem;
    color: ${(p) => p.theme.fgMuted};
    border: 1px solid ${(p) => p.theme.border};
    transition: all 0.3s ease;
  }
`;

const Arrow = styled.span`
  font-size: 1.6rem;
  color: ${(p) => p.theme.fgMuted};
  transform: rotate(-12deg);
  transition: all 0.4s cubic-bezier(0.7, 0, 0.2, 1);
  display: grid;
  place-items: center;

  @media (max-width: 900px) {
    justify-self: end;
  }
`;

const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  font-family: "Geist Mono", monospace;
  font-size: 0.8rem;
  color: ${(p) => p.theme.fgMuted};

  a {
    color: ${(p) => p.theme.accent};
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    transition: gap 0.25s ease;
  }

  a:hover {
    gap: 0.75rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const projects = [
  {
    name: "Gapped",
    em: "App",
    role: "Production",
    desc: "Social platform with dual-camera live-streaming, event ticketing, and real-time feeds. Live on the App Store.",
    tags: ["React Native", "Laravel", "Firebase"],
    href: "https://apps.apple.com/us/app/gapped-online/id6450257106",
  },
  {
    name: "IStumble",
    em: "Health",
    role: "Production",
    desc: "Healthcare platform for UK care homes — staff submit assessments while managers review statistics and export reports via an internal React dashboard.",
    tags: ["React Native", "Laravel", "Firebase"],
    href: "https://apps.apple.com/gb/app/istumble/id1449708948",
  },
  {
    name: "Path2Uni",
    em: "Edu",
    role: "Personal",
    desc: "App for Myanmar students pursuing overseas study — browse universities, book consultations, scan documents, and chat with an AI advisor. Live on the App Store.",
    tags: ["React Native", "Laravel", "MySQL"],
    href: "https://apps.apple.com/by/app/path2uni/id6744646720",
  },
  {
    name: "Paddington",
    em: "AI",
    role: "Personal",
    desc: "English-learning web app with real-time AI spoken practice (GPT-4o realtime), performance reports, feedback analysis, and auto-generated IELTS materials.",
    tags: ["React", "Inertia.js", "Laravel", "GPT-4o"],
    href: "https://paddingtonlearn.com/",
  },
  {
    name: "StayForWork",
    em: "B2B",
    role: "Full-stack",
    desc: "B2B corporate accommodation platform — enquiry-to-booking lifecycle, host quoting with commission, Haversine recommendations, gamification, Filament admin with analytics, and owned CI/CD on GHCR.",
    tags: ["Laravel", "React 19", "TypeScript", "Inertia.js", "Redis", "Filament", "AWS S3"],
    href: "https://stayforwork.co.uk/",
  },
  {
    name: "SPX",
    em: "SaaS",
    role: "Full-stack",
    desc: "SaaS for field operations — asset compliance, inspections, KPI tracking, visit scheduling, shipment logistics, Meilisearch-powered global search with scope-aware filtering, 2FA, JWT rotation, and CI/CD via GitHub Actions.",
    tags: ["NestJS", "React 19", "TypeScript", "Prisma", "Redis", "BullMQ", "Meilisearch"],
    href: "https://spx.com/",
  },
  {
    name: "Prakash Astrologer",
    em: "Refactor",
    role: "Refactor",
    desc: "10k+ downloads. Migrated from React Native CLI to Expo, upgraded IAP and push notifications, introduced subscription billing, and restored App Store compliance.",
    tags: ["React Native", "Expo", "IAP"],
    href: "https://play.google.com/store/apps/details?id=com.prakash.astrology",
  },
  {
    name: "Teacher Assessment",
    em: "Perf",
    role: "Performance",
    desc: "High-traffic teacher assessment platform — Laravel queues, Redis caching, fixed N+1 queries, effective DB indexing, ECS/Fargate setup. Cut average response time by ~60%.",
    tags: ["Laravel", "Redis", "AWS ECS", "Fargate"],
    href: "https://play.google.com/store/apps/details?id=com.taa.oxtrack",
  },
];

const Projects = () => {
  return (
    <Section id="work">
      <Header>
        <Numeral>04 / selected work</Numeral>
        <Title>
          things I've <em>shipped</em>
        </Title>
        <Rule />
      </Header>
      <Caption>
        A handful of highlights from a longer list — production systems I've
        owned end-to-end, refactored, or meaningfully shaped. Live links
        inline.
      </Caption>

      <Grid>
        {projects.map((p, i) => (
          <Card
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: i * 0.05, ease: "easeOut" }}
          >
            <RoleTag>
              <span className="num">
                {String(i + 1).padStart(2, "0")}.
              </span>
              <span className="role">{p.role}</span>
            </RoleTag>
            <Middle>
              <Name className="name">{p.name}</Name>
              <Desc className="desc">{p.desc}</Desc>
              <Tags className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </Tags>
            </Middle>
            <Arrow className="arrow">
              <LuArrowUpRight size={28} />
            </Arrow>
          </Card>
        ))}
      </Grid>

      <FooterRow>
        <span>More tucked away on GitHub →</span>
        <a
          href="https://github.com/PMS06"
          target="_blank"
          rel="noreferrer"
        >
          github.com/PMS06 <LuExternalLink size={14} />
        </a>
      </FooterRow>
    </Section>
  );
};

export default Projects;

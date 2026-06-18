import React from "react";
import styled from "styled-components";
import {
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiPython,
  SiHtml5,
  SiCss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiLaravel,
  SiInertia,
  SiRedux,
  SiTailwindcss,
  SiSass,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiDocker,
  SiGithub,
  SiBitbucket,
  SiPostman,
  SiKalilinux,
  SiPayloadcms,
  SiKubernetes,
  SiTerraform,
  SiDotnet,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaAws } from "react-icons/fa6";
import { LuDatabase, LuGitBranch, LuCloud } from "react-icons/lu";

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
  margin-bottom: 3rem;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
  border-top: 1px solid ${(p) => p.theme.border};
  border-left: 1px solid ${(p) => p.theme.border};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Cat = styled.div`
  padding: 2rem 2rem;
  border-right: 1px solid ${(p) => p.theme.border};
  border-bottom: 1px solid ${(p) => p.theme.border};
  transition: background 0.3s ease;

  &:hover {
    background: ${(p) => p.theme.surfaceAlt};
  }

  &:hover .label .arrow {
    transform: translateX(6px);
    color: ${(p) => p.theme.accent};
  }
`;

const CatLabel = styled.div`
  font-family: "Geist Mono", monospace;
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${(p) => p.theme.fgMuted};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed ${(p) => p.theme.border};

  .arrow {
    color: ${(p) => p.theme.fgSubtle};
    transition: all 0.25s ease;
  }
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1rem;
`;

const Chip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.55rem 0.85rem;
  border: 1px solid ${(p) => p.theme.border};
  font-family: "Geist Mono", monospace;
  font-size: 0.78rem;
  color: ${(p) => p.theme.fg};
  background: ${(p) => p.theme.surface};
  transition: all 0.25s ease;
  cursor: default;

  svg {
    flex-shrink: 0;
    transition: transform 0.25s ease;
  }

  &:hover {
    border-color: ${(p) => p.theme.accent};
    transform: translateY(-2px);
    color: ${(p) => p.theme.accent};
  }

  &:hover svg {
    transform: rotate(-6deg) scale(1.1);
  }
`;

const categories = [
  {
    label: "Languages",
    items: [
      { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
      { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
      { name: "PHP", icon: <SiPhp color="#777bb4" /> },
      { name: "Python", icon: <SiPython color="#3776ab" /> },
      { name: "C#", icon: <TbBrandCSharp color="#9b4f96" /> },
      { name: "HTML", icon: <SiHtml5 color="#e34f26" /> },
      { name: "CSS", icon: <SiCss color="#1572b6" /> },
    ],
  },
  {
    label: "Frameworks & Libraries",
    items: [
      { name: "React", icon: <SiReact color="#61dafb" /> },
      { name: "React Native", icon: <SiReact color="#61dafb" /> },
      { name: "Node.js", icon: <SiNodedotjs color="#5fa04e" /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "NestJS", icon: <SiNestjs color="#e0234e" /> },
      { name: "Laravel", icon: <SiLaravel color="#ff2d20" /> },
      { name: "Inertia.js", icon: <SiInertia color="#9553e9" /> },
      { name: "Redux", icon: <SiRedux color="#764abc" /> },
      { name: "Tailwind", icon: <SiTailwindcss color="#06b6d4" /> },
      { name: "SCSS", icon: <SiSass color="#cf649a" /> },
      { name: ".NET", icon: <SiDotnet color="#512bd4" /> },
    ],
  },
  {
    label: "Databases & CMS",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql color="#4169e1" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
      { name: "MySQL", icon: <SiMysql color="#4479a1" /> },
      { name: "DynamoDB", icon: <LuDatabase color="#4053d6" /> },
      { name: "Payload CMS", icon: <SiPayloadcms /> },
    ],
  },
  {
    label: "Cloud & Infra",
    items: [
      { name: "AWS", icon: <FaAws color="#ff9900" /> },
      { name: "Firebase", icon: <SiFirebase color="#ffca28" /> },
      { name: "Docker", icon: <SiDocker color="#2496ed" /> },
      { name: "Kubernetes", icon: <SiKubernetes color="#326ce5" /> },
      { name: "Terraform", icon: <SiTerraform color="#7b42bc" /> },
      { name: "IaC", icon: <LuCloud color="#8a8b91" /> },
    ],
  },
  {
    label: "Tooling",
    items: [
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Bitbucket", icon: <SiBitbucket color="#2684ff" /> },
      { name: "Postman", icon: <SiPostman color="#ff6c37" /> },
      { name: "Kali Linux", icon: <SiKalilinux color="#557c94" /> },
    ],
  },
  {
    label: "Methodology",
    items: [{ name: "Agile", icon: <LuGitBranch /> }],
  },
];

const Skills = () => {
  return (
    <Section id="skills">
      <Header>
        <Numeral>03 / skills</Numeral>
        <Title>
          tools of the <em>trade</em>
        </Title>
        <Rule />
      </Header>

      <Grid>
        {categories.map((c) => (
          <Cat key={c.label}>
            <CatLabel className="label">
              <span>{c.label}</span>
              <span className="arrow">↗</span>
            </CatLabel>
            <Items>
              {c.items.map((it) => (
                <Chip key={it.name}>
                  {it.icon}
                  {it.name}
                </Chip>
              ))}
            </Items>
          </Cat>
        ))}
      </Grid>
    </Section>
  );
};

export default Skills;

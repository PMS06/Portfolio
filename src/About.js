import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  padding: 8rem 7vw;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1080px) {
    padding: 6rem 6vw;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 5rem;
  align-items: start;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Prose = styled.div`
  font-size: 1.05rem;
  line-height: 1.85;
  color: ${(p) => p.theme.fgMuted};
  max-width: 60ch;

  p + p {
    margin-top: 1.25rem;
  }

  strong {
    color: ${(p) => p.theme.fg};
    font-weight: 500;
  }

  em {
    font-family: "Instrument Serif", serif;
    font-style: italic;
    color: ${(p) => p.theme.accent};
    font-size: 1.2em;
  }
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Manifest = styled.div`
  position: relative;
  border: 1px solid ${(p) => p.theme.border};
  background: ${(p) => p.theme.surface};
  font-family: "Geist Mono", monospace;
  font-size: 0.82rem;
  color: ${(p) => p.theme.fgMuted};

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border: 1px solid ${(p) => p.theme.accent};
    transform: translate(10px, 10px);
    z-index: -1;
    pointer-events: none;
  }
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 1rem;
  border-bottom: 1px solid ${(p) => p.theme.border};
  background: ${(p) => p.theme.surfaceAlt};

  .dots {
    display: flex;
    gap: 0.4rem;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${(p) => p.theme.border};
  }

  .dot.live {
    background: ${(p) => p.theme.accent};
  }

  .file {
    font-size: 0.72rem;
    color: ${(p) => p.theme.fgSubtle};
    letter-spacing: 0.04em;
  }
`;

const Body = styled.div`
  padding: 1.5rem 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 96px 1fr;
  align-items: baseline;
  gap: 1rem;

  .key {
    color: ${(p) => p.theme.fgSubtle};
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 0.68rem;
  }

  .val {
    color: ${(p) => p.theme.fg};
    font-size: 0.88rem;
    line-height: 1.5;
  }

  .val em {
    font-family: "Instrument Serif", serif;
    font-style: italic;
    color: ${(p) => p.theme.accent};
    font-size: 1.05rem;
  }

  .pill {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: ${(p) => p.theme.accent};
  }

  .pill::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #36e08a;
    box-shadow: 0 0 10px rgba(54, 224, 138, 0.6);
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
  border-top: 1px solid ${(p) => p.theme.border};
  border-left: 1px solid ${(p) => p.theme.border};
`;

const Stat = styled.div`
  padding: 1.4rem 1.25rem;
  border-right: 1px solid ${(p) => p.theme.border};
  border-bottom: 1px solid ${(p) => p.theme.border};

  .num {
    font-family: "Instrument Serif", serif;
    font-size: 2.4rem;
    line-height: 1;
    color: ${(p) => p.theme.fg};

    em {
      font-style: italic;
      color: ${(p) => p.theme.accent};
    }
  }

  .label {
    margin-top: 0.5rem;
    font-family: "Geist Mono", monospace;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: ${(p) => p.theme.fgMuted};
  }
`;

const About = () => {
  return (
    <Section id="about">
      <Header>
        <Numeral>01 / about</Numeral>
        <Title>
          a brief <em>biography</em>
        </Title>
        <Rule />
      </Header>

      <Grid>
        <Prose>
          <p>
            Hello — I'm <strong>Phone</strong>, a self-taught engineer who
            began tinkering with HTML during the 2020 lockdowns and has,
            somewhat surprisingly, never stopped. Four years and several
            timezones later I work end-to-end across mobile and web, with a
            focus on <strong>React Native</strong>, <strong>TypeScript</strong>
            , and <strong>Laravel</strong>.
          </p>
          <p>
            At <strong>Scorchsoft</strong> I've delivered production apps
            across mobile and web — a dual-camera live-streaming social
            platform, a healthcare assessment tool for UK care homes, and a
            high-traffic teacher assessment platform whose response time I cut
            by <em>~60%</em> through Laravel queues, Redis caching, and
            ECS/Fargate work.
          </p>
          <p>
            Earlier, as <strong>Head Engineer</strong> at SafeNet Education in
            Yangon, I rebuilt the public site and internal staff portal — from
            design to deployment — with zero security incidents across 12
            months of live operation.
          </p>
          <p>
            Outside of work I ship personal projects in the same stack, lift
            heavy things, and keep notes obsessively. I'm open to{" "}
            <strong>mid-to-senior roles</strong> with greater ownership over
            technical decisions.
          </p>
        </Prose>

        <RightCol>
          <Manifest>
            <TopBar>
              <span className="dots">
                <span className="dot live" />
                <span className="dot" />
                <span className="dot" />
              </span>
              <span className="file">~/now.txt</span>
            </TopBar>
            <Body>
              <Row>
                <span className="key">based</span>
                <span className="val">
                  Bristol, UK <em>·</em> from Yangon, MM
                </span>
              </Row>
              <Row>
                <span className="key">stack</span>
                <span className="val">
                  RN <em>·</em> TS <em>·</em> Laravel <em>·</em> NestJS{" "}
                  <em>·</em> Postgres
                </span>
              </Row>
              <Row>
                <span className="key">infra</span>
                <span className="val">
                  AWS <em>·</em> Docker <em>·</em> Terraform <em>·</em> K8s
                </span>
              </Row>
              <Row>
                <span className="key">reading</span>
                <span className="val">
                  Designing Data-Intensive Applications
                </span>
              </Row>
              <Row>
                <span className="key">timezone</span>
                <span className="val">GMT · responds within 24h</span>
              </Row>
            </Body>
          </Manifest>

          <Stats>
            <Stat>
              <div className="num">
                4<em>+</em>
              </div>
              <div className="label">Years commercial</div>
            </Stat>
            <Stat>
              <div className="num">
                15<em>+</em>
              </div>
              <div className="label">Apps shipped</div>
            </Stat>
            <Stat>
              <div className="num">
                10<em>k+</em>
              </div>
              <div className="label">Downloads</div>
            </Stat>
            <Stat>
              <div className="num">
                ~60<em>%</em>
              </div>
              <div className="label">Latency cut</div>
            </Stat>
          </Stats>
        </RightCol>
      </Grid>
    </Section>
  );
};

export default About;

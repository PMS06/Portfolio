import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import { LuSend, LuMail, LuMapPin, LuLinkedin } from "react-icons/lu";

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

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: start;
  margin-top: 3rem;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Pitch = styled.p`
  font-family: "Instrument Serif", serif;
  font-size: clamp(1.6rem, 2.8vw, 2.1rem);
  line-height: 1.25;
  color: ${(p) => p.theme.fg};

  em {
    font-style: italic;
    color: ${(p) => p.theme.accent};
  }
`;

const Channels = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: "Geist Mono", monospace;
  font-size: 0.86rem;
`;

const Channel = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: ${(p) => p.theme.fgMuted};
  padding: 0.5rem 0;
  border-bottom: 1px dashed ${(p) => p.theme.border};
  transition: color 0.25s ease, padding 0.25s ease;

  svg {
    color: ${(p) => p.theme.accent};
  }

  &:hover {
    color: ${(p) => p.theme.fg};
    padding-left: 0.5rem;
  }
`;

const StyledForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border: 1px solid ${(p) => p.theme.border};
  background: ${(p) => p.theme.surface};
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .label {
    font-family: "Geist Mono", monospace;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: ${(p) => p.theme.fgMuted};
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .label .num {
    color: ${(p) => p.theme.accent};
  }
`;

const inputStyles = `
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid;
  border-radius: 0;
  padding: 0.65rem 0;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.25s ease;
`;

const Input = styled.input`
  ${inputStyles}
  color: ${(p) => p.theme.fg};
  border-bottom-color: ${(p) => p.theme.border};

  &::placeholder {
    color: ${(p) => p.theme.fgSubtle};
  }

  &:focus {
    border-bottom-color: ${(p) => p.theme.accent};
  }
`;

const Textarea = styled.textarea`
  ${inputStyles}
  color: ${(p) => p.theme.fg};
  border-bottom-color: ${(p) => p.theme.border};
  resize: vertical;
  min-height: 110px;
  font-family: "Geist", sans-serif;

  &::placeholder {
    color: ${(p) => p.theme.fgSubtle};
  }

  &:focus {
    border-bottom-color: ${(p) => p.theme.accent};
  }
`;

const Submit = styled(motion.button)`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.95rem 1.4rem;
  background: ${(p) => p.theme.accent};
  color: ${(p) => p.theme.bg};
  border: none;
  font-family: "Geist Mono", monospace;
  font-size: 0.82rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  span {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    gap: 0.65rem;
    transition: color 0.35s ease;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${(p) => p.theme.fg};
    transform: translateY(101%);
    transition: transform 0.4s cubic-bezier(0.7, 0, 0.2, 1);
  }

  &:hover::after {
    transform: translateY(0);
  }

  &:hover span {
    color: ${(p) => p.theme.bg};
  }
`;

const Form = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Section id="contact">
      <Header>
        <Numeral>05 / contact</Numeral>
        <Title>
          let's <em>talk</em>
        </Title>
        <Rule />
      </Header>

      <Layout>
        <Intro>
          <Pitch>
            Got a product idea, a stack to <em>untangle</em>, or a role to
            fill?
            <br />I read every message.
          </Pitch>
          <Channels>
            <Channel
              href="mailto:phonemyintsan31@gmail.com"
            >
              <LuMail size={14} /> phonemyintsan31@gmail.com
            </Channel>
            <Channel
              href="https://www.linkedin.com/in/pms06/"
              target="_blank"
              rel="noreferrer"
            >
              <LuLinkedin size={14} /> linkedin.com/in/pms06
            </Channel>
            <Channel as="span">
              <LuMapPin size={14} /> Bristol, United Kingdom
            </Channel>
          </Channels>
        </Intro>

        <StyledForm
          action="https://formspree.io/f/xknlrnlo"
          method="POST"
          onSubmit={() => setSubmitted(true)}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Field>
            <span className="label">
              <span className="num">01</span> Name
            </span>
            <Input type="text" name="name" placeholder="your full name" required />
          </Field>
          <Field>
            <span className="label">
              <span className="num">02</span> Email
            </span>
            <Input
              type="email"
              name="_replyto"
              placeholder="you@somewhere.com"
              required
            />
          </Field>
          <Field>
            <span className="label">
              <span className="num">03</span> Message
            </span>
            <Textarea
              name="message"
              rows="5"
              placeholder="tell me about the work, the timeline, anything"
              required
            />
          </Field>
          <Submit
            type="submit"
            whileTap={{ scale: 0.97 }}
            disabled={submitted}
          >
            <span>
              {submitted ? "Sent ✓" : "Send message"}
              {!submitted && <LuSend size={14} />}
            </span>
          </Submit>
        </StyledForm>
      </Layout>
    </Section>
  );
};

export default Form;

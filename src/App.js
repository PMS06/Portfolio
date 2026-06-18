import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import useSound from "use-sound";
import { HelmetProvider, Helmet } from "react-helmet-async";
import toggleClickSound from "./sounds/toggle-click.wav";

import GlobalStyle from "./globalStyle";
import Navbar from "./components/Navbar";
import Introduction from "./Introduction";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Form from "./Form";
import SocialMediaBar from "./components/SocialMediaBar";
import EmailBar from "./components/EmailBar";
import ScrollToTop from "./components/ScrollToTop";

const Shell = styled.div`
  position: relative;
  min-height: 100vh;
  color: ${(p) => p.theme.fg};
  background: transparent;
  overflow: hidden;
`;

const darkTheme = {
  mode: "dark",
  bg: "#0e0e10",
  surface: "#16171a",
  surfaceAlt: "#1c1d21",
  border: "#2a2b30",
  fg: "#f2efe9",
  fgMuted: "#a0a1a8",
  fgSubtle: "#6c6d73",
  accent: "#ff5b3d",
  accentSoft: "rgba(255, 91, 61, 0.10)",
  shadow: "0 30px 60px -30px rgba(0,0,0,0.8)",
  grain: 0.045,
  grainBlend: "overlay",
};

const lightTheme = {
  mode: "light",
  bg: "#f2efe9",
  surface: "#ffffff",
  surfaceAlt: "#f7f4ee",
  border: "#d9d4c7",
  fg: "#0e0e10",
  fgMuted: "#52525a",
  fgSubtle: "#8a8a92",
  accent: "#d63d1f",
  accentSoft: "rgba(214, 61, 31, 0.08)",
  shadow: "0 30px 60px -30px rgba(20,20,20,0.18)",
  grain: 0.05,
  grainBlend: "multiply",
};

function App() {
  const [theme, setTheme] = useState("dark");
  const isdarktheme = theme === "dark";
  const [playToggleSound] = useSound(toggleClickSound, { volume: 0.2 });

  const toggleTheme = () => {
    playToggleSound();
    setTheme(isdarktheme ? "light" : "dark");
  };

  return (
    <HelmetProvider>
      <ThemeProvider theme={isdarktheme ? darkTheme : lightTheme}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Phone Myint San — Full-stack & Mobile Engineer</title>
          <meta
            name="description"
            content="Phone Myint San — Full-stack & mobile engineer shipping React Native, TypeScript, and Laravel systems. Birmingham, UK."
          />
        </Helmet>
        <GlobalStyle />
        <Shell>
          <Navbar isdarktheme={isdarktheme} toggleTheme={toggleTheme} />
          <Introduction isdarktheme={isdarktheme} />
          <About isdarktheme={isdarktheme} />
          <Experience isdarktheme={isdarktheme} />
          <Skills isdarktheme={isdarktheme} />
          <Projects isdarktheme={isdarktheme} />
          <Form isdarktheme={isdarktheme} />
          <SocialMediaBar isdarktheme={isdarktheme} />
          <EmailBar isdarktheme={isdarktheme} />
          <ScrollToTop />
        </Shell>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;

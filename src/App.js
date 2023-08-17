import { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import MoonIcon from "./components/icons/MoonIcon";
import SunIcon from "./components/icons/SunIcon";
import Switch from "./components/Switch";
import useSound from 'use-sound';
import toggleClickSound from './sounds/toggle-click.wav';
import SocialMediaBar from "./components/SocialMediaBar";
import EmailBar from "./components/EmailBar";
import GlobalStyle from "./globalStyle";
import Introduction from "./Introduction";
import ButtonComponent from "./components/ButtonComponent";
import About from "./About";

const StyledApp = styled.div`
  position: relative;
  min-height: 300vh;
  text-align: center;
  padding-top: 10rem;
  background-color: ${(props) => props.theme.body};
  transition: all 0.25s ease;
`;
const ThemeSwitcherWrapper = styled.div`
  position: absolute; 
  right: 1rem; 
  top: 1rem;
  display: flex;
  align-items: center;
`;

const darkTheme = {
  body: "#171c28",
  fontColor: "#ffffff",
  nameColor: "#ffffff",
  descriptionColor: "#cccccc",
  icons: "#ffffff",
};
const lightTheme = {
  body: "#fff",
  fontColor: "#333333",
  icons: "#333333",
  nameColor: "#133955",
  descriptionColor: "#666",
};


  function App() {
    const [theme, setTheme] = useState("dark");
    const isdarktheme = theme === "dark";

    const [playToggleSound] = useSound(toggleClickSound, { volume: 0.25 });

    const toggleTheme = () => {
      playToggleSound(); 
      setTheme(isdarktheme ? "light" : "dark");
    };

  return (
    <>
    <GlobalStyle/>
    <ThemeProvider theme={isdarktheme ? darkTheme : lightTheme}>
      <StyledApp>
        <ThemeSwitcherWrapper>
        <SunIcon isdarktheme={isdarktheme} />
          <Switch toggleTheme={toggleTheme} isdarktheme={isdarktheme} />
          <MoonIcon isdarktheme={isdarktheme} />
        </ThemeSwitcherWrapper>
        <Introduction isdarktheme={isdarktheme}/>
        <ButtonComponent/>
        <About isdarktheme={isdarktheme}/>
        <EmailBar isdarktheme={isdarktheme}/>
        <SocialMediaBar isdarktheme={isdarktheme} />
      </StyledApp>
    </ThemeProvider>
 
    </>
  );
}

export default App;
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  html, body {
    overflow-x: hidden;
    background-color: ${(p) => p.theme.bg};
    color: ${(p) => p.theme.fg};
    font-family: 'Geist', system-ui, -apple-system, sans-serif;
    font-weight: 400;
    font-feature-settings: 'ss01', 'ss02', 'cv01', 'cv11';
    transition: background-color 0.5s ease, color 0.5s ease;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 9999;
    opacity: ${(p) => p.theme.grain};
    mix-blend-mode: ${(p) => p.theme.grainBlend};
    background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1.2 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
  }

  ::selection {
    background-color: ${(p) => p.theme.accent};
    color: ${(p) => p.theme.bg};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${(p) => p.theme.bg};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(p) => p.theme.border};
    border-radius: 0;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${(p) => p.theme.accent};
  }
`;

export default GlobalStyle;

import React from 'react';
import styled from 'styled-components';


const EmailBarContainer = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    content: '';
    height: 150px; 
    width: 1px;
    background-color:${(props) => props.theme.icons};
  }

  @media (max-width: 768px) {
    transform: none;
    top: auto;
    right: 50%;
    flex-direction: row;
    transform: translateX(50%);  

    &::after {
        display: none;
      }
  }

  
`;

const EmailText = styled.a`
  writing-mode: vertical-rl;  
  font-family: 'Roboto Mono', monospace; 
  font-size: 13px;
  text-decoration: none;
  color: ${(props) => props.theme.icons};
  cursor: pointer;
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
   display: none;
  }
`;

function EmailBar({ isdarktheme }) {
    return (
      <EmailBarContainer isdarktheme={isdarktheme}>
        <EmailText href="mailto:phonemyintsan31@gmail.com" isDarkTheme={isdarktheme}>
          phonemyintsan31@gmail.com
        </EmailText>
      </EmailBarContainer>
    );
  }
  
export default EmailBar;

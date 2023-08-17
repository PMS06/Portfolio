import React from 'react';
import styled, { keyframes } from 'styled-components';




const waveAnimation = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(70deg);
  }
`;

const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  margin-left: 10rem; 
  text-align: left;
  font-family: Roboto;
  font-weight: 300;

  @media (max-width: 1180px) {
    margin-left: 2rem;
    margin-right: 2rem;

  }
`;

const WavingEmoji = styled.span`
  display: inline-block;
  animation: ${waveAnimation} 2s infinite;  
  `;

const Greeting = styled.p`
  font-size: 2.5rem;
  color: ${(props) => props.theme.fontColor};

  @media (max-width: 1180px) {
    font-size: 2rem;
  }
`;

const Intro = styled.p`
  margin-top: 3rem;
  font-size: 1rem;
  font-family: 'Roboto Mono', monospace;
  color: ${(props) => props.theme.fontColor};

  @media (max-width: 1180px) {
    font-size: 1rem;
    margin-top: 2rem;
  }
`;

const Name = styled.p`
  font-size: 3rem;
  margin-top: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.nameColor};

  @media (max-width: 1180px) {
    font-size: 2.5rem;
  }
`;

const Slogan = styled.p`
  font-size: 2rem;
  margin-top: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.fontColor};

  @media (max-width: 1180px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin-top: 1.5rem;
  text-align: justify !important;
  line-height: 1.7;
  color: ${(props) => props.theme.descriptionColor};

  @media (max-width: 1180px) {
    font-size: 0.8rem;
    max-width: 100%;
  }
`;



function Introduction({ isdarktheme }) {
    return (
        <>
        <IntroductionContainer isdarktheme={isdarktheme}>
          <Greeting>Hi! <WavingEmoji>👋</WavingEmoji> </Greeting>
          <Intro>My name is</Intro>
            <Name>
                Phone M San
                 {/* <Typewriter
            onInit={(typewriter) => {
                typewriter.pauseFor(500)
                        .typeString('Phone M San')
                        .callFunction(() => {
                            console.log('Name typed out!');
                        })
                        .start();
            }}
        /> */}
        </Name>
          <Slogan>Turning Dreams into Code.</Slogan>
          <Description isdarktheme={isdarktheme}>
            Being a self taught programmer, I'm just scratching the surface of full-stack development. Every line of code deepens my passion and understanding. My focus is to create user-centered solutions and embracing every lesson along the way.
        </Description>
        </IntroductionContainer>
      
        </>
      );
  }

export default Introduction;

import React from 'react';
import styled from 'styled-components';
import aboutImage from './images/img1.png';

const AboutContainer = styled.div`
    width: 70%;
    margin: 300px auto;
    font-family: Roboto;
    font-weight: 300;
    @media (max-width: 1180px) {
        width: 80%;
        margin: 190px auto;
      }
`;

const AboutHeader = styled.p`
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 1.8rem;
    color: ${(props) => props.theme.nameColor};

    @media (max-width: 1180px) {
        font-size: 1.3rem;
      }
`;

const HorizontalLine = styled.hr`
    height: 1px;
    background-color: #333;
    margin-left: 15px;
    width: 20%;
`;

const AboutContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    margin-left: 2rem;

  @media (max-width: 1180px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0rem;
  }
`;

const AboutText = styled.div`
    flex: 2;
    max-width: 500px;
    text-align: justify;
    line-height: 2;
    color: ${(props) => props.theme.descriptionColor};
    order: 0;

    @media (max-width: 1180px) {
      text-align: justify;
      order: 1;
      font-size: 0.8rem;
    }
`;

const AboutImage = styled.img`
    flex: 1;
    max-width: 50%;
    border-radius: 10px;
    transition: all 0.3s ease;  
    order: 1;

    @media (max-width: 1180px) {
        order: 0;
        width: 90%; 
        height: 200px;  
        object-fit: contain; 
        margin-bottom: 20px;
        
    }

    @media (max-width: 768px) { 
        max-width: 100%;
        height: 200px; 
        margin-bottom: 20px;
    
    }
`;

const SketchedCircle = styled.span`
  display: inline-block;
  position: relative;
  padding: 0em 0.65em;

  font-family: 'Patrick Hand', sans-serif;
    font-weight: bold;

  &::before, &::after {

    content: "";
    position: absolute;
    width: 100%;  
    height: 150%; 
    border: 3px solid #FFD700;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    border-top: none;
    border-left: none;
    transform: translate(-50%, -50%) rotate(25deg);
  }

  &::after {
    border-bottom: none;
    border-right: none;
    transform: translate(-50%, -50%) rotate(-25deg);
  }
`;





const About = ({ isdarktheme }) => {
  return (
    <AboutContainer isdarktheme={isdarktheme}>
      <AboutHeader>
        A Little About Myself
        <HorizontalLine />
      </AboutHeader>
      <AboutContent>
        <AboutText>
          <p>
            Hello! I'm Phone Myint San, a passionate 20-year-old full-stack developer from Myanmar. In the midst of the COVID-19 pandemic, while the world paused, my journey in the realm of technology began with HTML & CSS.
          </p>
           <p>
            Recently, I finished studying at Chichester College. I later transitioned to a pivotal role at <SketchedCircle>SafeNet</SketchedCircle>, an education agency. In this capacity, I've taken the lead in developing the website and agent portal. From my humble beginnings in programming during the pandemic to now shaping digital solutions, my journey underscores my dedication and evolving skill set.
          </p>
        </AboutText>
        <AboutImage src={aboutImage} alt="About me" />
      </AboutContent>
    </AboutContainer>
  );
}

export default About;

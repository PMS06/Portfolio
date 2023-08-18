import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGitAlt, faPython, faAws } from '@fortawesome/free-brands-svg-icons';
import mongoIcon from './images/mongo.png';
import vb from './images/vb.png';
import c from './images/C.png';
import kali from './images/Kali-dragon-icon.svg.png'

const SkillContainer = styled.div`
  width: 70%;
  margin: auto;
  font-family: Roboto;
  font-weight: 300;
  
  @media (max-width: 1180px) {
    width: 80%;
    margin: 190px auto;
  }
`;

const SkillHeader = styled.p`
  display: flex;
  align-items: center;

  font-size: 1.8rem;
  color: ${(props) => props.theme.nameColor};
  
  @media (max-width: 1180px) {
    font-size: 1.3rem;
  }
`;

const SkillHeader2 = styled.p`
  display: flex;
  align-items: center;
 
  font-size: 1.5rem;
  color: ${(props) => props.theme.nameColor};
  
  @media (max-width: 1180px) {
    font-size: 1rem;
  }
`;

const HorizontalLine = styled.hr`
  height: 1px;
  background-color: #333;
  margin-left: 15px;
  width: 20%;
`;

const IconList = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  padding-left: 15px;
  gap: 90px;  
  margin: 80px;

  @media (max-width: 1180px) {
    gap: 40px;  
    margin: 50px;
   
  }
  @media (max-width: 768px) {
    gap: 20px;  
   
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 5em;

  @media (max-width: 1180px) {
    font-size: 3em;  
  }
  @media (max-width: 768px) {
    font-size: 2em;  
  }
`;

const IconImage = styled.img`
  width: 70px; 
  height: auto; 
  margin-left: -15px;
  @media (max-width: 1180px) {
    width: 70px;
    height: 40px; 
  }
  @media (max-width: 768px) {
    width: 40px;
    height: 40px; 

  }
`;

const IconImage2 = styled.img`
  width: 70px; 
  height: 100px;
  object-fit: contain; 
  object-position: center;
  margin-left: 8px;
  @media (max-width: 1180px) {
    width: 40px;
    height: 40px; 
    margin-left: 3px;
  }
  @media (max-width: 768px) {
    width: 40px;
    height: 40px; 
    margin-left: 0.2rem;
  }
`;



const Skills = ({ isdarktheme }) => {
  return (
    <>
      <SkillContainer isdarktheme={isdarktheme}>
        <SkillHeader>
          I've built things with
          <HorizontalLine />
        </SkillHeader>
        <IconList>
            <StyledIcon icon={faHtml5} color="#e34f26" />
            <StyledIcon icon={faCss3Alt} color="#264de4" />
            <StyledIcon icon={faJs} color="#f7df1e" />
            <StyledIcon icon={faReact} color="#00d8ff" />
            <StyledIcon icon={faNodeJs} color="#689f63" />
            <StyledIcon icon={faGitAlt} color="#f34f29" />
            <IconImage src={mongoIcon} alt="MongoDB" />
        </IconList>
        <SkillHeader2>Other Technologies I've Tried</SkillHeader2>
        <IconList>
             <StyledIcon icon={faPython} color="#3776AB" />
             <StyledIcon icon={faAws} color="#FF9900" />
             <IconImage2 src={c} alt="C#" />
             <IconImage2 src={kali} alt="kali" />
            <IconImage2 src={vb} alt="virtual box" />
        </IconList>
      </SkillContainer>
    </>
  )
}

export default Skills;

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

const IconList = styled.div`
  display: flex;
  justify-content: center; 
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
    font-size: 1.5em;  
  }
`;

const IconImage = styled.img`
  width: 50px; 
  height: auto;
  margin-left: -10px;
  @media (max-width: 1180px) {
    width: 40px;
  }
  @media (max-width: 768px) {
    width: 30px;
    margin-top: -3px;
    margin-left: -7px;
  }
`;


const IconImage2 = styled.img`
  width: 50px; 
  height: auto;
  margin-left: 10px;
  @media (max-width: 1180px) {
    width: 40px;
  }
  @media (max-width: 768px) {
    width: 25px;
    object-fit: contain;
    margin-top: -10px;
    margin-left: 10px;
    
  }
`;

const IconImage3 = styled.img`
  width: 80px; 
  height: auto;
  margin-left: 10px;
  object-fit: contain;
  @media (max-width: 1180px) {
    width: 40px;
    margin-top: -10px;
 
  }
  @media (max-width: 768px) {
    width: 35px;
    margin-top: -5px;
    margin-left: 5px;
  }
`;

const IconImage4 = styled.img`
  width: 50px; 
  height: auto;
  margin-left: 10px;
  @media (max-width: 1180px) {
    width: 40px;
  }
  @media (max-width: 768px) {
    width: 35px;
    margin-top: -3px;
    margin-left: 5px;
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
        <SkillHeader>Other Technologies I've Tried</SkillHeader>
        <IconList>
             <StyledIcon icon={faPython} color="#3776AB" />
             <IconImage2 src={c} alt="C#" />
             <IconImage3 src={kali} alt="kali" />
            <StyledIcon icon={faAws} color="#FF9900" />
            <IconImage4 src={vb} alt="virtual box" />
        </IconList>
      </SkillContainer>
    </>
  )
}

export default Skills;

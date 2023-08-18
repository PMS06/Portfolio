import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  width: 70%;
  margin: 300px auto;
  font-family: Roboto;
  font-weight: 300;

  @media (max-width: 1180px) {
    width: 80%;
    margin: 100px auto;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
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

const ProjectGrid = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto Mono', monospace;
  gap: 30px;
  margin-top: 50px; 
  @media (max-width: 1180px) {
    margin-top: 30px; 
  }
`;

const ProjectCard = styled.div`

  padding: 20px;
  margin-left: 10rem;
  text-align: justify;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1180px) {
    margin-left: 0;
  }
`;

const ProjectName = styled.h3`
  font-size: 1.5rem;
  margin-top: 10px;
  line-height: 1.5;
  color: ${(props) => props.theme.fontColor};

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

const ProjectDescription = styled.p`
  margin-top: 35px;
  font-family: 'Roboto';
  line-height: 2;
  color: ${(props) => props.theme.fontColor};

  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

const TechnologiesUsed = styled.div`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;  
  max-height: 100px;  
  overflow-y: auto;  

 
  
  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #007bff;
    border-radius: 5px;
  }
`;


const Tech = styled.span`
  font-family: 'Patrick Hand';
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 5px;
  font-size: 0.9rem;
  color: #007bff;
  border: 1px solid #007bff;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 4px 8px;
    margin-right: 8px;
    margin-bottom: 4px;
  }
`;
const GithubLink = styled.a`
  text-decoration: none;
  font-family: 'Patrick Hand';
    color: ${(props) => props.theme.fontColor};
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;  
  margin-top: 3rem;
  
  &:hover {
    text-decoration: underline;
  }
`;



const Projects = ({ isdarktheme }) => {
  return (
    <>
      <ProjectContainer isdarktheme={isdarktheme}>
        <ProjectHeader>
          Featured Projects
          <HorizontalLine />
        </ProjectHeader>
        <ProjectGrid>
          <ProjectCard>
            <ProjectName>Agent Portal (On Going) </ProjectName>
            <ProjectDescription>A portal that acts as a bridge between students and counselors, enabling students to upload documents and track application statuses, and allowing counselors to manage and update these applications.</ProjectDescription>
            <TechnologiesUsed>
              <Tech>React</Tech>
              <Tech>Node.js</Tech>
              <Tech>Express</Tech>
              <Tech>MongoDB</Tech>
              <Tech>S3</Tech>
              <Tech>socket io</Tech>
            </TechnologiesUsed>
          </ProjectCard>
          <ProjectCard>
            <ProjectName>SafeNet Edu</ProjectName>
            <ProjectDescription>
                A website created to offer insightful information to the audience regarding overseas education including features such as mailing queries and uploading testimonials</ProjectDescription>
            <TechnologiesUsed>
              <Tech>React</Tech>
              <Tech>Node.js</Tech>
              <Tech>MongoDB</Tech>
              <Tech>Express</Tech>
              <Tech>Nodemailer</Tech>
              <Tech>S3</Tech>
              <Tech>Heroku</Tech>
              <Tech>Netlify</Tech>
            </TechnologiesUsed>
          </ProjectCard>
          <ProjectCard>
            <ProjectName>Pretend.PP Clinic(Coursework)</ProjectName>
            <ProjectDescription>An application that offers different functionalities such as scheduling, checking-in, updating, deleting and viewing appointments for  receptionists and veterinarians.</ProjectDescription>
            <TechnologiesUsed>
              <Tech>HTML</Tech>
              <Tech>CSS</Tech>
              <Tech>Javascript</Tech>
              <Tech>IndexedDB</Tech>
              <Tech>Local Storage</Tech>
            </TechnologiesUsed>
          </ProjectCard>
          <ProjectCard>
            <ProjectName>Paris</ProjectName>
            <ProjectDescription>A static website  designed to showcase the various attractions and cultural highlights of Paris, providing users with a virtual tour of the iconic city.</ProjectDescription>
            <TechnologiesUsed>
              <Tech>HTML</Tech>
              <Tech>CSS</Tech>
              <Tech>Javascript</Tech>
              <Tech>wow.js</Tech>
              <Tech>Animate CSS</Tech>
            </TechnologiesUsed>
          </ProjectCard>
        </ProjectGrid>
        <GithubLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">More coming on Github →</GithubLink>
      </ProjectContainer>

    </>
  )
}

export default Projects;

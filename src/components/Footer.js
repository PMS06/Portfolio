import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 20px 0;
  display: flex;
  
  justify-content: center;
  align-items: center;
  font-family: Patrick Hand;

  @media (max-width: 1180px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Text = styled.span`
  font-weight: 300;
  color: ${(props) => props.theme.fontColor};
`;

const SocialIcons = styled.div`
  display: none;  

  @media (max-width: 1180px) {
    display: flex;  
    gap: 25px;
    
  }
`;

const IconLink = styled.a`
color: ${(props) => props.theme.icons};
  font-size: 1.3rem;
  transition: color 0.3s ease;
`;

const Footer = ({isdarktheme}) => {
  return (
    <FooterContainer isdarktheme={isdarktheme}>
      
      <SocialIcons>
        <IconLink href="https://github.com/PMS06" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </IconLink>
        <IconLink href="https://www.instagram.com/pm_san6/?hl=en" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </IconLink>
        <IconLink href="https://twitter.com/PhoneMyintSan14" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/pms06/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </IconLink>
      </SocialIcons>
      <Text>Created by Phone Myint San 💯</Text>
    </FooterContainer>
  );
}

export default Footer;

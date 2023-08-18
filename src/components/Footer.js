import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 20px 0;
  display: flex;
  
  justify-content: center;
  align-items: center;
  font-family: Roboto;

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
    gap: 10px;
    color: ${(props) => props.theme.icons};
  }
`;

const IconLink = styled.a`
  
  font-size: 1.5rem;
  transition: color 0.3s ease;
`;

const Footer = ({isdarktheme}) => {
  return (
    <FooterContainer isdarktheme={isdarktheme}>
      <Text>Created by Phone Myint San</Text>
      <SocialIcons>
        <IconLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </IconLink>
        <IconLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </IconLink>
        <IconLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </IconLink>
        <IconLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </IconLink>
      </SocialIcons>
    </FooterContainer>
  );
}

export default Footer;

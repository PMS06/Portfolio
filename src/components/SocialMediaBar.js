import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import styled, {keyframes} from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(-5px);
  }
  `;

const SocialBar = styled.div`
  position: fixed;
  bottom: 0rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center; 
  

  &::after {
    content: '';
    height: 150px; 
    width: 1px;
    background-color: ${(props) => props.theme.icons};
  }

  a {
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    transition: color 0.3s ease;
    color: ${(props) => props.theme.icons};
  }

  a : hover {
      color: #666;
      animation: ${bounce} 1s;
  }
  @media (max-width: 1024px) {
   display:none;
  }
`;


const SocialMediaBar = ({ isdarktheme }) => {
  return (
    <SocialBar isdarktheme={isdarktheme}>
      <a href="https://github.com/PMS06" target="_blank" rel="noreferrer"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/pms06/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noreferrer"><FaInstagram /></a>
      <a href="https://twitter.com/PhoneMyintSan14" target="_blank" rel="noreferrer"><FaTwitter /></a>
    </SocialBar>
  );
}

export default SocialMediaBar;

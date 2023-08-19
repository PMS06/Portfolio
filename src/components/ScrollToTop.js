import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 50px;
  font-size: 2rem;
  width: 50px; 
  height: 50px;
  border-radius: 50%; 
  border: none;
  cursor: pointer;
  display: none; 
  z-index: 1001; 
  &:hover {
    opacity: 1;
  }
  @media (max-width: 1180px) {
    right: 30px;
  }
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(window.pageYOffset > 400);

  const checkScroll = () => {
    setVisible(prevVisible => {
      // If the button is not visible and the scroll position is greater than 400
      if (!prevVisible && window.pageYOffset > 400) {
        return true;
      } 
      // If the button is visible and the scroll position is less than or equal to 400
      else if (prevVisible && window.pageYOffset <= 400) {
        return false;
      }
      return prevVisible; // return the previous state if neither of the above conditions are met
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <ScrollButton onClick={scrollToTop} style={{ display: visible ? 'block' : 'none' }}>
      👆🏻
    </ScrollButton>
  );
};

export default ScrollToTop;


import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "motion/react";
import { LuArrowUp } from "react-icons/lu";

const Btn = styled(motion.button)`
  position: fixed;
  bottom: 1.75rem;
  right: 1.75rem;
  z-index: 80;
  width: 46px;
  height: 46px;
  border-radius: 999px;
  border: 1px solid ${(p) => p.theme.border};
  background: ${(p) => p.theme.surface};
  color: ${(p) => p.theme.fg};
  display: grid;
  place-items: center;
  cursor: pointer;
  backdrop-filter: blur(8px);

  &:hover {
    border-color: ${(p) => p.theme.accent};
    color: ${(p) => p.theme.accent};
  }
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <Btn
          onClick={goTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <LuArrowUp size={18} />
        </Btn>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;

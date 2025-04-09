import styled from "styled-components";
import { motion } from "motion/react";

const Header = () => {
  const motionHeader1 = {
    hidden: {
      // x: "-100%",
      y: "100%",
      opacity: 0,
    },
    show: {
      // x: "0%",
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0,
        // delay: 1,
      },
    },
  };
  const motionHeader2 = {
    hidden: {
      // x: "-100%",
      y: "100%",
      opacity: 0,
    },
    show: {
      // x: "0%",
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.4,
        // delay: 1.5,
        delay: 0.5,
      },
    },
  };
  const motionHeader3 = {
    hidden: {
      // x: "-100%",
      y: "100%",
      opacity: 0,
    },
    show: {
      // x: "0%",
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 1,
        // delay: 2,
      },
    },
  };

  return (
    <StyledHeaderContainer>
      <StyledHeader variants={motionHeader1} initial="hidden" animate="show">
        Welcome! I'm Nino.
      </StyledHeader>
      <motion.h1 variants={motionHeader2} initial="hidden" animate="show">
        I Create Outstanding
      </motion.h1>
      <StyledHeaderBackground
        variants={motionHeader3}
        initial="hidden"
        animate="show"
      >
        Web Projects.
      </StyledHeaderBackground>
    </StyledHeaderContainer>
  );
};
export default Header;
const StyledHeaderContainer = styled(motion.div)`
  padding: 1rem;
  line-height: 4rem;
  font-size: 1.2rem;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
  @media (max-width: 800px) {
    font-size: 0.7rem;
  }
`;
const StyledHeader = styled(motion.h1)`
  color: #fad24d;
`;
const StyledHeaderBackground = styled(motion.h1)`
  background-color: #fad24d;
  width: 15rem;
  color: rgb(27, 27, 27);
  border-radius: 0.4rem;
`;

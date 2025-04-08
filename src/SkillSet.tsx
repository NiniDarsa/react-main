import styled from "styled-components";
import js from "../images/js.svg";
import tsx from "../images/tsx.svg";
import sass from "../images/sass.svg";
import react from "../images/react.svg";
import figma from "../images/figma.svg";
import MoreInfo from "./MoreInfo";
import useIntersectionObserver from "./useIntersectionObserver";
import { motion } from "motion/react";

type Props = {
  sectionSkills: React.RefObject<HTMLDivElement | null>;
};
const SkillSet = ({ sectionSkills }: Props) => {
  const inView = useIntersectionObserver("skills");
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: -100, // Start below the screen
    },
    visible: {
      opacity: 1,
      y: 0, // Move to the normal position
      transition: {
        type: "spring", // Smooth spring animation
        stiffness: 100, // Controls how stiff the spring is
        damping: 25, // Controls the amount of bounce
        delay: 0.3, // Delay for when the section enters the view
      },
    },
  };
  return (
    <StyledContainer
      ref={sectionSkills}
      className="skills"
      id="skills"
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Styleddiv />
      <StyledHeader>My Skills</StyledHeader>
      <StyledText>(hover for more information)</StyledText>
      <StyledSkills>
        <div className="card">
          <StyleCard1 className="inner">
            <div className="front">
              <img src={js} alt="js" />
            </div>
            <div className="back">
              <p>
                I have more than 4 years of professional experience and a
                thorough understanding of JavaScript, keeping myself updated
                with all the latest ESNext concepts.
              </p>
            </div>
          </StyleCard1>
        </div>

        <div className="card">
          <StyleCard2 className="inner">
            <div className="front">
              <img src={react} alt="react" />
            </div>
            <div className="back">
              <p>
                With 3 years of experience in React, I've contributed to
                developing clean, maintainable, and efficient projects.
              </p>
            </div>
          </StyleCard2>
        </div>

        <div className="card">
          <StyleCard3 className="inner">
            <div className="front">
              <img src={tsx} alt="tsx" />
            </div>
            <div className="back">
              <p>
                I have 3 years of experience using TSX to build scalable and
                maintainable React components.
              </p>
            </div>
          </StyleCard3>
        </div>

        <div className="card">
          <StyleCard4 className="inner">
            <div className="front">
              <img src={sass} alt="sass" />
            </div>
            <div className="back">
              <p>
                I have 4 years of experience working with Sass, specializing in
                creating responsive and maintainable styles for web
                applications.
              </p>
            </div>
          </StyleCard4>
        </div>

        <div className="card">
          <StyleCard5 className="inner">
            <div className="front">
              <img src={figma} alt="figma" />
            </div>
            <div className="back">
              <p>
                I have 3 years of experience working with Framer Motion,
                creating smooth and interactive animations for React
                applications.
              </p>
            </div>
          </StyleCard5>
        </div>
      </StyledSkills>
      <MoreInfo />
    </StyledContainer>
  );
};
export default SkillSet;

const StyledContainer = styled(motion.div)`
  position: relative;
`;
const StyledText = styled.p`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  color: #fad24d;
`;
/////////////repetetive
const Styleddiv = styled.div`
  background-color: #151515;
  margin-left: auto;
  width: 50%;
  height: 40rem;
`;
const StyledHeader = styled.h1`
  font-size: 2rem;
  color: #fad24d;
  text-align: center;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
`;
const StyledSkills = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  width: 100%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    height: 30rem;
    padding: 1rem;
  }
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    height: 30rem;
    padding: 1rem;
  }
  .back {
    color: white;
    position: absolute;
    transform: rotateY(180deg);
    padding: 1rem;
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.5rem;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .front {
    position: absolute;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .inner {
    position: relative;
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.6s ease;
    transform-style: preserve-3d;
  }
  .card {
    background-color: transparent;
    width: 16%;
    height: 25rem;
    cursor: pointer;
    perspective: 1000px;

    &:hover .inner {
      transform: rotateY(180deg);
    }
    img {
      width: 100%;
    }
    @media (max-width: 900px) {
      width: 80%;
      height: 15rem;
    }
    @media (max-width: 600px) {
      width: 80%;
      height: 12rem;
    }
  }
`;

const StyleCard1 = styled.div`
  border: 1px solid #5a4912;
  background-image: linear-gradient(to bottom right, #836c20, #120c1f);
`;
const StyleCard2 = styled.div`
  border: 1px solid #421a97;
  background-image: linear-gradient(to bottom right, #1d3d75, #120c1f);
`;
const StyleCard3 = styled.div`
  border: 1px solid #3a1883;
  background-image: linear-gradient(to bottom right, #405471, #120c1f);
`;
const StyleCard4 = styled.div`
  border: 1px solid #5c1d43;
  background-image: linear-gradient(to bottom right, #591c41, #120c1f);
`;
const StyleCard5 = styled.div`
  border: 1px solid #522877;
  background-image: linear-gradient(to bottom right, #3b1c56, #120c1f);
`;

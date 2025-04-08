import styled from "styled-components";
import ProjectsHeader from "./ProjectsHeader";
import remoteJob from "../images/remote-jobs.gif";
import schedule from "../images/schedule.gif";
import games from "../images/games.gif";
import wordCounter from "../images/wordCounter.gif";
import useIntersectionObserver from "./useIntersectionObserver";
import { motion } from "motion/react";

type Props = {
  sectionProjects: React.RefObject<HTMLDivElement | null>;
};
const Projects = ({ sectionProjects }: Props) => {
  const inView = useIntersectionObserver("projects");

  return (
    <Container
      ref={sectionProjects}
      className="projects"
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <ProjectsHeader inView={inView} />
      <StyledJobsContainer>
        <StyledJob>
          <ImageContainer>
            <img src={schedule} alt="schedule" />
          </ImageContainer>
          <StyledText>
            <h1>Schedulator</h1>
            <p>
              A React-based application designed to help users organize and
              manage their daily activities. It allows users to create and track
              a list of events or tasks, providing an easy way to plan and stay
              on top of their schedule. Whether it's meetings, appointments, or
              personal to-dos, this app helps you stay organized and efficient.
            </p>
          </StyledText>
        </StyledJob>

        <StyledJob>
          <StyledText>
            <h1>React Component Collection (library)</h1>

            <p>
              A modern and flexible React component library built with
              TypeScript, Storybook, Styled Components, and Rollup. This library
              offers a collection of reusable, customizable UI components that
              are easy to integrate and enhance your React projects.
            </p>
          </StyledText>
          <ImageContainer>
            <svg
              width="74"
              height="338"
              viewBox="0 0 784 638"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_19_197)">
                <path
                  d="M783.178 -104.519H-125.175C-213.404 -104.519 -332.235 310.76 -332.235 378.336L-220.375 818.73C-220.375 886.306 49.5856 940.669 137.815 940.669L898.82 911.273C987.049 911.273 1180.85 627.186 1180.85 559.611L942.932 17.8371C942.932 -49.7383 871.407 -104.519 783.178 -104.519Z"
                  fill="#CB3837"
                  stroke="#5B0403"
                  strokeWidth="21.9178"
                />
                <path
                  d="M109.931 235.972H680.479V381.635H395.205V405.912H268.417V381.635H109.931V235.972ZM141.629 357.358H205.023V284.526H236.72V357.358H268.417V260.249H141.629V357.358ZM300.114 260.249V381.635H363.508V357.358H426.903V260.249H300.114ZM363.508 284.526H395.205V333.08H363.508V284.526ZM458.6 260.249V357.358H521.994V284.526H553.691V357.358H585.388V284.526H617.085V357.358H648.782V260.249H458.6Z"
                  fill="#CB3837"
                />
                <path
                  d="M141.629 357.358H205.023V284.527H236.72V357.358H268.417V260.25H141.629V357.358Z"
                  fill="white"
                />
                <path
                  d="M300.114 260.25V381.635H363.508V357.358H426.903V260.25H300.114ZM395.205 333.081H363.508V284.527H395.205V333.081Z"
                  fill="white"
                />
                <path
                  d="M458.6 260.25V357.358H521.994V284.527H553.691V357.358H585.388V284.527H617.085V357.358H648.782V260.25H458.6Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_19_197">
                  <rect
                    width="833"
                    height="638"
                    fill="white"
                    transform="translate(-27)"
                  />
                </clipPath>
              </defs>
            </svg>
          </ImageContainer>
        </StyledJob>

        <StyledJob>
          <ImageContainer>
            <img src={remoteJob} alt="remoteJob" />
          </ImageContainer>

          <StyledText>
            <h1>Remote job Board</h1>
            <p>
              This project is a modern, user-friendly web application built with
              React, designed to help job seekers find remote job opportunities.
            </p>
          </StyledText>
        </StyledJob>

        <StyledJob>
          <StyledText>
            <h1>Games App</h1>
            <p>
              A fun and addictive game application that features three classic
              games: Speed Game, Hangman, and Tic Tac Toe. Perfect for players
              looking to test their reflexes, word skills, or strategic
              thinking, this app brings together some of the most beloved games
              in one convenient package.
            </p>
          </StyledText>
          <ImageContainer>
            <img src={games} alt="games" />
          </ImageContainer>
        </StyledJob>

        <StyledJob>
          <ImageContainer>
            <img src={wordCounter} alt="wordCounter" />
          </ImageContainer>
          <StyledText>
            <h1>Word Counter</h1>
            <p>
              A user-friendly web application built with React that allows users
              to easily count the number of words in any given text. This app is
              designed to provide an intuitive and seamless experience, making
              it perfect for students, writers, bloggers, and anyone who needs
              to track their word count quickly and accurately.
            </p>
          </StyledText>
        </StyledJob>
      </StyledJobsContainer>
    </Container>
  );
};
export default Projects;
const Container = styled(motion.div)`
  padding: 4rem;
`;
const StyledJobsContainer = styled.div`
  padding: 4rem;
`;
const StyledJob = styled.div`
  background: linear-gradient(to bottom right, #4a4a4a, #ffca28);
  border: 2px solid #f9d159;
  box-shadow: 0 4px 15px #987610;
  height: 24rem;
  padding: 2rem;
  margin: auto;
  position: relative;
  color: white;
  display: flex;
  justify-content: space-between;
  border-radius: 1rem;
  margin-bottom: 4rem;
  line-height: 2rem;
  overflow: hidden;
  cursor: pointer;
  @media (max-width: 1200px) {
    height: 20rem;
    overflow: scroll;
  }
  @media (max-width: 1000px) {
    height: 15rem;
    overflow: scroll;
  }

  h1 {
    margin-bottom: 1rem;
    line-height: 2.5rem;
    @media (max-width: 1000px) {
      font-size: 1.4rem;
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 500%;
    z-index: 1;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.3) 20%,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0.3) 80%
    );
    display: none;
  }

  /* On hover, animate the sparkle effect */
  &:hover::before {
    left: 100%;
    animation: sparkle 1.5s linear infinite;
    display: block;
  }

  /* Sparkle animation */
  @keyframes sparkle {
    0% {
      left: -100%;
    }
    50% {
      left: -50%;
    }
    100% {
      left: 0%;
    }
  }
`;
const ImageContainer = styled.div`
  width: 54%;
  position: static;
  z-index: 2;
  @media (max-width: 1000px) {
    width: 50%;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }
  svg {
    width: 100%;
    border-radius: 1rem;
  }
`;
const StyledText = styled.div`
  padding: 2rem;
  font-size: 1.2rem;
  width: 30%;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;

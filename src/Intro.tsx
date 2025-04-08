import styled from "styled-components";
import Header from "./Header";
import WebDeveloperSvg from "./WebDeveloper";
import Overlay from "./Overlay";
import { useEffect, useState } from "react";

type Props = {
  sectionHome: React.RefObject<HTMLDivElement | null>;
  sectionAbout: React.RefObject<HTMLDivElement | null>;
  scrollTosection: (ref: React.RefObject<HTMLDivElement | null>) => void;
};

const Intro = ({ sectionHome, sectionAbout, scrollTosection }: Props) => {
  const [firstOverlayVisible, setFirstOverlayVisible] = useState(false);
  const [secondOverlayVisible, setSecondOverlayVisible] = useState(false);
  const [thirdOverlayVisible, setThirdOverlayVisible] = useState(false);
  const [forthOverlayVisible, setForthOverlayVisible] = useState(false);
  const [fifthOverlayVisible, setFifthOverlayVisible] = useState(false);
  const [sixthOverlayVisible, setSixthOverlayVisible] = useState(false);

  useEffect(() => {
    //for initial webdeveloper display
    const firstOverlayTimer = setInterval(() => {
      setSixthOverlayVisible(true);
    }, 100);
    //I need 1st overlay in 2 minutes, so delay-1s and minimize redundant code (function calling)
    const secondOverlayTimer = setInterval(() => {
      setFirstOverlayVisible(true);
      setSecondOverlayVisible(true);
      setThirdOverlayVisible(true);
      setForthOverlayVisible(true);
      setFifthOverlayVisible(true);
      // console.log(1);
    }, 1000);

    //Clear the overlay after 12 seconds, then repeat the process.
    const mainOverlayTimer = setInterval(() => {
      setFirstOverlayVisible(false);
      setSecondOverlayVisible(false);
      setThirdOverlayVisible(false);
      setForthOverlayVisible(false);
      setFifthOverlayVisible(false);
    }, 15350);
    const main = setInterval(() => setSixthOverlayVisible(false), 15350);

    // Cleanup timeouts on component unmount
    return () => {
      clearTimeout(firstOverlayTimer);
      clearTimeout(secondOverlayTimer);
      clearTimeout(mainOverlayTimer);
      clearTimeout(main);
    };
  }, []);

  return (
    <StyledContainer ref={sectionHome} className="Home">
      <Overlay
        sectionAbout={sectionAbout}
        scrollTosection={scrollTosection}
        firstOverlayVisible={firstOverlayVisible}
        secondOverlayVisible={secondOverlayVisible}
        thirdOverlayVisible={thirdOverlayVisible}
        forthOverlayVisible={forthOverlayVisible}
        fifthOverlayVisible={fifthOverlayVisible}
        sixthOverlayVisible={sixthOverlayVisible}
      />
      <>
        <Header sixthOverlayVisible={sixthOverlayVisible} />
        <WebDeveloperSvg sixthOverlayVisible={sixthOverlayVisible} />
      </>
    </StyledContainer>
  );
};
export default Intro;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

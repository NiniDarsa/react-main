import { useRef } from "react";
import About from "./About";
import Footer from "./Footer";
import GlobalStyle from "./globalstyles";
import Intro from "./Intro";
import Projects from "./Projects";
import Navigation from "./Navigation";
import SkillSet from "./SkillSet";

function App() {
  const sectionHome = useRef<HTMLDivElement>(null);
  const sectionAbout = useRef<HTMLDivElement>(null);
  const sectionProjects = useRef<HTMLDivElement>(null);
  const sectionSkills = useRef<HTMLDivElement>(null);
  const sectionFooter = useRef<HTMLDivElement>(null);

  // const [current, setCurrent] = useState<HTMLDivElement | null>();

  // Function to scroll to the desired section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    // setCurrent(ref.current);
  };

  return (
    <>
      <GlobalStyle />
      <Navigation
        scrollTosection={scrollToSection}
        sectionHome={sectionHome}
        sectionAbout={sectionAbout}
        sectionProjects={sectionProjects}
        sectionSkills={sectionSkills}
        sectionFooter={sectionFooter}
        // current={current}
      />
      <Intro
        sectionHome={sectionHome}
        sectionAbout={sectionAbout}
        scrollTosection={scrollToSection}
      />
      <About sectionAbout={sectionAbout} />
      <SkillSet sectionSkills={sectionSkills} />
      <Projects sectionProjects={sectionProjects} />
      <Footer sectionFooter={sectionFooter} />
    </>
  );
}
export default App;

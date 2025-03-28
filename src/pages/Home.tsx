import AnimatedContainer from "../components/AnimatedContainer";
import NavButton from "../components/NavButton";

function Home() {
  return (
    <AnimatedContainer>
      <h1>James Heinemann</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <NavButton navigateTo="/about-me">About Me</NavButton>
        <NavButton navigateTo="/contact">Contact</NavButton>
        <NavButton navigateTo="/personal-projects">Personal Projects</NavButton>
        <NavButton navigateTo="/academic-projects">Academic Projects</NavButton>
      </div>
    </AnimatedContainer>
  );
}

export default Home;

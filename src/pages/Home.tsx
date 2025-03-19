import AnimatedContainer from "../components/AnimatedContainer";
import NavButton from "../components/NavButton";

function Home() {
  return (
    <AnimatedContainer>
      <h1>Welcome to My Website</h1>
      <p>This is a placeholder homepage. More content coming soon!</p>
      <NavButton navigateTo="/about-me">About Me</NavButton>
    </AnimatedContainer>
  );
}

export default Home;

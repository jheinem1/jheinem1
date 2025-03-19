import Tilt from "react-parallax-tilt";
import AnimatedContainer from "../components/AnimatedContainer";
import NavButton from "../components/NavButton";
import jamesImage from "../assets/james-heinemann.jpeg";

function AboutMe() {
  return (
    <AnimatedContainer>
      <h1>About Me</h1>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareColor="#ffffff"
        glarePosition="bottom"
        glareBorderRadius="50%"
        tiltMaxAngleX={25}
        tiltMaxAngleY={25}
        tiltReverse={true}
        trackOnWindow={true}
        transitionSpeed={1000}
        style={{ width: "180px", margin: "0 auto" }}
      >
        <img
          src={jamesImage}
          alt="James Heinemann"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #5a5a5a",
          }}
        />
      </Tilt>
      <p style={{ maxWidth: "600px", margin: "20px auto" }}>
        {
          "Hi, I'm James, a software engineering major at ASU! I dabble in a lot of different technologies, but I really enjoy learning new and exciting languages, libraries, and frameworks. I've worked with a variety of languages, including TypeScript, Java, Python, and C."
        }
      </p>
      <NavButton navigateTo="/">Back Home</NavButton>
    </AnimatedContainer>
  );
}

export default AboutMe;

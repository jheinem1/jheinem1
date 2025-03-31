import AnimatedContainer from "../components/AnimatedContainer";
import LinkCard from "../components/LinkCard";
import NavButton from "../components/NavButton";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <AnimatedContainer>
      <h1>Contact Me</h1>
      <div
        style={{
          transition: "all 0.3s ease",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <LinkCard
          icon={<FaEnvelope />}
          label="Personal Email"
          link="mailto:jheinem01@icloud.com"
          displayLink="jheinem01@icloud.com"
        />
        <LinkCard
          icon={<FaLinkedin />}
          label="LinkedIn"
          link="https://www.linkedin.com/in/james-heinemann-5756b01b8/"
          displayLink="linkedin.com/in/james-heinemann"
        />
      </div>
      <div
        style={{
          transition: "all 0.3s ease",
        }}
      >
        <NavButton navigateTo="/">Back Home</NavButton>
      </div>
    </AnimatedContainer>
  );
}

export default Contact;

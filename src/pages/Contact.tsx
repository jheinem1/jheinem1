import AnimatedContainer from "../components/AnimatedContainer";
import NavButton from "../components/NavButton";

function Contact() {
  return (
    <AnimatedContainer>
      <h1>Contact Me</h1>
      <ul>
        <li>
          <b>Personal Email:</b>{" "}
          <a href="mailto:jheinem01@icloud.com">jheinem01@icloud.com</a>
        </li>
        <li>
          <b>LinkedIn:</b>{" "}
          <a href="https://www.linkedin.com/in/james-heinemann-5756b01b8/">
            linkedin.com/in/james-heinemann
          </a>
        </li>
      </ul>
      <NavButton navigateTo="/">Back Home</NavButton>
    </AnimatedContainer>
  );
}

export default Contact;

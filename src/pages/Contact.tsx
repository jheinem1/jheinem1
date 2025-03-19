import { useState } from "react";
import AnimatedContainer from "../components/AnimatedContainer";
import NavButton from "../components/NavButton";

function Contact() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <AnimatedContainer>
      <h1>Contact Me</h1>
      <button onClick={() => setShowContacts(!showContacts)}>
        {showContacts ? "Hide Contact Info" : "Show Contact Info"}
      </button>
      {showContacts && (
        <ul>
          <li>
            <b>Personal Email:</b>{" "}
            <a href="mailto:jheinem01@icloud.com">jheinem01@icloud.com</a>
          </li>
          <li>
            <b>GitHub:</b>{" "}
            <a href="https://github.com/jheinem1/">github.com/jheinem1</a>
          </li>
          <li>
            <b>LinkedIn:</b>{" "}
            <a href="https://www.linkedin.com/in/james-heinemann-5756b01b8/">
              linkedin.com/in/james-heinemann
            </a>
          </li>
          <li>
            <b>Discord:</b> @exx1
          </li>
        </ul>
      )}
      <NavButton navigateTo="/">Back Home</NavButton>
    </AnimatedContainer>
  );
}

export default Contact;

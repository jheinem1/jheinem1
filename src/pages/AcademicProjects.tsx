import AnimatedContainer from "../components/AnimatedContainer";
import ExpandableTextBlock from "../components/ExpandableTextBlock";
import NavButton from "../components/NavButton";

function AcademicProjects() {
  return (
    <AnimatedContainer>
      <h1>Notable Academic Projects</h1>
      <ExpandableTextBlock title="Capstone Project">
        <p>
          Developed an iOS app for a client using React Native, Redux, and
          TypeScript. Collaborated with a team of 5 and implemented Agile
          practices to ensure timely delivery and organized project management.
        </p>
      </ExpandableTextBlock>
      <ExpandableTextBlock title="Workout Wizard">
        <p>
          I and a group of classmates converted a Java application called
          Memorando into a gym class management system using SCRUM, Java, Swing,
          and Gradle.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="/assets/workout-wizard-0.png"
            alt="Workout Wizard 0"
            style={{ width: "200px", marginRight: "10px" }}
          />
          <img
            src="/assets/workout-wizard-1.png"
            alt="Workout Wizard 1"
            style={{ width: "200px" }}
          />
        </div>
      </ExpandableTextBlock>
      <ExpandableTextBlock title="Robotics Team">
        <p>
          I was a member of my high school robotics team (FIRST Robotics Team
          1212) for 4 years, and was the lead programmer for 3 of those years. I
          worked closely with the hardware team to ensure the robot performed
          its tasks.
        </p>
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/Fh_lxe03C6k?start=9606"
          title="Sanghi Foundation AZ State 2019 FIRST ROBOTICS COMPETITION"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </ExpandableTextBlock>
      <NavButton navigateTo="/">Back Home</NavButton>
    </AnimatedContainer>
  );
}

export default AcademicProjects;

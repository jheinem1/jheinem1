import AnimatedContainer from "../components/AnimatedContainer";
import ExpandableTextBlock from "../components/ExpandableTextBlock";
import NavButton from "../components/NavButton";
import workoutWizard0 from "../assets/workout-wizard-0.png";
import workoutWizard1 from "../assets/workout-wizard-1.png";

function AcademicProjects() {
  return (
    <AnimatedContainer>
      <h1>Notable Academic Projects</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "800px",
          padding: "0 1rem",
          boxSizing: "border-box",
        }}
      >
        <ExpandableTextBlock title="Capstone Project">
          <p>
            Developed an iOS app for a client using React Native, Redux, and
            TypeScript. Collaborated with a team of 5 and implemented Agile
            practices to ensure timely delivery and organized project
            management.
          </p>
        </ExpandableTextBlock>
        <ExpandableTextBlock title="Workout Wizard">
          <p>
            I and a group of classmates converted a Java application called
            Memorando into a gym class management system using SCRUM, Java,
            Swing, and Gradle.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <img
              src={workoutWizard0}
              alt="Workout Wizard 0"
              style={{ width: "100%", maxWidth: "200px" }}
            />
            <img
              src={workoutWizard1}
              alt="Workout Wizard 1"
              style={{ width: "100%", maxWidth: "200px" }}
            />
          </div>
        </ExpandableTextBlock>
        <ExpandableTextBlock title="Robotics Team">
          <p>
            I was a member of my high school robotics team (FIRST Robotics Team
            1212) for 4 years, and was the lead programmer for 3 of those years.
            I worked closely with the hardware team to ensure the robot
            performed its tasks.
          </p>
          <div style={{ width: "100%", overflow: "hidden" }}>
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/Fh_lxe03C6k?start=9606"
              title="Sanghi Foundation AZ State 2019 FIRST ROBOTICS COMPETITION"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ maxWidth: "100%" }}
            ></iframe>
          </div>
        </ExpandableTextBlock>
      </div>
      <NavButton navigateTo="/">Back Home</NavButton>
    </AnimatedContainer>
  );
}

export default AcademicProjects;

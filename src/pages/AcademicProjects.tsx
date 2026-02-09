import workoutWizard0 from "../assets/workout-wizard-0.png";
import workoutWizard1 from "../assets/workout-wizard-1.png";
import { academicProjects } from "../content";

function AcademicProjects() {
  return (
    <section className="panel">
      <p className="eyebrow">Academic Work</p>
      <h2>Selected projects</h2>

      <div className="projects-list">
        {academicProjects.map((project) => (
          <article key={project.title} className="project-row">
            <div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <p>{project.detail}</p>
              {project.title === "Workout Wizard" ? (
                <div className="media-row" aria-label="Workout Wizard screenshots">
                  <img src={workoutWizard0} alt="Workout Wizard interface 1" />
                  <img src={workoutWizard1} alt="Workout Wizard interface 2" />
                </div>
              ) : null}
              {project.title === "FIRST Robotics Team 1212" ? (
                <div className="video-frame">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Fh_lxe03C6k?start=9606"
                    title="Sanghi Foundation AZ State 2019 FIRST ROBOTICS COMPETITION"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AcademicProjects;

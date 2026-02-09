import { Link } from "react-router-dom";
import { personalProjects } from "../content";

function PersonalProjects() {
  return (
    <section className="panel">
      <p className="eyebrow">Personal Projects</p>
      <h2>Project index</h2>

      <div className="projects-list">
        {personalProjects.map((project) => (
          <article key={project.id} className="project-row">
            <div>
              <p className="project-status">{project.status}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="chip-row">
                {project.stack.map((tool) => (
                  <span key={tool} className="chip">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-actions">
              <Link to={`/personal-projects/${project.id}`} className="button-link">
                View details
              </Link>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PersonalProjects;

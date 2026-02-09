import { Link, Navigate, useParams } from "react-router-dom";
import { personalProjects } from "../content";

function PersonalProjectDetail() {
  const { projectId } = useParams();
  const project = personalProjects.find((entry) => entry.id === projectId);

  if (!project) {
    return <Navigate to="/personal-projects" replace />;
  }

  return (
    <section className="panel detail-panel">
      <Link to="/personal-projects" className="text-link back-link">
        Back to projects
      </Link>
      <p className="eyebrow">{project.role}</p>
      <h2>{project.title}</h2>
      <p className="lede">{project.tagline}</p>

      <div className="chip-row">
        {project.stack.map((tool) => (
          <span key={tool} className="chip">
            {tool}
          </span>
        ))}
      </div>

      <div className="section-grid">
        {project.sections.map((section) => (
          <article key={section.heading} className="detail-block">
            <h3>{section.heading}</h3>
            <p>{section.body}</p>
          </article>
        ))}
      </div>

      <article className="detail-block outcomes">
        <h3>Outcomes</h3>
        <ul>
          {project.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </article>

      <div className="project-actions">
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="button-link"
        >
          Open repository
        </a>
        {project.links.docs ? (
          <a
            href={project.links.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Documentation
          </a>
        ) : null}
      </div>
    </section>
  );
}

export default PersonalProjectDetail;

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
          <span className="button-icon" aria-hidden="true">
            <svg viewBox="0 0 16 16" role="presentation">
              <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
            </svg>
          </span>
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

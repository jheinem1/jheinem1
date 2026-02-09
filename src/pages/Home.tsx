import { Link } from "react-router-dom";
import { personalProjects } from "../content";

function Home() {
  const featured = personalProjects.slice(0, 3);

  return (
    <section className="panel hero-panel">
      <p className="eyebrow">Software Engineer Portfolio</p>
      <h2>Building developer tools, interfaces, and maintainable systems.</h2>
      <p className="lede">
        A notebook-style portfolio focused on clear implementation details and
        practical project outcomes.
      </p>
      <div className="featured-grid">
        {featured.map((project) => (
          <article key={project.id} className="project-tile">
            <p className="project-status">{project.status}</p>
            <h3>{project.title}</h3>
            <p>{project.tagline}</p>
            <Link to={`/personal-projects/${project.id}`} className="text-link">
              Open case study
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Home;

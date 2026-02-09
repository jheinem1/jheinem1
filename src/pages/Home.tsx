import { Link } from "react-router-dom";
import { personalProjects } from "../content";

function Home() {
  const featured = personalProjects.slice(0, 3);

  return (
    <section className="panel hero-panel">
      <p className="eyebrow">Software Engineer Portfolio</p>
      <h2>Notable personal projects</h2>
      <div className="featured-grid">
        {featured.map((project) => (
          <article key={project.id} className="project-tile">
            <p className="project-status">{project.status}</p>
            <h3>{project.title}</h3>
            <p>{project.tagline}</p>
            <Link to={`/personal-projects/${project.id}`} className="text-link">
              Open project
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Home;

// src/components/ProjectCard.jsx
export default function ProjectCard({ title, description, tech }) {
  return (
    <article className="card project-card">
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="chip-container" style={{ marginTop: '1rem' }}>
          {tech.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
export default function ExperienceItem({ role, organization, dates, description, accomplishments }) {
  return (
    <article className="card experience-item" style={{ marginBottom: '1.5rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <h3>{role}</h3>
        <span className="chip">{dates}</span>
      </header>
      <h4 style={{ color: 'var(--accent-color)', marginTop: '0.25rem' }}>{organization}</h4>
      <p style={{ margin: '1rem 0' }}>{description}</p>
      <ul>
        {accomplishments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
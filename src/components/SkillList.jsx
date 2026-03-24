// src/components/SkillList.jsx

export default function SkillList({ title, skills }) {
  return (
    <div className="skill-list-container" style={{ margin: '2rem 0' }}>
      <h3 style={{ marginBottom: '1rem' }}>{title}</h3>
      <div className="chip-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {skills.map((skill, index) => (
          <span key={index} className="chip">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
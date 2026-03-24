// src/components/PageHeader.jsx

export default function PageHeader({ title, subtitle }) {
  return (
    <header className="page-header" style={{ marginBottom: '2.5rem', borderBottom: '2px solid #333', paddingBottom: '1rem' }}>
      <h1 style={{ fontSize: '2.5rem', margin: '0' }}>{title}</h1>
      {subtitle && (
        <p className="subtitle" style={{ fontSize: '1.2rem', color: '#888', marginTop: '0.5rem' }}>
          {subtitle}
        </p>
      )}
    </header>
  );
}
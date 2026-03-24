// src/pages/Contact.jsx
import PageHeader from '../components/PageHeader';

export default function Contact() {
  return (
    <section className="contact-page">
      <PageHeader title="Get In Touch" subtitle="Let's connect!" />
      <div className="card">
        <p>Email: yourname@nku.edu</p>
      </div>
    </section>
  );
}
import PageHeader from '../components/PageHeader';
import QuoteWidget from '../components/QuoteWidget';

export default function Experience() {
  return (
    <section>
      <PageHeader title="My Experience" />
      <div className="experience-list">
        {}
      </div>
      <hr />
      <h3>Daily Inspiration</h3>
      <QuoteWidget /> 
    </section>
  );
}
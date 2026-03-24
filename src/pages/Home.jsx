import PageHeader from '../components/PageHeader';
import SkillList from '../components/SkillList';

export default function Home() {
  const techSkills = [
    "JavaScript (ES6+)", 
    "React", 
    "Vite", 
    "Node.js", 
    "PHP", 
    "Java", 
    "HTML5/CSS3", 
    "SQL"
  ];

  const logicSkills = [
    "Discrete Mathematics", 
    "Trigonometry", 
    "Graph Theory", 
    "API Implementation"
  ];

  return (
    <div className="home-page">
      <PageHeader 
        title="Welcome to My Portfolio" 
        subtitle="Software Engineering Student at NKU | Team Leader | Problem Solver" 
      />
      
      <section className="bio card">
        <p>
          I am a full-stack developer and student at Northern Kentucky University. 
          With a background in landscape leadership and a passion for complex 
          mathematics, I bring a unique perspective to software engineering—balancing 
          technical precision with real-world leadership.
        </p>
      </section>

      {}
      <SkillList title="Technical Stack" skills={techSkills} />
      <SkillList title="Mathematics & Logic" skills={logicSkills} />
    </div>
  );
}
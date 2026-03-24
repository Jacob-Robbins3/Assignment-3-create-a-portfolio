import ProjectCard from '../components/ProjectCard';
import PageHeader from '../components/PageHeader';

export default function Projects() {
  const myProjects = [
    {
      id: 1,
      title: "PlayerCard: Digital Gamer Profile",
      description: "A professional platform for gamers to showcase their stats and achievements across multiple platforms.",
      tech: ["React", "Vite", "Node.js", "REST API"]
    },
    {
      id: 2,
      title: "Pet Adoption Portal",
      description: "A solo-engineered dynamic platform that connects users with local animal shelters to streamline the adoption process.",
      tech: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      id: 3,
      title: "Terraria Encyclopedia",
      description: "A comprehensive digital guide for Terraria 1.4.5, featuring item stats, boss strategies, and crafting recipes.",
      tech: ["React", "CSS Modules", "JSON"]
    }
  ];

  return (
    <section className="projects-page">
      <PageHeader title="My Portfolio" subtitle="A collection of my recent technical work and software engineering projects." />
      
      <div className="projects-grid">
        {myProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            tech={project.tech} 
          />
        ))}
      </div>
    </section>
  );
}
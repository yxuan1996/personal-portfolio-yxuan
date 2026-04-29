import projectsData from '../data/projects.json'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

export default function Projects() {
  const featured = projectsData.filter(p => p.topics?.includes('featured'))

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.header}>
        <p className="section-label">Selected Work</p>
        <a
          href="https://github.com/yxuan1996"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          All Projects
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"/>
            <polyline points="7 7 17 7 17 17"/>
          </svg>
        </a>
      </div>

      <h2 className={styles.heading}>Projects</h2>

      <div className={styles.grid}>
        {featured.map(project => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

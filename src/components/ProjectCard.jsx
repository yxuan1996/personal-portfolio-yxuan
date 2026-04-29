import styles from './ProjectCard.module.css'

const LANG_COLORS = {
  'Python': '#3572A5',
  'Jupyter Notebook': '#DA5B0B',
  'JavaScript': '#f1e05a',
  'TypeScript': '#2b7489',
  'default': '#8b8b8b',
}

export default function ProjectCard({ project }) {
  const { name, description, url, language, homepage, vercel_url } = project
  const liveUrl = homepage || vercel_url
  const langColor = LANG_COLORS[language] || LANG_COLORS.default

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      aria-label={`View ${name} on GitHub`}
    >
      <div className={styles.top}>
        <div className={styles.titleRow}>
          <h3 className={styles.name}>{name.replace(/-/g, ' ')}</h3>
          <svg className={styles.arrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"/>
            <polyline points="7 7 17 7 17 17"/>
          </svg>
        </div>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.bottom}>
        <div className={styles.meta}>
          {language && (
            <span className={styles.lang}>
              <span className={styles.langDot} style={{ background: langColor }} />
              {language}
            </span>
          )}
        </div>
        <div className={styles.links} onClick={e => e.stopPropagation()}>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.liveLink}
              aria-label="Live demo"
            >
              Live
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
          )}
          <span className={styles.ghLink}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            GitHub
          </span>
        </div>
      </div>
    </a>
  )
}

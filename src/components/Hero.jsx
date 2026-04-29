import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.inner}>
        <div className={styles.statusLine}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.status}>Open to opportunities</span>
        </div>

        <h1 className={styles.name}>
          <span className={styles.nameLine}>Yi Xuan</span>
          <span className={styles.nameLine}>Sim</span>
        </h1>

        <p className={styles.tagline}>
          Data Engineer building AI-driven systems<br />
          that turn data into decision tools.
        </p>

        <div className={styles.actions}>
          <a
            href="#projects"
            className="btn-outline"
          >
            View Work
          </a>
          <a
            href="mailto:yxuan1996@gmail.com"
            className="btn-outline"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Get in Touch
          </a>
        </div>
      </div>

      <div className={styles.meta}>
        <span>KL, Malaysia</span>
        <span className={styles.sep}>—</span>
        <span>Data & AI Engineering</span>
      </div>
    </section>
  )
}

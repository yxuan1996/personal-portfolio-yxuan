import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <p className="section-label">About</p>
        </div>

        <div className={styles.right}>
          <p className={styles.bio}>
            I’m a Data Engineer with 5+ years of experience delivering data platforms 
            and analytics systems across multiple business domains.            
          </p>
          <p className={styles.bio}>
            My work spans cloud architecture on Azure, end-to-end data engineering pipelines,
            and LLM-integrated AI applications. I am interested in
            system design, data quality, and building things that scale.
          </p>
          <p className={styles.bio}>
            I currently manage Azure cloud platforms and help define architecture direction — balancing hands-on engineering with platform governance, cost optimization, and long-term scalability.
          </p>

          <div className={styles.divider} />

          <div className={styles.academic}>
            <p className={styles.acadLabel}>Education</p>
            <div className={styles.degree}>
              <span className={styles.degreeName}>MEng Masters in Mechanical Engineering</span>
              <span className={styles.institution}>University College London (UCL) · 2020</span>
              <span className={styles.institution}>Laidlaw Research & Leadership Scholar (competitive research + leadership program)</span>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.links}>
            <a
              href="https://github.com/yxuan1996"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalLink}
            >
              {/* GitHub octocat outline */}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              GitHub
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/yi-xuan-sim-9ab035109/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalLink}
            >
              {/* LinkedIn outline */}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
            {/* Medium */}
            {/* 
            <a
              href="https://medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalLink}

            >

              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"/>
              </svg>
              Medium
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
            */}
          </div>
        </div>
      </div>
    </section>
  )
}

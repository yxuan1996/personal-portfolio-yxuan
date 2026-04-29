import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.name}>Yi Xuan Sim</span>
          <span className={styles.sep}>·</span>
          <span className={styles.role}>Data & AI Engineer</span>
        </div>
        <div className={styles.right}>
          <a href="mailto:yxuan1996@gmail.com" className={styles.link}>yxuan1996@gmail.com</a>
          <span className={styles.year}>{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}

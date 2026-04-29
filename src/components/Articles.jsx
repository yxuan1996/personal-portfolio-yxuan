import articlesData from '../data/articles.json'
import ArticleItem from './ArticleItem'
import styles from './Articles.module.css'

export default function Articles() {
  const articles = articlesData.slice(0, 3)

  return (
    <section id="writing" className={styles.articles}>
      <div className={styles.header}>
        <p className="section-label">Writing</p>
        <a
          href="https://medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          All Articles
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"/>
            <polyline points="7 7 17 7 17 17"/>
          </svg>
        </a>
      </div>

      <h2 className={styles.heading}>Insights</h2>

      <div className={styles.list}>
        <div className={styles.listHeader}>
          <span>#</span>
          <span>Article</span>
          <span>Preview</span>
          <span />
        </div>
        {articles.map((article, i) => (
          <ArticleItem key={article.title} article={article} index={i} />
        ))}
      </div>
    </section>
  )
}

import styles from './ArticleItem.module.css'

export default function ArticleItem({ article, index }) {
  const { title, description, thumbnail, url } = article

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.item}
    >
      <span className={styles.index}>
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      {thumbnail ? (
        <div className={styles.thumb}>
          <img src={thumbnail} alt={title} loading="lazy" />
        </div>
      ) : (
        <div className={styles.thumbPlaceholder} aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
        </div>
      )}

      <div className={styles.arrowWrap}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"/>
          <polyline points="7 7 17 7 17 17"/>
        </svg>
      </div>
    </a>
  )
}

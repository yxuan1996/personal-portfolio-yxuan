import ThemeToggle from './ThemeToggle'
import styles from './Navbar.module.css'

export default function Navbar() {
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    // { label: 'Writing', href: '#writing' },
    { label: 'Skills', href: '#skills' },
  ]

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#" className={styles.brand}>YX</a>
        <ul className={styles.links}>
          {links.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className={styles.link}>{label}</a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  )
}

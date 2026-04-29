import { useState } from 'react'
import styles from './Skills.module.css'

const SKILLS = {
  'Data Engineering': [
    'Databricks', 'Azure Data Factory',
    'Azure Synapse', 'PySpark', 'SQL / T-SQL', 'Microsoft Fabric',
  ],
  'AI / LLM': [
    'LangChain', 'RAG', 'Vector Embeddings', 'Hybrid Search',
    'Knowledge Graph', 'OCR', 'Azure OpenAI',
  ],
  'Cloud (Azure)' :[
    'Solutions Design',
    'Cloud Platform Management',
    'Data Governance'
  ],

}

const CERTIFICATIONS = [
  {
    "name": "Microsoft Certified: Azure Solutions Architect Expert",
    "badge": "AZ-305",
    "issuer": "Microsoft",
    "year": "2024"
  },
  {
    "name": "Microsoft Certified: Fabric Analytics Engineer Associate",
    "badge": "DP-600",
    "issuer": "Microsoft",
    "year": "2024"
  },
  {
    "name": "Microsoft Certified: Azure Administrator Associate",
    "badge": "AZ-104",
    "issuer": "Microsoft",
    "year": "2023"
  },
  {
    "name": "Microsoft Certified: Azure Developer Associate",
    "badge": "AZ-204",
    "issuer": "Microsoft",
    "year": "2022"
  },
  {
    "name": "Microsoft Certified: Azure Security Engineer Associate",
    "badge": "AZ-500",
    "issuer": "Microsoft",
    "year": "2021"
  },
  {
    "name": "Microsoft Certified: Azure Data Engineer Associate",
    "badge": "DP-203",
    "issuer": "Microsoft",
    "year": "2021"
  }, 
  {
    "name": "Microsoft Certified: Azure Fundamentals",
    "badge": "AZ-900",
    "issuer": "Microsoft",
    "year": "2020"
  }
]

export default function Skills() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.header}>
        <p className="section-label">Capabilities</p>
      </div>

      <h2 className={styles.heading}>Skills & Certifications</h2>

      <div className={styles.grid}>
        {/* Skills Column */}
        <div className={styles.skillsCol}>
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className={styles.skillGroup}>
              <p className={styles.catLabel}>{category}</p>
              <ul className={styles.skillList}>
                {items.map(skill => (
                  <li key={skill} className={styles.skillItem}>
                    <span className={styles.bullet} aria-hidden="true">—</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certs Column */}
        <div className={styles.certsCol}>
          <p className={styles.catLabel}>Certifications</p>
          <div className={styles.certList}>
            {CERTIFICATIONS.map(cert => (
              <div key={cert.badge} className={styles.cert}>
                <div className={styles.certBadge}>{cert.badge}</div>
                <div className={styles.certInfo}>
                  <p className={styles.certName}>{cert.name}</p>
                  <p className={styles.certMeta}>{cert.issuer} · {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { Briefcase, Calendar, Building2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from '../pages/styles/experience.module.css';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';

const experiences = [
  {
    title: 'Full Stack Engineer',
    company: 'SHLR Technosoft Pvt Ltd',
    location: 'India',
    period: 'Dec 2024 – Present',
    highlights: [
      'Developed enterprise web and mobile applications using Angular, Node.js, PostgreSQL, and TypeScript.',
      'Designed and implemented scalable REST APIs, authentication systems, and RBAC-based access controls.',
      'Built responsive UI modules and integrated backend services for academic, financial, and administrative workflows.',
      'Implemented payment gateway integrations, push notification systems, and third-party API integrations.',
      'Optimized database queries, improved API response times, and enhanced overall application performance.',
      'Managed deployments using Docker, Jenkins, Git, and AWS cloud infrastructure.',
    ],
  },
];

const keyContributions = [
  'Designed and implemented enterprise-grade Role-Based Access Control (RBAC) systems.',
  'Integrated payment gateways across web and mobile applications.',
  'Developed push notification systems using Ionic and Capacitor applications.',
  'Built scalable REST APIs consumed by web, mobile, and third-party platforms.',
  'Implemented Redis caching and notification mechanisms to improve performance.',
  'Worked on AI-powered RAG systems using document chunking, embeddings, and LLM integrations.',
  'Managed deployments and CI/CD pipelines using Docker, Jenkins, Git, and AWS.',
];

export default function Experience() {
  return (
    <div className={`page ${styles['experience-page']}`}>
      <section className="page-header">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="header-icon"
        >
          <Briefcase size={32} />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="page-title"
        >
          Work Experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="page-subtitle"
        >
          My professional journey and key contributions
        </motion.p>
      </section>

      <section className={styles['timeline-section']}>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={styles['timeline-item']}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles['timeline-marker']}>
                <motion.div
                  className={styles['timeline-dot']}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, delay: 0.3 }}
                />
                <div className={styles['timeline-line']} />
              </div>
              <motion.div
                className={styles['timeline-card']}
                whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className={styles['timeline-header']}>
                  <div>
                    <h3 className={styles['timeline-title']}>{exp.title}</h3>
                    <div className={styles['timeline-company']}>
                      <Building2 size={16} />
                      <span>{exp.company}, {exp.location}</span>
                    </div>
                  </div>
                  <div className={styles['timeline-period']}>
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ul className={styles['timeline-highlights']}>
                  {exp.highlights.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * i }}
                    >
                      <ChevronRight size={16} className={styles['highlight-icon']} />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles['contributions-section']}>
        <AnimatedSection>
          <h2 className="section-title">Key Contributions</h2>
        </AnimatedSection>
        <StaggerContainer className={styles['contributions-grid']} staggerDelay={0.08}>
          {keyContributions.map((contrib, index) => (
            <StaggerItem key={index}>
              <motion.div
                className={styles['contribution-card']}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  borderColor: 'var(--accent-from)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className={styles['contribution-number']}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.div>
                <p>{contrib}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
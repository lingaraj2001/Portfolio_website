import { ArrowRight, Code, Link as LinkIcon, Mail, MapPin, Download, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../pages/styles/home.module.css';
import AnimatedSection, { StaggerContainer, StaggerItem, ScaleIn } from '../components/AnimatedSection';
import TypingEffect from '../components/TypingEffect';
import FloatingParticles from '../components/FloatingParticles';

export default function Home() {
  const stats = [
    { number: '1.5+', label: 'Years Experience' },
    { number: '5+', label: 'Major Projects' },
    { number: '10+', label: 'Technologies' },
    { number: 'Full', label: 'Stack Capability' },
  ];

  const socialLinks = [
    { icon: Code, href: 'https://github.com', label: 'GitHub' },
    { icon: LinkIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:email@example.com', label: 'Email' },
  ];

  return (
    <div className={`${styles.page} ${styles['home-page']}`}>
      <FloatingParticles />

      {/* Hero Section */}
      <section className={styles['hero-section']}>
        <div className={styles['hero-content']}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles['hero-badge']}
          >
            <Sparkles size={14} />
            Full Stack Engineer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={styles['hero-title']}
          >
            Building Scalable
            <span className={styles['gradient-text']}>
              {' '}
              <TypingEffect
                texts={['Digital Solutions', 'Web Apps', 'Mobile Apps', 'AI Systems', 'Cloud Platforms']}
                speed={80}
                deleteSpeed={50}
                pauseDuration={2500}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={styles['hero-subtitle']}
          >
            1.5+ years of experience developing enterprise web and mobile applications
            using Node.js, Angular, React.js, PostgreSQL, MongoDB, Python, and Django.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={styles['hero-actions']}
          >
            <Link to="/projects" className={`${styles.btn} ${styles['btn-primary']}`}>
              View Projects <ArrowRight size={18} />
            </Link>
            <Link to="/experience" className={`${styles.btn} ${styles['btn-outline']}`}>
              Work Experience
            </Link>
            <a href="#" className={`${styles.btn} ${styles['btn-ghost']}`} download>
              <Download size={18} /> Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className={styles['hero-socials']}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={styles['hero-visual']}
        >
          <div className={styles['code-window']}>
            <div className={styles['code-header']}>
              <span className={`${styles.dot} ${styles.red}`}></span>
              <span className={`${styles.dot} ${styles.yellow}`}></span>
              <span className={`${styles.dot} ${styles.green}`}></span>
              <span className={styles['code-title']}>about.js</span>
            </div>
            <pre className={styles['code-body']}>
{`const engineer = {
  name: "Full Stack Engineer",
  experience: "1.5+ years",
  stack: [
    "Node.js", "React", "Angular",
    "Python", "Django", "PostgreSQL",
    "MongoDB", "Redis", "AWS"
  ],
  passion: "Building scalable
            digital solutions"
};`}
            </pre>
          </div>
        </motion.div>
      </section>

      {/* Professional Summary */}
      <section className={styles['summary-section']}>
        <AnimatedSection>
          <h2 className={styles['section-title']}>Professional Summary</h2>
        </AnimatedSection>
        <ScaleIn delay={0.1}>
          <div className={styles['summary-card']}>
            <p>
              Full Stack Engineer with <strong>1.5+ years</strong> of experience developing enterprise web and mobile
              applications using <strong>Node.js, Angular, React.js, PostgreSQL, MongoDB, Python,</strong> and <strong>Django</strong>.
              Experienced in building scalable ERP platforms, AI-powered RAG systems, REST APIs, mobile applications,
              payment gateway integrations, push notification systems, and Redis-based real-time solutions.
            </p>
            <p>
              Strong understanding of software architecture, RBAC, CI/CD pipelines, cloud deployments,
              and end-to-end product development.
            </p>
          </div>
        </ScaleIn>
      </section>

      {/* Quick Stats */}
      <section className={styles['stats-section']}>
        <StaggerContainer className={styles['stats-grid']} staggerDelay={0.1}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <motion.div
                className={styles['stat-card']}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className={styles['stat-number']}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className={styles['stat-label']}>{stat.label}</div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Education */}
      <section className={styles['education-section']}>
        <AnimatedSection>
          <h2 className={styles['section-title']}>Education</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.15} direction="up">
          <motion.div
            className={styles['education-card']}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className={styles['edu-icon']}>
              <MapPin size={24} />
            </div>
            <div className={styles['edu-content']}>
              <h3>Bachelor of Engineering in Computer Science</h3>
              <p className={styles['edu-institution']}>Basaveshwar Engineering College, Bagalkot</p>
              <p className={styles['edu-year']}>2019 – 2023</p>
            </div>
          </motion.div>
        </AnimatedSection>
      </section>
    </div>
  );
}
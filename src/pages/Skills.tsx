import {
  Code2, Database, Server, Cloud, Wrench, BrainCircuit, Layers, ShieldCheck, Zap, Container
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from '../pages/styles/skills.module.css';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
    color: '#60a5fa',
  },
  {
    title: 'Frontend',
    icon: Layers,
    skills: ['Angular', 'React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Material UI', 'Responsive Design', 'RxJS'],
    color: '#f472b6',
  },
  {
    title: 'Mobile',
    icon: Zap,
    skills: ['Ionic Framework', 'Capacitor', 'Android APK Builds', 'Push Notifications'],
    color: '#a78bfa',
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'Django', 'REST APIs', 'MVC Architecture', 'Microservices'],
    color: '#34d399',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Query Optimization', 'Database Design'],
    color: '#fbbf24',
  },
  {
    title: 'AI / ML',
    icon: BrainCircuit,
    skills: ['RAG Architecture', 'LLM Integration', 'Embeddings', 'Vector Search', 'Document Processing'],
    color: '#f87171',
  },
  {
    title: 'Caching',
    icon: Zap,
    skills: ['Redis', 'Real-Time Notifications', 'Event Processing'],
    color: '#22d3ee',
  },
  {
    title: 'DevOps',
    icon: Container,
    skills: ['Docker', 'Jenkins', 'Git', 'CI/CD Pipelines'],
    color: '#a3e635',
  },
  {
    title: 'Cloud',
    icon: Cloud,
    skills: ['AWS EC2', 'S3', 'IAM', 'VPC', 'Cloud Deployments'],
    color: '#38bdf8',
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Postman', 'Linux', 'GitHub', 'Agile (Scrum)', 'API Testing'],
    color: '#fb923c',
  },
];

const competencies = [
  'Full Stack Development using Angular, React.js, Node.js, Express.js, PostgreSQL, and MongoDB.',
  'Role-Based Access Control (RBAC), Authentication, Authorization, and Secure API Design.',
  'Enterprise ERP Development, Payment Gateway Integrations, and Push Notification Systems.',
  'AI-powered Applications using Retrieval Augmented Generation (RAG) and LLM Workflows.',
  'Cloud Deployments, CI/CD Automation, Performance Optimization, and Scalable Architecture.',
  'Designed and integrated RESTful APIs connecting multiple internal and external systems.',
  'Worked with third-party integrations and payment providers to automate business workflows.',
];

function SkillBar({ skill, color, delay }: { skill: string; color: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.div
      ref={ref}
      className={styles['skill-bar-item']}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay }}
    >
      <div className={styles['skill-bar-track']}>
        <motion.div
          className={styles['skill-bar-fill']}
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${Math.random() * 30 + 70}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
        />
      </div>
      <span className={styles['skill-bar-label']}>{skill}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <div className={`page ${styles['skills-page']}`}>
      <section className="page-header">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="header-icon"
        >
          <Code2 size={32} />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="page-title"
        >
          Technical Skills
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="page-subtitle"
        >
          Technologies and tools I work with
        </motion.p>
      </section>

      <section className={styles['skills-grid-section']}>
        <StaggerContainer className={styles['skills-grid']} staggerDelay={0.06}>
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <StaggerItem key={index}>
                <motion.div
                  className={styles['skill-category-card']}
                  style={{ '--card-color': category.color } as React.CSSProperties}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className={styles['skill-category-header']}>
                    <motion.div
                      className={styles['skill-icon-wrapper']}
                      style={{ backgroundColor: `${category.color}20`, color: category.color }}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Icon size={22} />
                    </motion.div>
                    <h3 className={styles['skill-category-title']}>{category.title}</h3>
                  </div>
                  <div className={styles['skill-bars']}>
                    {category.skills.map((skill, i) => (
                      <SkillBar
                        key={i}
                        skill={skill}
                        color={category.color}
                        delay={i * 0.05}
                      />
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      <section className={styles['competencies-section']}>
        <AnimatedSection>
          <h2 className="section-title">Core Competencies</h2>
        </AnimatedSection>
        <StaggerContainer className={styles['competencies-list']} staggerDelay={0.08}>
          {competencies.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                className={styles['competency-item']}
                whileHover={{
                  x: 8,
                  borderColor: 'var(--accent-from)',
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                >
                  <ShieldCheck size={20} className={styles['competency-icon']} />
                </motion.div>
                <p>{item}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}

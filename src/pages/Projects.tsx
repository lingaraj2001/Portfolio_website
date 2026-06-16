import { FolderOpen, Users, BrainCircuit, GraduationCap, Heart, Car, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from '../pages/styles/projects.module.css';
import { StaggerContainer, StaggerItem } from '../components/AnimatedSection';

const projects = [
  {
    title: 'Learning Management System',
    subtitle: 'ERP for Educational Institutions',
    icon: GraduationCap,
    color: '#60a5fa',
    description: 'A comprehensive college management platform using RBAC supporting Super Admin, Admin, Faculty, Staff, and Student roles.',
    highlights: [
      'Implemented Examination, Attendance, Payroll, Appraisal, Fee Management, and Student Information modules.',
      'Built REST APIs using Node.js and designed PostgreSQL schemas for scalable academic workflows.',
      'Developed Student and Teacher mobile applications using Ionic and Capacitor with push notifications.',
      'Integrated payment gateways across web and mobile applications for fee collection and online payments.',
    ],
    tags: ['Node.js', 'Angular', 'PostgreSQL', 'Ionic', 'Capacitor', 'RBAC'],
  },
  {
    title: 'AI-Based Document QA Platform',
    subtitle: 'RAG System',
    icon: BrainCircuit,
    color: '#a78bfa',
    description: 'A Retrieval Augmented Generation (RAG) platform allowing users to upload documents and ask contextual questions.',
    highlights: [
      'Implemented document chunking, embedding generation, and storage pipelines for efficient retrieval.',
      'Built backend services using Node.js and Python to retrieve relevant chunks and provide context to LLMs.',
      'Improved answer accuracy by supplying retrieved document context to AI models before response generation.',
    ],
    tags: ['Node.js', 'Python', 'RAG', 'LLM', 'Embeddings', 'Vector Search'],
  },
  {
    title: 'College Examination Processing System',
    subtitle: 'Academic Automation',
    icon: Users,
    color: '#34d399',
    description: 'Examination processing workflows integrating multiple academic systems through REST APIs.',
    highlights: [
      'Implemented SGPA, CGPA, grade calculations, backlog handling, and credit-based result generation.',
      'Automated result processing by fetching student data from external systems and applying academic rules.',
      'Improved reliability and reduced manual effort through automated examination workflows.',
    ],
    tags: ['Node.js', 'REST APIs', 'PostgreSQL', 'Automation'],
  },
  {
    title: 'Matrimony Web Application',
    subtitle: 'Matchmaking Platform',
    icon: Heart,
    color: '#f472b6',
    description: 'A matchmaking platform supporting profile management and partner preference matching.',
    highlights: [
      'Implemented compatibility filters based on profession, education, location, Rashi, Nakshatra, and other preferences.',
      'Built secure backend APIs and optimized PostgreSQL queries for fast profile search and matching.',
      'Developed real-time communication and user interaction features.',
    ],
    tags: ['React.js', 'Node.js', 'PostgreSQL', 'Real-Time'],
  },
  {
    title: 'DriveYou',
    subtitle: 'Driver Booking Platform',
    icon: Car,
    color: '#fbbf24',
    description: 'A Django-based platform connecting vehicle owners with drivers for destination-based travel.',
    highlights: [
      'Implemented booking management, fare calculation, payment workflows, and driver assignment logic.',
      'Integrated Redis for real-time driver notifications and event processing.',
      'Improved platform responsiveness through efficient notification delivery and background processing.',
    ],
    tags: ['Django', 'Python', 'Redis', 'PostgreSQL', 'Real-Time'],
  },
];

export default function Projects() {
  return (
    <div className={`page ${styles['projects-page']}`}>
      <section className="page-header">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="header-icon"
        >
          <FolderOpen size={32} />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="page-title"
        >
          Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="page-subtitle"
        >
          Key projects I have built and contributed to
        </motion.p>
      </section>

      <section className={styles['projects-section']}>
        <StaggerContainer className={styles['projects-grid']} staggerDelay={0.12}>
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <StaggerItem key={index}>
                <motion.div
                  className={styles['project-card']}
                  whileHover={{
                    y: -8,
                    scale: 1.01,
                    transition: { duration: 0.3 },
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className={styles['project-card-header']}
                    style={{ backgroundColor: `${project.color}15` }}
                  >
                    <motion.div
                      className={styles['project-icon']}
                      style={{ backgroundColor: `${project.color}25`, color: project.color }}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Icon size={28} />
                    </motion.div>
                    <div className={styles['project-title-group']}>
                      <h3 className={styles['project-title']}>{project.title}</h3>
                      <p className={styles['project-subtitle']}>{project.subtitle}</p>
                    </div>
                    <motion.div
                      className={styles['project-link']}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={18} color={project.color} />
                    </motion.div>
                  </div>

                  <div className={styles['project-card-body']}>
                    <p className={styles['project-description']}>{project.description}</p>
                    <ul className={styles['project-highlights']}>
                      {project.highlights.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.1 * i }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                    <div className={styles['project-tags']}>
                      {project.tags.map((tag, i) => (
                        <motion.span
                          className={styles['project-tag']}
                          key={i}
                          style={{
                            backgroundColor: `${project.color}15`,
                            color: project.color,
                            borderColor: `${project.color}30`,
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.05 * i }}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: `${project.color}30`,
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>
    </div>
  );
}

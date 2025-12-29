import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'MaskanhApp',
      category: 'Mobile App',
      description: 'Full-scale real estate solution for iOS and Android with secure authentication and interactive property search.',
      tech: ['React Native', '.NET', 'SQL', 'DevOps'],
      status: 'Live',
      links: {
        playstore: '#',
        appstore: '#'
      }
    },
    {
      title: 'Mairaj360',
      category: 'Mobile App',
      description: 'Cross-platform application with high-speed performance and real-time data synchronization.',
      tech: ['React Native', 'JavaScript', 'Backend API'],
      status: 'Live',
      links: {
        website: 'https://maskanh.com'
      }
    },
    {
      title: 'Mskanh.com',
      category: 'Web Development',
      description: 'Official web portal with full responsiveness and integration with mobile services.',
      tech: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
      status: 'Live',
      links: {
        website: 'https://maskanh.com'
      }
    },
    {
      title: 'Edwings D\'Angelo Foundation',
      category: 'Web Design',
      description: 'Customized WordPress platform with interactive European mapping systems.',
      tech: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
      status: 'Live',
      links: {
        website: '#'
      }
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Real-world applications solving real-world problems</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <span className="project-category">{project.category}</span>
                <span className={`project-status ${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.links.website && (
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt /> Visit
                  </a>
                )}
                {project.links.playstore && (
                  <a
                    href={project.links.playstore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt /> Play Store
                  </a>
                )}
                {project.links.appstore && (
                  <a
                    href={project.links.appstore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt /> App Store
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


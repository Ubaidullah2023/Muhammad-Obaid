import React from 'react'
import { motion } from 'framer-motion'
import { FaMobileAlt, FaCode, FaPalette, FaGlobe, FaExternalLinkAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Lead Mobile Developer',
      company: 'MaskanhApp',
      period: 'Live on Google Play Store & Apple App Store',
      icon: <FaMobileAlt />,
      description: 'Architected and developed a full-scale real estate solution for iOS and Android.',
      achievements: [
        'Managed end-to-end deployment process for both major app stores',
        'Implemented secure user authentication',
        'Built interactive property search features',
        'Cross-platform mobile application development'
      ],
      links: [
        { label: 'Google Play Store', url: '#' },
        { label: 'App Store', url: '#' }
      ],
      color: '#6366f1'
    },
    {
      title: 'Full-Stack Developer',
      company: 'Mairaj360 & Mskanh.com',
      period: 'React Native & Web Development',
      icon: <FaCode />,
      description: 'Developed the Mairaj360 application using React Native and maintained the official web portal.',
      achievements: [
        'Cross-platform efficiency and high-speed performance',
        'Designed and maintained official web portal at mskanh.com',
        'Full responsiveness and integration with mobile services',
        'Optimized backend database interactions for real-time data synchronization'
      ],
      links: [
        { label: 'Visit Website', url: 'https://maskanh.com' }
      ],
      color: '#8b5cf6'
    },
    {
      title: 'Graphic Designer',
      company: 'Skill Share Hub, Air University Kamra',
      period: 'Aug 2024 – Present',
      icon: <FaPalette />,
      description: 'Creating professional branding, typography, and UI/UX layouts.',
      achievements: [
        'Utilize Adobe Photoshop, Illustrator, and Figma',
        'Professional branding and visual identity',
        'UI/UX layout design',
        'Typography and graphic design'
      ],
      color: '#ec4899'
    },
    {
      title: 'Website Designer',
      company: 'Edwings D\'Angelo Foundation',
      period: 'Jan 2023 – Present',
      icon: <FaGlobe />,
      description: 'Created customized WordPress platform with interactive European mapping systems.',
      achievements: [
        'Customized WordPress platform',
        'Integrated interactive European mapping systems',
        'Advanced HTML/CSS implementation',
        'Responsive web design'
      ],
      color: '#06b6d4'
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Career</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">Building innovative solutions for real-world problems</p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="experience-icon" style={{ background: exp.color }}>
                {exp.icon}
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-company">{exp.company}</span>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
                {exp.links && (
                  <div className="experience-links">
                    {exp.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience-link"
                      >
                        {link.label} <FaExternalLinkAlt />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience


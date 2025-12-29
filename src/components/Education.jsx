import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaSchool } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Software Engineering (BSSE)',
      institution: 'Virtual University of Pakistan',
      period: '2022 - Present',
      icon: <FaGraduationCap />,
      details: 'Software Engineering'
    },
    {
      degree: 'FSC (ICS)',
      institution: 'Cantt Public Degree College, PAC Kamra',
      period: '2020 - 2022',
      icon: <FaSchool />,
      details: 'XII (FBISE)'
    },
    {
      degree: 'Matric (Science)',
      institution: 'Cantt Public Degree College, PAC Kamra',
      period: '2018 - 2020',
      icon: <FaSchool />,
      details: 'X (FBISE)'
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Learning</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic foundation for professional excellence</p>
        </motion.div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="education-icon">{edu.icon}</div>
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <span className="education-details">{edu.details}</span>
              <span className="education-period">{edu.period}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education


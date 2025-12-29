import React from 'react'
import { motion } from 'framer-motion'
import { FaCertificate, FaMicrosoft, FaUniversity } from 'react-icons/fa'
import { SiCisco } from 'react-icons/si'

const Certificates = () => {
  const certificates = [
    {
      issuer: 'Microsoft',
      icon: <FaMicrosoft />,
      items: [
        'Data Structures and Algorithms',
        'Deployment and DevOps',
        'Back-End Development with .NET',
        'Database Integration and Management',
        'Security and Authentication',
        'Introduction to Programming with C#',
        'Foundations of Coding Back-End',
        'Introduction to Computers',
        'Generative AI: Productivity & Business'
      ]
    },
    {
      issuer: 'University of Minnesota',
      icon: <FaUniversity />,
      items: ['IS/IT Governance']
    },
    {
      issuer: 'Cisco Networking Academy',
      icon: <SiCisco />,
      items: [
        'Programming Essentials in C++',
        'Computer Hardware Basics'
      ]
    },
    {
      issuer: 'Cyberonics',
      icon: <FaCertificate />,
      items: [
        'Professional Freelancing Training Program',
        'Amazon FBA, Amazon VA, Dropshipping',
        'WordPress, Shopify, SEO'
      ]
    },
    {
      issuer: 'Digi Skills | Ignite',
      icon: <FaCertificate />,
      items: [
        'Freelancing Communication and Soft Skills',
        'Virtual Assistant',
        'Data Analytics And Business Intelligence'
      ]
    },
    {
      issuer: 'Forage',
      icon: <FaCertificate />,
      items: ['Customer Service Job Simulation']
    }
  ]

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Professional Certificates</h2>
          <p className="section-subtitle">Click to Verify - Verified credentials from leading institutions</p>
        </motion.div>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.issuer}
              className="certificate-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="certificate-header">
                <div className="certificate-icon">{cert.icon}</div>
                <h3 className="certificate-issuer">{cert.issuer}</h3>
              </div>
              <ul className="certificate-list">
                {cert.items.map((item, idx) => (
                  <li key={idx}>
                    <span className="cert-check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates


import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Mobile/Web',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'JavaScript', level: 88 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 }
      ]
    },
    {
      title: 'Backend/DB',
      skills: [
        { name: '.NET Framework', level: 82 },
        { name: 'C#', level: 85 },
        { name: 'SQL', level: 80 },
        { name: 'Deployment & DevOps', level: 75 }
      ]
    },
    {
      title: 'Design Tools',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Adobe Photoshop', level: 88 },
        { name: 'Adobe Illustrator', level: 85 },
        { name: 'Adobe InDesign', level: 75 },
        { name: 'MS Office', level: 95 }
      ]
    }
  ]

  const SkillBar = ({ name, level }) => {
    return (
      <div className="skill-item">
        <div className="skill-header">
          <span className="skill-name">{name}</span>
          <span className="skill-percentage">{level}%</span>
        </div>
        <div className="skill-bar">
          <motion.div
            className="skill-progress"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    )
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Proficient in modern technologies and frameworks</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills


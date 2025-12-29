import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span>Software Engineer & Full-Stack Developer</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Innovative Software Engineer
            <span className="gradient-text"> & Full-Stack Developer</span>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Experienced in React Native and .NET, with a creative background in Graphic Design. 
            Proven track record of delivering live, high-performance applications on the Play Store and App Store. 
            Passionate about building user-centric digital solutions that bridge the gap between aesthetic design and functional technology.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.a
              href="mailto:ubaidullah8042003@mail.com"
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope /> Hire Me Now
            </motion.a>
            <motion.a
              href="/img/Shape/MUHAMMAD OBAID CV 2026.pdf"
              target="_blank"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload /> Download CV
            </motion.a>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="image-wrapper">
            <img src="/img/Obaid.png" alt="Muhammad Obaid" />
            <div className="floating-badge">
              <span>1+ Years</span>
              <small>Experience</small>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </motion.div>
    </section>
  )
}

export default Hero


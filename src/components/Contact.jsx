import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    window.location.href = `mailto:ubaidullah8042003@mail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">Let's discuss your next project</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let's Work Together</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your visions. Feel free to reach out!
            </p>

            <div className="contact-details">
              <motion.a
                href="mailto:ubaidullah8042003@mail.com"
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <FaEnvelope />
                <div>
                  <span>Email</span>
                  <p>ubaidullah8042003@mail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+1234567890"
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <FaPhone />
                <div>
                  <span>Phone</span>
                  <p>Available on request</p>
                </div>
              </motion.a>

              <motion.div
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <FaMapMarkerAlt />
                <div>
                  <span>Location</span>
                  <p>Pakistan</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <motion.button
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message <FaPaperPlane />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact


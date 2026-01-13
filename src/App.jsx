import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight, Github, Linkedin, Mail, Code, Database, BarChart3, Brain } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const navItems = [
    { name: 'Home', ref: homeRef },
    { name: 'About', ref: aboutRef },
    { name: 'Projects', ref: projectsRef },
    { name: 'Skills', ref: skillsRef },
    { name: 'Contact', ref: contactRef }
  ];

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: 'Retail Customer Analytics',
      description: 'End-to-end analytics pipeline using Python, SQL, Power BI with comprehensive data cleaning and dashboard development.',
      tech: ['Python', 'SQL', 'Power BI', 'Excel'],
      icon: '📊'
    },
    {
      title: 'Spotify Data Pipeline',
      description: 'Complete ETL pipeline for Spotify data using Python and SQL Server with API integration and analysis.',
      tech: ['Python', 'SQL', 'API', 'Matplotlib'],
      icon: '🎵'
    },
    {
      title: 'Time Series Forecasting',
      description: 'Comparative study using SARIMA and Prophet models for exchange rate prediction and analysis.',
      tech: ['Python', 'Prophet', 'statsmodels', 'NumPy'],
      icon: '📈'
    }
  ];

  const skills = [
    { category: 'Languages', items: ['Python', 'R', 'SQL'], icon: <Code size={24} /> },
    { category: 'Databases', items: ['SQL Server', 'PostgreSQL', 'MySQL'], icon: <Database size={24} /> },
    { category: 'Tools & Libraries', items: ['Power BI', 'Pandas', 'Scikit-learn', 'Matplotlib'], icon: <BarChart3 size={24} /> },
    { category: 'Analytics', items: ['Statistical Analysis', 'Data Viz', 'ML Models'], icon: <Brain size={24} /> }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill all fields');
      return;
    }
    setFormStatus('Message sent successfully! ✅');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus(''), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-slate-900/80 border-b border-slate-700/50 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection(homeRef)}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
            >
              Abdullah Unaiz
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.ref)}
                  whileHover={{ color: '#60a5fa' }}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden pb-4 space-y-2"
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.ref)}
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-slate-800/50 rounded transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} className="min-h-screen flex items-center justify-center px-4 pt-20">
        <motion.div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-400 font-semibold mb-4">Welcome to my portfolio</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Data Analyst & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Python Developer</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Transforming data into actionable insights using Python, SQL, Power BI, and Machine Learning
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(projectsRef)}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow"
            >
              View My Work <ArrowRight size={20} />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/AbdullahUnaiz99"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-slate-700 text-gray-300 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-colors"
            >
              GitHub
            </motion.a>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="text-blue-400 text-2xl">↓</div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            About <span className="text-blue-400">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-gray-400 leading-relaxed">
                I'm a passionate Data Analytics professional with expertise in Python, SQL, and Power BI. Currently pursuing my BSc Honours in Financial Mathematics at the University of Ruhuna.
              </p>
              <p className="text-gray-400 leading-relaxed">
                With hands-on experience in data analysis, statistical modeling, and machine learning, I transform complex data into actionable business insights. My internship at the Department of Census and Statistics has strengthened my analytical capabilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 transition-colors">
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-semibold">abdlearn99@gmail.com</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 transition-colors">
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-semibold">Bandaragama, Sri Lanka</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 transition-colors">
                <p className="text-sm text-gray-400">Education</p>
                <p className="text-white font-semibold">BSc Financial Mathematics</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Featured <span className="text-blue-400">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all group"
              >
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            <span className="text-blue-400">Skills</span> & Technologies
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-400">{skill.icon}</div>
                  <h3 className="text-lg font-bold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Get In <span className="text-blue-400">Touch</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <a
                href="mailto:abdlearn99@gmail.com"
                className="flex items-center gap-4 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail size={24} className="text-blue-400" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold">abdlearn99@gmail.com</p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/abdullah-unaiz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} className="text-blue-400" />
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <p className="font-semibold">Abdullah Unaiz</p>
                </div>
              </a>
              <a
                href="https://github.com/AbdullahUnaiz99"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github size={24} className="text-blue-400" />
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <p className="font-semibold">AbdullahUnaiz99</p>
                </div>
              </a>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleFormSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="4"
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Send Message
              </motion.button>
              {formStatus && (
                <p className={`text-center font-semibold ${formStatus.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                  {formStatus}
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-8 px-4 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Abdullah Unaiz. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Portfolio;

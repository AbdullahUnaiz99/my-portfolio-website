import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download, Send, Github, Linkedin, Mail, MapPin, Phone, ExternalLink, ChevronDown, Code, Database, BarChart3, Brain } from 'lucide-react';

// Particle Background Component
const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 80;
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 2 + 1;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      
      draw() {
        ctx.fillStyle = 'rgba(99, 102, 241, 0.4)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

// Animated Gradient Background
const GradientBackground = () => (
  <div className="fixed inset-0 -z-20">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
    <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
    <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
  </div>
);

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const sections = [
    { name: 'Home', ref: heroRef },
    { name: 'About', ref: aboutRef },
    { name: 'Education', ref: educationRef },
    { name: 'Experience', ref: experienceRef },
    { name: 'Projects', ref: projectsRef },
    { name: 'Skills', ref: skillsRef },
    { name: 'Contact', ref: contactRef }
  ];

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    { category: 'Programming', icon: <Code />, items: ['Python', 'R', 'SQL'] },
    { category: 'Databases', icon: <Database />, items: ['Microsoft SQL Server', 'PostgreSQL'] },
    { category: 'Analytics & Visualization', icon: <BarChart3 />, items: ['Pandas', 'Power BI', 'Matplotlib', 'Excel'] },
    { category: 'Machine Learning', icon: <Brain />, items: ['Prophet', 'Scikit-learn', 'Minitab'] }
  ];

  const education = [
    {
      degree: 'BSc Honours in Financial Mathematics and Industrial Statistics',
      institution: 'University of Ruhuna, Matara',
      period: '2021 – 2025',
      icon: '🎓'
    },
    {
      degree: 'Advanced Diploma in Data Science',
      institution: 'National Institute of Business Management, Colombo',
      period: '2023 – 2024',
      icon: '📊'
    },
    {
      degree: 'G.C.E Advanced Level (Physical Science)',
      institution: 'Royal College, Colombo',
      period: '2016 – 2018',
      icon: '🏫'
    }
  ];

  const projects = [
    {
      title: 'End-to-End Retail Customer Analytics',
      description: 'Performed comprehensive retail customer analytics using Python, SQL, and Power BI, including data cleaning, business analysis, and dashboard development.',
      technologies: ['Python', 'PostgreSQL', 'Power BI', 'Excel', 'Jupyter Notebook'],
      icon: '🛒',
      period: '2024 – 2025',
      github: 'https://github.com/AbdullahUnaiz99'
    },
    {
      title: 'Spotify Track Data Analytics',
      description: 'Built an end-to-end Spotify data pipeline using Python and SQL Server to extract, transform, and load track metadata for comprehensive analysis.',
      technologies: ['Python', 'SQL Server', 'Spotipy', 'Matplotlib', 'Spotify API'],
      icon: '🎵',
      period: '2024 – 2025',
      github: 'https://github.com/AbdullahUnaiz99'
    },
    {
      title: 'SARIMA vs Prophet: Exchange Rate Forecasting',
      description: 'Comparative time-series study of major global currencies against Sri Lankan Rupee using SARIMA and Prophet models.',
      technologies: ['Python', 'Prophet', 'statsmodels', 'NumPy', 'Matplotlib'],
      icon: '💱',
      period: '2024 – 2025',
      github: 'https://github.com/AbdullahUnaiz99'
    }
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
    <div className="relative bg-slate-900 text-white overflow-x-hidden">
      <GradientBackground />
      <ParticlesBackground />
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection(heroRef)}
            >
              Abdullah Unaiz
            </motion.div>
            
            <div className="hidden md:flex space-x-1">
              {sections.map((section, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(section.ref)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                >
                  {section.name}
                </motion.button>
              ))}
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(section.ref)}
                  className="block w-full text-left px-3 py-2 rounded-md text-gray-300 hover:bg-white/10 hover:text-white"
                >
                  {section.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Abdullah Unaiz
              </span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-4xl text-cyan-300 mb-8 h-12"
          >
            <TypewriterEffect texts={['Data Analyst', 'Python Developer', 'ML Enthusiast', 'Problem Solver']} />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Aspiring Data Analytics professional with expertise in Python, SQL, Power BI, and Machine Learning. 
            Passionate about transforming data into actionable insights.
          </motion.p>
          
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(contactRef)}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-full font-bold shadow-lg"
            >
              Get In Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(projectsRef)}
              className="border-2 border-indigo-400 text-indigo-400 px-8 py-3 rounded-full font-bold hover:bg-indigo-400 hover:text-white transition-all"
            >
              View Projects
            </motion.button>
            <motion.a
              href="https://github.com/AbdullahUnaiz99"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-bold hover:bg-cyan-400 hover:text-white transition-all inline-flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </motion.a>
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown size={32} className="text-indigo-400" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-12 text-center"
          >
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-indigo-400/50 transition-all">
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  I'm a passionate Data Analytics professional with a strong foundation in statistical analysis, machine learning, 
                  and data visualization. Currently pursuing my BSc Honours in Financial Mathematics and Industrial Statistics 
                  at University of Ruhuna.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  With hands-on experience in Python, SQL, Power BI, and advanced analytics, I'm eager to transform complex 
                  data into actionable business insights. My internship at the Department of Census and Statistics has further 
                  strengthened my analytical capabilities.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <StatCard number="3+" label="Projects" delay={0.3} />
                <StatCard number="5+" label="Technologies" delay={0.4} />
                <StatCard number="1" label="Internship" delay={0.5} />
                <StatCard number="2" label="Degrees" delay={0.6} />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-3"
            >
              <InfoCard icon="👤" label="Name" value="Abdullah Unaiz" />
              <InfoCard icon="📧" label="Email" value="abdlearn99@gmail.com" />
              <InfoCard icon="📱" label="Phone" value="+94 77 551 0715" />
              <InfoCard icon="🌍" label="Location" value="Bandaragama, Sri Lanka" />
              <InfoCard icon="🎓" label="Education" value="BSc Financial Mathematics" />
              <InfoCard icon="💼" label="Status" value="Statistics & Analytics Intern" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section ref={educationRef} className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl w-full">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-12 text-center"
          >
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </motion.h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-indigo-400/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{edu.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-cyan-300 mb-2">{edu.institution}</p>
                    <p className="text-indigo-400 font-semibold">{edu.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl w-full">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-12 text-center"
          >
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-indigo-400/50 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-2 h-full bg-gradient-to-b from-indigo-400 via-purple-400 to-cyan-400 rounded-full" />
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Statistics & Analytics Intern
                </h3>
                <p className="text-cyan-300 text-lg mb-2">Department of Census and Statistics</p>
                <p className="text-indigo-400 font-semibold mb-4">Mar 2025 – Sep 2025</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>Worked in the Industry and National Accounts Divisions to clean, analyze, and visualize economic 
                    and trade data using Excel and Power BI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>Analyzed financial indicators for listed companies including profit, stocks, dividends, and 
                    expenditures to support GDP estimation workflows</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-12 text-center"
          >
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)',
                  borderColor: 'rgba(99, 102, 241, 0.5)'
                }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 transition-all group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <p className="text-cyan-400 text-xs mb-4">{project.period}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors"
                >
                  View on GitHub <ExternalLink size={14} className="ml-2" />
                </motion.a>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/AbdullahUnaiz99"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-full font-bold shadow-lg"
            >
              <Github size={20} />
              View More on GitHub
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-12 text-center"
          >
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillCategory, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(99, 102, 241, 0.5)' }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-indigo-400">
                    {React.cloneElement(skillCategory.icon, { size: 28 })}
                  </div>
                  <h3 className="text-xl font-bold text-white">{skillCategory.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 102, 241, 0.3)' }}
                      className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-6 text-lg">Additional Tools & Platforms</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['VS Code', 'Jupyter Notebook', 'SSMS', 'Git', 'Spotify API'].map((tool, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg text-sm font-medium"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-12 text-center"
          >
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <ContactCard 
                icon={<Mail />} 
                title="Email" 
                value="abdlearn99@gmail.com"
                link="mailto:abdlearn99@gmail.com"
              />
              <ContactCard 
                icon={<Phone />} 
                title="Phone" 
                value="+94 77 551 0715"
                link="tel:+94775510715"
              />
              <ContactCard 
                icon={<MapPin />} 
                title="Location" 
                value="Bandaragama, Sri Lanka"
              />
              
              <div className="pt-6">
                <p className="text-gray-400 mb-4 text-center">Connect with me</p>
                <div className="flex justify-center gap-4">
                  <motion.a
                    href="https://github.com/AbdullahUnaiz99"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <Github size={28} />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/abdullah-unaiz"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin size={28} />
                  </motion.a>
                  <motion.a
                    href="mailto:abdlearn99@gmail.com"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Mail size={28} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            <motion.form
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              onSubmit={handleFormSubmit}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-400 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-400 transition-all"
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="5"
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-400 transition-all resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </motion.button>
              {formStatus && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center font-semibold ${formStatus.includes('success') ? 'text-green-400' : 'text-red-400'}`}
                >
                  {formStatus}
                </motion.p>
              )}
            </motion.form>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-full font-bold shadow-lg"
            >
              <Download size={20} />
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 backdrop-blur-xl border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Abdullah Unaiz. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with React, Framer Motion & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

// Helper Components
const TypewriterEffect = ({ texts }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts]);

  return <span>{displayText}<span className="animate-pulse">|</span></span>;
};

const StatCard = ({ number, label, delay }) => (
  <motion.div
    initial={{ scale: 0, rotate: -180 }}
    whileInView={{ scale: 1, rotate: 0 }}
    viewport={{ once: true }}
    transition={{ delay, type: 'spring' }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="bg-white/5 backdrop-blur-xl rounded-xl p-4 text-center border border-white/10 hover:border-indigo-400/50 transition-all"
  >
    <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-1">
      {number}
    </div>
    <div className="text-sm text-gray-400">{label}</div>
  </motion.div>
);

const InfoCard = ({ icon, label, value }) => (
  <motion.div
    whileHover={{ x: 10, borderColor: 'rgba(99, 102, 241, 0.5)' }}
    className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 flex items-center gap-3 transition-all"
  >
    <span className="text-2xl">{icon}</span>
    <div>
      <div className="text-sm text-gray-400">{label}</div>
      <div className="text-white font-semibold">{value}</div>
    </div>
  </motion.div>
);

const ContactCard = ({ icon, title, value, link }) => {
  const content = (
    <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 flex items-center gap-4 transition-all">
      <div className="text-indigo-400">{React.cloneElement(icon, { size: 24 })}</div>
      <div>
        <div className="text-sm text-gray-400 mb-1">{title}</div>
        <div className="text-white font-semibold">{value}</div>
      </div>
    </div>
  );

  if (link) {
    return (
      <motion.a
        href={link}
        whileHover={{ scale: 1.02, borderColor: 'rgba(99, 102, 241, 0.5)' }}
        className="block"
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div whileHover={{ scale: 1.02, borderColor: 'rgba(99, 102, 241, 0.5)' }}>
      {content}
    </motion.div>
  );
};

// Add custom animations to the style
const style = document.createElement('style');
style.textContent = `
  @keyframes blob {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
  }
  
  .animate-blob {
    animation: blob 7s infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(15, 23, 42, 0.5);
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #6366f1, #8b5cf6);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #4f46e5, #7c3aed);
  }
`;
document.head.appendChild(style);

export default Portfolio;

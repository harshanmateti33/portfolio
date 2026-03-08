'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, Download, ChevronDown, ExternalLink, Code, Palette, Zap, Award, Trophy, Star } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'projects', 'experience', 'achievements', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ]

  const projects = [
    {
      title: 'GenAI– Insulin Drug Analysis',
      description: 'Analyzed insulin drug datasets for diabetes treatment using pharmacological constraints such as molecular weight, solubility, bioavailability, hydrogen bonding, and drug-likeness metrics to generate refined datasets and analytical reports.',
      tech: ['Python', 'TensorFlow', 'Keras', 'Auto Docking Vina', 'Rdkit'],
      github: 'https://github.com/harshanmateti33',
      demo: 'https://drive.google.com/file/d/1LqFsxpOyYdZPU5lB6egCn9GuzdTTZyop/view',
      image: '/images/genai.jpg',
    },
    {
      title: 'Adobe India Hackathon– Connecting Dots Challenge',
      description: 'Developed offline, CPU-optimized PDF intelligence systems including a hierarchical outline extractor (Title–H3 with page numbers) and a persona-driven document analysis engine to rank contextually relevant sections across multiple PDFs. Accomplished high-performance processing (<10 seconds for 50-page PDFs).',
      tech: ['Python', 'NLP', 'Machine Learning', 'Document Processing'],
      github: 'https://github.com/harshanmateti33',
      demo: '#',
      image: '/images/adobe.jpg',
    },
    {
      title: 'TabulaX– LLM-Powered Tabular Transformation',
      description: 'Designed an LLM-powered framework to transform heterogeneous tabular data by classifying tables into string-based, numerical, algorithmic, and general types. Generated interpretable transformation functions and realized higher accuracy than state-of-the-art methods.',
      tech: ['Python', 'Large Language Models', 'Data Transformation', 'Machine Learning'],
      github: 'https://github.com/harshanmateti33',
      demo: 'https://drive.google.com/file/d/1nn6Th4KknTsKVYKixXSjJNUGhJt9bivO/view',
      image: '/images/LLM.jpg',
    },
    {
      title: 'EduX– AI-Enabled Educational Platform',
      description: 'Built a full-stack learning platform with dynamic quiz generation, student performance analytics, and adaptive feedback. Integrated YOLOv5 for real-time phone detection during assessments to ensure academic integrity.',
      tech: ['NextJS', 'NodeJS', 'Python', 'YOLOv5', 'Computer Vision'],
      github: 'https://github.com/harshanmateti33',
      demo: 'https://drive.google.com/file/d/1TP2BwyE1rt4FBu55O8hAs-g-MWMtbw8y/view',
      image: '/images/edux.jpg',
    },
    {
      title: 'AI-Powered Multimodal Insurance Fraud Detection',
      description: 'Built an end-to-end AI-driven car insurance claim validation system for CHUBB Insurance within 15 hours, integrating Computer Vision, NLP, and predictive analytics. Implemented damage detection, part localization, severity estimation, cost prediction, and multimodal fraud detection.',
      tech: ['Python', 'CNNs', 'BERT', 'Computer Vision', 'NLP', 'Grad-CAM'],
      github: 'https://github.com/harshanmateti33',
      demo: 'https://drive.google.com/file/d/1_bbda75s9ckQzjKmrEEvv_Iry1CG9F1W/view',
      image: '/images/insurance.jpg',
    },
    {
      title: 'IoT-Based Vehicle Automation System',
      description: 'Developed a voice-enabled web application to control vehicle functions, integrating live location tracking, weather prediction, and music streaming using external APIs with real-time data storage and authentication.',
      tech: ['Arduino', 'Web Development', 'APIs', 'IoT', 'Real-time Data'],
      github: 'https://github.com/harshanmateti33',
      demo: '#',
      image: '/images/iot.jpg',
    },
  ]

  const education = {
    university: 'Keshav Memorial Institution of Technology',
    degree: 'Bachelor of Technology',
    gpa: '8.66',
    location: 'Hyderabad, India',
    period: 'Aug 2023 - June 2027',
    courses: ['Operating Systems', 'Data Structures', 'Analysis Of Algorithms', 'Artificial Intelligence', 'Machine Learning', 'Networking', 'Databases']
  }

  const experience = [
    {
      title: 'Adobe India-Connecting the Dots Challenge',
      role: 'NLP Engineer',
      period: 'Jun-2025',
      location: 'Hyderabad, India',
      description: 'Designed an NLP-driven multi-PDF analysis pipeline that extracts persona-specific insights from large document collections, reducing manual document review time by 70%.'
    },
    {
      title: 'Drug Design',
      role: 'AI/ML Engineer',
      period: 'Aug-2024',
      location: 'Hyderabad, India',
      description: 'Developed an AI-driven drug design pipeline to generate and evaluate 1,000+ insulin compound candidates using pharmacological descriptors, achieving 98% prediction accuracy in compound effectiveness classification.'
    }
  ]

  const awards = [
    {
      title: 'Contributed for Chubb Insurance Company',
      event: 'MEGATHON 2025 @ IIIT Hyderabad',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Official Contributor for Plone Volto',
      event: 'Google Summer of Code 2024',
      icon: <Star className="w-6 h-6" />,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Runner\'s Up',
      event: 'Adobe India Hackathon– Connecting the Dots Challenge',
      icon: <Award className="w-6 h-6" />,
      color: 'from-orange-400 to-red-500'
    }
  ]

  const skills = {
    languages: ['C++', 'Python', 'JavaScript', 'SQL', 'JAVA', 'C', 'MongoDB'],
    frameworks: ['Scikit', 'NextJS', 'TensorFlow', 'Keras', 'Flask', 'NodeJS'],
    tools: ['Kubernetes', 'Docker', 'GIT', 'MongoDB', 'MySQL', 'SQLite', 'Auto Docking Vina', 'Rdkit'],
    platforms: ['Linux', 'Web', 'Windows', 'Arduino', 'AWS Cloud'],
    softSkills: ['Leadership', 'Event Management', 'Writing', 'Public Speaking', 'Time Management'],
    aiRobotics: ['Machine Learning', 'Generative AI', 'Neural Networks', 'Large Language Models', 'Edge Impulse', 'OpenCV']
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold gradient-text">Portfolio</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-primary-600'
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-primary-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md ${
                      activeSection === item.id
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Hi, I'm</span>
              <br />
              <span className="text-gray-900">Mateti Harshan</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Software Development Engineer
              <br />
              Creating scalable, efficient software solutions and meaningful digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                <a href="/images/InterviewResume(ADVANCED).pdf" download="Harshan_Mateti_Resume.pdf" className="text-white">
                  Download Resume
                </a>
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 border border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
              >
                View Projects
              </button>
            </div>

            <div className="flex justify-center gap-6 mb-16">
              <a href="https://github.com/harshanmateti33" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/harshan-mateti-257914323/" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:harshanmateti33@gmail.com" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://leetcode.com/u/harshanmateti/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors">
  <Code className="w-6 h-6" />
</a>
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center"
            >
              <ChevronDown className="w-6 h-6 text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">About Me</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  I'm a passionate Software Development Engineer who enjoys solving complex problems and building scalable software solutions. With a strong foundation in data structures, algorithms, and modern development technologies, I focus on writing clean, efficient, and maintainable code.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Through my development journey, I've worked on various projects ranging from full-stack applications to algorithmic problem solving. I'm always eager to learn new technologies and continuously improve my skills to build impactful and reliable software.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Languages</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.languages.map((skill: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Frameworks</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.frameworks.map((skill: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.tools.map((skill: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">AI / Robotics</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.aiRobotics.map((skill: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary-100 to-purple-100 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">👨‍💻</div>
                <h3 className="text-2xl font-bold mb-2">Let's Work Together</h3>
                <p className="text-gray-600 mb-6">
                  I'm always open to discussing new projects and opportunities.
                </p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Education</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{education.university}</h3>
                  <p className="text-lg text-gray-600 mb-1">{education.degree}</p>
                  <p className="text-medium text-gray-500">GPA: {education.gpa}</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p className="text-gray-600 mb-1">{education.location}</p>
                  <p className="text-gray-500">{education.period}</p>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-700 mb-3">Relevant Courses</h4>
                <div className="flex flex-wrap gap-2">
                  {education.courses.map((course: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Experience</h2>
            
            <div className="space-y-8">
              {experience.map((exp: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <p className="text-lg text-primary-600 mb-1">{exp.role}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-gray-600 mb-1">{exp.location}</p>
                      <p className="text-gray-500">{exp.period}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
                >
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-purple-100 flex items-center justify-center p-4">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="max-w-full max-h-full object-contain rounded-lg"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Achievements</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {awards.map((award: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
                >
                  <div className={`h-48 bg-gradient-to-br ${award.color} flex items-center justify-center`}>
                    <div className="text-white">
                      {award.icon}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                    <p className="text-gray-600">{award.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-12 gradient-text">Get In Touch</h2>
            
            <p className="text-xl text-gray-600 mb-8">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
                harshan.mateti@gmail.com
              </a>
            </div>
            
            <div className="flex justify-center gap-6">
              <a href="https://github.com/harshanmateti33" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/harshan-mateti-257914323/" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4">
            © 2026 Harshan Mateti. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}

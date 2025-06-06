import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import SkillTag from '@/components/SkillTag';
import { Button } from '@/components/ui/button';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2787&auto=format&fit=crop',
    skills: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: '/project/1'
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description: 'Interactive weather forecasting app using OpenWeather API',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2940&auto=format&fit=crop',
    skills: ['React', 'API Integration', 'Chart.js', 'Tailwind CSS'],
    link: '/project/2'
  },
  {
    id: 3,
    title: 'Task Management System',
    description: 'Collaborative task management tool with real-time updates',
    image: 'https://images.unsplash.com/photo-1611224885990-ab7363d7f2a9?q=80&w=2939&auto=format&fit=crop',
    skills: ['React', 'Firebase', 'Redux', 'Material UI'],
    link: '/project/3'
  }
];

// Sample skills data with type-safe categories
const skills = [
  { name: 'JavaScript', category: 'frontend' as const },
  { name: 'TypeScript', category: 'frontend' as const },
  { name: 'React', category: 'frontend' as const },
  { name: 'Node.js', category: 'backend' as const },
  { name: 'Express', category: 'backend' as const },
  { name: 'MongoDB', category: 'backend' as const },
  { name: 'PostgreSQL', category: 'backend' as const },
  { name: 'Tailwind CSS', category: 'frontend' as const },
  { name: 'Redux', category: 'frontend' as const },
  { name: 'Git', category: 'tools' as const },
  { name: 'Docker', category: 'tools' as const },
  { name: 'AWS', category: 'tools' as const },
];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;
    
    if (contactRef.current && scrollPosition >= contactRef.current.offsetTop) {
      setActiveSection('contact');
    } else if (skillsRef.current && scrollPosition >= skillsRef.current.offsetTop) {
      setActiveSection('skills');
    } else if (projectsRef.current && scrollPosition >= projectsRef.current.offsetTop) {
      setActiveSection('projects');
    } else if (aboutRef.current && scrollPosition >= aboutRef.current.offsetTop) {
      setActiveSection('about');
    } else {
      setActiveSection('hero');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-br from-white via-secondary/50 to-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-primary/10 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">
            <span className="text-primary">Portfolio</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className={`hover:text-primary transition-colors ${activeSection === 'about' ? 'text-primary' : ''}`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className={`hover:text-primary transition-colors ${activeSection === 'projects' ? 'text-primary' : ''}`}
            >
              Projects
            </button>
            <Link
              to="/weather"
              className="hover:text-primary transition-colors"
            >
              Weather
            </Link>
            <button
              onClick={() => scrollToSection(skillsRef)}
              className={`hover:text-primary transition-colors ${activeSection === 'skills' ? 'text-primary' : ''}`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className={`hover:text-primary transition-colors ${activeSection === 'contact' ? 'text-primary' : ''}`}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50"></div>
        </div>
        <div className="container mx-auto px-6 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-foreground">Hi, I'm </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">Alex</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-8">
              A passionate full-stack developer specialized in creating modern web applications
            </p>
            <Button 
              onClick={() => scrollToSection(projectsRef)}
              className="animate-pulse"
              size="lg"
            >
              View My Work
            </Button>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-foreground/50" />
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-white/50 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="border-b-2 border-primary pb-2">About Me</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-lg shadow-primary/20">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-foreground/80 mb-6">
                I'm a full-stack developer with 5+ years of experience building modern web applications. 
                My journey in software development started with a curiosity about how websites work, 
                which evolved into a passion for creating elegant, user-focused solutions.
              </p>
              <p className="text-lg text-foreground/80 mb-6">
                I specialize in JavaScript/TypeScript ecosystems, with expertise in React, Node.js, 
                and various database technologies. I'm passionate about clean code, performance optimization, 
                and creating seamless user experiences.
              </p>
              <p className="text-lg text-foreground/80">
                When I'm not coding, you can find me hiking, reading tech blogs, or experimenting 
                with new technologies to stay at the cutting edge of web development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="border-b-2 border-primary pb-2">Featured Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 bg-white/50 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="border-b-2 border-primary pb-2">Skills & Technologies</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <SkillTag key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="border-b-2 border-primary pb-2">Get In Touch</span>
          </h2>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col gap-8">
              <a href="mailto:hello@example.com" className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <Mail className="w-8 h-8 text-primary" />
                <span className="text-lg">hello@example.com</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <Github className="w-8 h-8 text-primary" />
                <span className="text-lg">github.com/myusername</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <Linkedin className="w-8 h-8 text-primary" />
                <span className="text-lg">linkedin.com/in/myusername</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-white/80 backdrop-blur-lg border-t border-primary/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-foreground/60">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

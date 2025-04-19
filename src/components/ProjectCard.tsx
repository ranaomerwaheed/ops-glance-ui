
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  skills: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-black/30 backdrop-blur-md rounded-xl overflow-hidden shadow-lg shadow-primary/10 border border-white/10 h-full flex flex-col"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.map((skill) => (
            <span 
              key={skill} 
              className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary"
            >
              {skill}
            </span>
          ))}
        </div>
        <Link 
          to={project.link} 
          className="flex items-center gap-2 text-primary hover:text-white transition-colors mt-auto"
        >
          View Project <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

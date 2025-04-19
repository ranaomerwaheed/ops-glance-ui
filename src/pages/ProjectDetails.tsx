import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample project details data
const projectsData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
    longDescription: 'This e-commerce platform offers a complete online shopping experience with product browsing, search functionality, cart management, secure checkout, and user accounts. The frontend is built with React and Redux, providing a responsive and intuitive user interface. The backend uses Node.js and Express, with MongoDB for data storage. The application includes admin features for product and inventory management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2787&auto=format&fit=crop',
    skills: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'JWT Authentication', 'Stripe Integration'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    screenshots: [
      'https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2940&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=2670&auto=format&fit=crop',
    ]
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description: 'Interactive weather forecasting app using OpenWeather API',
    longDescription: 'This interactive weather dashboard provides users with detailed weather forecasts for locations worldwide. It features current weather conditions, 5-day forecasts, and historical weather data. The application is built with React and leverages the OpenWeather API for accurate weather data. Users can search for cities, save favorites, and view weather patterns through interactive charts built with Chart.js.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2940&auto=format&fit=crop',
    skills: ['React', 'API Integration', 'Chart.js', 'Tailwind CSS', 'Geolocation API', 'Local Storage'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    screenshots: [
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2940&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576502200916-3808e07386a5?q=80&w=2940&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=2751&auto=format&fit=crop',
    ]
  },
  {
    id: 3,
    title: 'Task Management System',
    description: 'Collaborative task management tool with real-time updates',
    longDescription: 'This collaborative task management system helps teams organize and track their work efficiently. It features project boards, task assignments, due dates, progress tracking, and real-time updates. The frontend is built with React and Material UI, providing a clean and intuitive interface. The backend uses Firebase for real-time data synchronization and user authentication. The application includes features like file attachments, comments, and notifications to enhance team collaboration.',
    image: 'https://images.unsplash.com/photo-1611224885990-ab7363d7f2a9?q=80&w=2939&auto=format&fit=crop',
    skills: ['React', 'Firebase', 'Redux', 'Material UI', 'Real-time Database', 'Cloud Functions'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    screenshots: [
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2944&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541728472741-03e45a58cf88?q=80&w=2732&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop',
    ]
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const projectId = parseInt(id || '1');
  
  // Find the project with the matching ID
  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white pb-20">
      {/* Header with hero image */}
      <div className="relative h-[50vh] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{project.description}</p>
          </div>
        </div>
      </div>
      
      {/* Back button */}
      <div className="container mx-auto px-6 mt-8">
        <Link to="/" className="inline-flex items-center text-primary hover:text-white transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to portfolio
        </Link>
      </div>
      
      {/* Project content */}
      <div className="container mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 border-b border-white/10 pb-2">Project Overview</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">{project.longDescription}</p>
            
            <h2 className="text-2xl font-bold mb-6 border-b border-white/10 pb-2">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="rounded-lg overflow-hidden border border-white/10">
                  <img 
                    src={screenshot} 
                    alt={`Screenshot ${index + 1}`} 
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-white/10 sticky top-8">
              <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="text-sm px-3 py-1 rounded-full bg-primary/20 text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mb-4">Project Links</h3>
              <div className="flex flex-col gap-4">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-lg bg-black/50 hover:bg-primary/20 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>View Source Code</span>
                </a>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-lg bg-primary text-white hover:bg-primary/80 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Visit Live Site</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

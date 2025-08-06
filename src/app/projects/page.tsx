"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import { 
  Github, 
  ExternalLink, 
  Filter,
  Search,
  Code,
  Database,
  Globe,
  Smartphone
} from "lucide-react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, Stripe, and PostgreSQL. Features include user authentication, product management, shopping cart, and payment processing.",
      image: "/api/placeholder/400/300",
      category: "fullstack",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://ecommerce-demo.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/400/300",
      category: "fullstack",
      technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/yourusername/task-app",
      liveUrl: "https://task-app-demo.vercel.app",
      featured: true
    },
    {
      id: 3,
      title: "AI Chat Application",
      description: "An AI-powered chat application with natural language processing, conversation history, and multiple AI models support.",
      image: "/api/placeholder/400/300",
      category: "fullstack",
      technologies: ["Next.js", "OpenAI", "Vercel", "TypeScript"],
      githubUrl: "https://github.com/yourusername/ai-chat",
      liveUrl: "https://ai-chat-demo.vercel.app",
      featured: true
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern portfolio website with dark mode, animations, and responsive design. Built with Next.js and Framer Motion.",
      image: "/api/placeholder/400/300",
      category: "frontend",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://portfolio-demo.vercel.app",
      featured: false
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "A weather dashboard with real-time data, location-based forecasts, and interactive charts. Integrates with multiple weather APIs.",
      image: "/api/placeholder/400/300",
      category: "frontend",
      technologies: ["React", "Chart.js", "Weather API", "CSS3"],
      githubUrl: "https://github.com/yourusername/weather-app",
      liveUrl: "https://weather-app-demo.vercel.app",
      featured: false
    },
    {
      id: 6,
      title: "REST API Service",
      description: "A comprehensive REST API service with authentication, rate limiting, and comprehensive documentation. Built with Node.js and Express.",
      image: "/api/placeholder/400/300",
      category: "backend",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
      githubUrl: "https://github.com/yourusername/api-service",
      liveUrl: "https://api-docs-demo.vercel.app",
      featured: false
    }
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: Globe },
    { id: "fullstack", name: "Full Stack", icon: Code },
    { id: "frontend", name: "Frontend", icon: Globe },
    { id: "backend", name: "Backend", icon: Database },
    { id: "mobile", name: "Mobile", icon: Smartphone }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Here are some of the projects I've worked on. Each one represents 
              a unique challenge and learning opportunity.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                        selectedCategory === category.id
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:bg-blue-50"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{project.title}</span>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        <span className="text-sm">Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No projects found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Let's Talk
          </a>
        </div>
      </section>
    </div>
  );
} 
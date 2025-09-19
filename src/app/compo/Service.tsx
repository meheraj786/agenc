import React from 'react';
import { Palette, Server, Code, Monitor, Database, Globe } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Creating stunning, responsive and interactive user interfaces with modern technologies and best practices.",
      icon: <Monitor className="h-12 w-12" />,
      gradient: "from-pink-500 to-violet-500",
      borderGradient: "from-pink-500/50 to-violet-500/50",
      bgGradient: "from-pink-500/10 to-violet-500/10",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind"]
    },
    {
      title: "Backend Development", 
      description: "Building robust, scalable and secure server-side applications with cutting-edge backend technologies.",
      icon: <Server className="h-12 w-12" />,
      gradient: "from-cyan-400 to-blue-500",
      borderGradient: "from-cyan-400/50 to-blue-500/50", 
      bgGradient: "from-cyan-400/10 to-blue-500/10",
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
      isHighlighted: true
    },
    {
      title: "Fullstack Development",
      description: "Complete end-to-end web application development combining both frontend and backend expertise.",
      icon: <Globe className="h-12 w-12" />,
      gradient: "from-emerald-400 to-cyan-500",
      borderGradient: "from-emerald-400/50 to-cyan-500/50",
      bgGradient: "from-emerald-400/10 to-cyan-500/10", 
      technologies: ["MERN", "Next.js", "Django", "DevOps"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-36">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            The Services We Offer{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              For You
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative ${
                service.isHighlighted 
                  ? 'lg:scale-110 lg:-translate-y-8' 
                  : 'hover:scale-105'
              } transition-all duration-500 hover:translate-y-2`}
            >
              {/* Card */}
              <div className={`
                relative h-96 rounded-3xl p-8 backdrop-blur-lg
                ${service.isHighlighted 
                  ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-2 border-cyan-400/30' 
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }
                shadow-2xl transition-all duration-500
              `}>
                
                {/* Icon Container */}
                <div className={`
                  w-20 h-20 rounded-2xl bg-gradient-to-br ${service.bgGradient} 
                  border border-white/20 flex items-center justify-center mb-6
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  <div className={`text-transparent bg-gradient-to-br ${service.gradient} bg-clip-text`}>
                    {service.icon}
                  </div>
                </div>

                {/* 3D Isometric Illustration */}
                <div className="mb-6 flex justify-center">
                  {index === 0 && (
                    // Frontend - UI Components
                    <div className="relative w-32 h-24">
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-400/30 to-violet-500/30 rounded-lg transform rotate-3 skew-y-3"></div>
                      <div className="absolute inset-1 bg-gradient-to-br from-pink-500/40 to-violet-600/40 rounded-lg transform -rotate-2 skew-y-2"></div>
                      <div className="absolute inset-2 bg-gradient-to-br from-pink-400 to-violet-500 rounded-lg flex items-center justify-center">
                        <Palette className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  )}
                  
                  {index === 1 && (
                    // Backend - Server Stack
                    <div className="relative w-32 h-24">
                      <div className="absolute bottom-0 w-full h-4 bg-gradient-to-r from-cyan-400/40 to-blue-500/40 rounded transform skew-x-12"></div>
                      <div className="absolute bottom-2 w-full h-4 bg-gradient-to-r from-cyan-400/60 to-blue-500/60 rounded transform skew-x-12"></div>
                      <div className="absolute bottom-4 w-full h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded transform skew-x-12 flex items-center justify-center">
                        <Database className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  )}
                  
                  {index === 2 && (
                    // Fullstack - Connected Components
                    <div className="relative w-32 h-24">
                      <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg transform rotate-12"></div>
                      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg transform -rotate-12"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center">
                        <Code className="h-4 w-4 text-white" />
                      </div>
                      {/* Connecting lines */}
                      <div className="absolute top-6 left-6 w-20 h-px bg-gradient-to-r from-emerald-400 to-cyan-500 transform rotate-45"></div>
                      <div className="absolute top-6 right-6 w-20 h-px bg-gradient-to-r from-emerald-400 to-cyan-500 transform -rotate-45"></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`
                          px-3 py-1 rounded-full text-xs font-medium
                          bg-gradient-to-r ${service.bgGradient} 
                          border border-white/10 text-white
                        `}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`
                  absolute inset-0 rounded-3xl bg-gradient-to-br ${service.bgGradient} 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10
                `}></div>
              </div>

              {/* Highlight Badge for Featured Service */}
              {service.isHighlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
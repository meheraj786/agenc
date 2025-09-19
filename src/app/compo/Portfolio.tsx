"use client"
import React, { useState } from 'react';
import { ArrowUpRight, Smartphone, Monitor, ShoppingBag } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('UI/UX Design');

  const filters = ['UI/UX Design', 'Digital Marketing', 'Content Management', 'Development'];

  const projects = [
    {
      id: 1,
      title: "Food Delivery Mobile App",
      description: "We are designed to help your business thrive in the online world.",
      image: "mobile-apps",
      category: "UI/UX Design",
      type: "Mobile App",
      icon: <Smartphone className="h-5 w-5" />
    },
    {
      id: 2, 
      title: "E-commerce Dashboard",
      description: "We are designed to help your business thrive in the online world.",
      image: "dashboard",
      category: "UI/UX Design", 
      type: "Web Application",
      icon: <Monitor className="h-5 w-5" />
    },
    {
      id: 3,
      title: "Brand Identity Design",
      description: "We are designed to help your business thrive in the online world.",
      image: "branding",
      category: "Digital Marketing",
      type: "Branding",
      icon: <ShoppingBag className="h-5 w-5" />
    },
    {
      id: 4,
      title: "SaaS Platform Design",
      description: "We are designed to help your business thrive in the online world.",
      image: "saas",
      category: "Development",
      type: "Web Platform",
      icon: <Monitor className="h-5 w-5" />
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'UI/UX Design' ? true : project.category === activeFilter
  );

  return (
    <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Project Have Been{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Done
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
            Take a look at some of our recent projects and see how we've helped other businesses elevate
            their brand and drive business growth.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mobile Apps Project */}
          <div className="group relative bg-gray-800/50 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
            {/* Project Image Container */}
            <div className="relative h-80 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl mb-6 overflow-hidden">
              {/* Mobile App Screenshots */}
              <div className="absolute inset-4 flex justify-center items-center space-x-4">
                {/* Phone 1 */}
                <div className="w-16 h-28 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg shadow-lg flex flex-col items-center justify-center transform rotate-12 group-hover:rotate-6 transition-transform duration-500">
                  <div className="w-8 h-8 bg-white/20 rounded-full mb-2"></div>
                  <div className="w-10 h-2 bg-white/30 rounded mb-1"></div>
                  <div className="w-8 h-1 bg-white/20 rounded"></div>
                </div>
                
                {/* Phone 2 - Center */}
                <div className="w-20 h-36 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-xl flex flex-col items-center justify-center z-10 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3">
                    <ArrowUpRight className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="w-14 h-2 bg-white/30 rounded mb-1"></div>
                  <div className="w-10 h-1 bg-white/20 rounded"></div>
                </div>
                
                {/* Phone 3 */}
                <div className="w-16 h-28 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg shadow-lg flex flex-col items-center justify-center transform -rotate-12 group-hover:-rotate-6 transition-transform duration-500">
                  <div className="w-8 h-8 bg-white/20 rounded-full mb-2"></div>
                  <div className="w-10 h-2 bg-white/30 rounded mb-1"></div>
                  <div className="w-8 h-1 bg-white/20 rounded"></div>
                </div>
              </div>

              {/* Hover Overlay with Arrow */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <ArrowUpRight className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Smartphone className="h-4 w-4" />
                <span className="text-sm font-medium">Mobile Application</span>
              </div>
              <h3 className="text-xl font-bold text-white">Food Delivery Mobile App</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We are designed to help your business thrive in the online world.
              </p>
            </div>
          </div>

          {/* Dashboard Project */}
          <div className="group relative bg-gray-800/50 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
            {/* Project Image Container */}
            <div className="relative h-80 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl mb-6 overflow-hidden">
              {/* Dashboard Screenshot */}
              <div className="absolute inset-4 bg-white rounded-lg p-4 shadow-xl group-hover:scale-105 transition-transform duration-500">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="w-20 h-2 bg-gray-200 rounded"></div>
                </div>
                
                {/* Dashboard Content */}
                <div className="space-y-3">
                  <div className="flex space-x-3">
                    <div className="w-16 h-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-lg"></div>
                    <div className="flex-1 space-y-1">
                      <div className="w-full h-2 bg-gray-200 rounded"></div>
                      <div className="w-3/4 h-2 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-8 bg-gradient-to-r from-pink-300 to-purple-400 rounded"></div>
                    <div className="h-8 bg-gradient-to-r from-blue-300 to-cyan-400 rounded"></div>
                    <div className="h-8 bg-gradient-to-r from-green-300 to-emerald-400 rounded"></div>
                  </div>
                  
                  <div className="w-full h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg"></div>
                </div>
              </div>

              {/* Hover Overlay with Arrow */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <ArrowUpRight className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-purple-400">
                <Monitor className="h-4 w-4" />
                <span className="text-sm font-medium">Web Application</span>
              </div>
              <h3 className="text-xl font-bold text-white">E-commerce Dashboard</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We are designed to help your business thrive in the online world.
              </p>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            View All Projects
            <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
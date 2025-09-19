"use client"
import React, { useState, useEffect } from 'react';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    awards: 0
  });

  const finalValues = {
    experience: 10,
    projects: 666,
    clients: 555,
    awards: 10
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues).map(key => {
      const increment = finalValues[key] / steps;
      let currentValue = 0;
      
      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValues[key]) {
          currentValue = finalValues[key];
          clearInterval(intervals[Object.keys(finalValues).indexOf(key)]);
        }
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepDuration);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  const stats = [
    {
      number: counters.experience,
      suffix: '+',
      label: 'Years of Experiences',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      number: counters.projects,
      suffix: '+',
      label: 'Project Completed',
      color: 'from-purple-400 to-pink-400'
    },
    {
      number: counters.clients,
      suffix: '+',
      label: 'Satisfied Client',
      color: 'from-green-400 to-emerald-400'
    },
    {
      number: counters.awards,
      suffix: '+',
      label: 'Awards Achieved',
      color: 'from-orange-400 to-red-400'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Description Text */}
        <div className="text-center mb-16">
          <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto font-light">
            We are passionate about helping businesses grow and succeed
            <br />
            in the digital age. We take pride in our work and strive to exceed
            <br />
            your expectations every time.
          </p>
        </div>

        {/* Stats Container */}
        <div className="relative">
          {/* Background Gradient Card */}
          <div className="bg-gradient-to-r from-blue-600/80 via-purple-600/80 to-indigo-600/80 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  {/* Number */}
                  <div className="mb-4">
                    <span className={`text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.number}
                    </span>
                    <span className={`text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.suffix}
                    </span>
                  </div>
                  
                  {/* Label */}
                  <p className="text-white text-sm sm:text-base font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {stat.label}
                  </p>
                  
                  {/* Hover Effect Line */}
                  <div className={`h-1 w-0 bg-gradient-to-r ${stat.color} mx-auto mt-3 group-hover:w-full transition-all duration-500 rounded-full`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-1/4 left-10 opacity-20">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg rotate-45 animate-pulse"></div>
        </div>
        
        <div className="absolute top-1/3 right-16 opacity-15">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="absolute bottom-1/4 left-1/4 opacity-25">
          <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg transform rotate-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
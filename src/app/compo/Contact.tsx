"use client"
import React, { useState } from 'react';
import { Send, User, Building, Mail, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            CONTACT US
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore sint nesciunt minus dolor vitae
            dolore non cum.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Illustration */}
          <div className="relative">
            {/* Background Gradient Circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-pink-600/40 rounded-full blur-3xl transform scale-110"></div>
            
            {/* Main Illustration Container */}
            <div className="relative bg-gradient-to-br from-purple-600/30 to-purple-800/50 rounded-full p-12 backdrop-blur-sm border border-white/10">
              
              {/* Dashboard/Screen */}
              <div className="relative bg-white rounded-lg p-6 shadow-2xl mb-8 transform rotate-3 hover:rotate-1 transition-transform duration-500">
                {/* Screen Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="w-16 h-2 bg-gray-200 rounded"></div>
                </div>
                
                {/* Chart/Graph */}
                <div className="space-y-3">
                  <div className="flex items-end space-x-2 h-20">
                    <div className="w-6 h-12 bg-gradient-to-t from-purple-400 to-purple-600 rounded-t"></div>
                    <div className="w-6 h-16 bg-gradient-to-t from-blue-400 to-blue-600 rounded-t"></div>
                    <div className="w-6 h-8 bg-gradient-to-t from-green-400 to-green-600 rounded-t"></div>
                    <div className="w-6 h-14 bg-gradient-to-t from-pink-400 to-pink-600 rounded-t"></div>
                    <div className="w-6 h-10 bg-gradient-to-t from-yellow-400 to-yellow-600 rounded-t"></div>
                  </div>
                  
                  <div className="flex space-x-1">
                    <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                    <div className="flex-1 h-2 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>

              {/* People Illustrations */}
              {/* Person 1 - Left */}
              <div className="absolute bottom-8 left-4">
                <div className="relative">
                  <div className="w-16 h-20 bg-gradient-to-b from-purple-400 to-purple-600 rounded-t-full rounded-b-lg"></div>
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-full"></div>
                  {/* Laptop */}
                  <div className="absolute -right-2 top-8 w-8 h-5 bg-gray-300 rounded transform -rotate-12">
                    <div className="w-full h-3 bg-blue-400 rounded-t"></div>
                  </div>
                </div>
              </div>

              {/* Person 2 - Right */}
              <div className="absolute bottom-8 right-8">
                <div className="relative">
                  <div className="w-16 h-20 bg-gradient-to-b from-teal-400 to-teal-600 rounded-t-full rounded-b-lg"></div>
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-b from-pink-200 to-pink-400 rounded-full"></div>
                  {/* Document */}
                  <div className="absolute -left-3 top-6 w-6 h-8 bg-white rounded shadow-lg transform rotate-12">
                    <div className="w-4 h-1 bg-gray-300 rounded mx-auto mt-1"></div>
                    <div className="w-3 h-1 bg-gray-200 rounded mx-auto mt-1"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-12 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded rotate-45 animate-bounce"></div>
              <div className="absolute top-12 left-8 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-20 right-4 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg rotate-12 animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="space-y-8">
            {/* Register Interest Header */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4">
                Register Interest
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Just fill in the blanks to register, leave us a message 
                that includes: what type of project you need, the 
                estimated timeline for completion, your budget, and any 
                relevant project details. Click the Send button to send 
                a message - you agree with our terms and conditions.
              </p>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <label className="block text-white text-sm font-medium mb-2">
                  NAME
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Type your name here"
                    className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Company Field */}
              <div className="relative">
                <label className="block text-white text-sm font-medium mb-2">
                  COMPANY
                </label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Type your company name"
                    className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <label className="block text-white text-sm font-medium mb-2">
                  EMAIL ADDRESS
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Type your email address"
                    className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label className="block text-white text-sm font-medium mb-2">
                  MESSAGE
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message here"
                    rows="4"
                    className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                Submit
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
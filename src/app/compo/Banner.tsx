import React from 'react';
import { ArrowRight, TrendingUp, DollarSign, Star, Users } from 'lucide-react';
import BenefitsSection from './Benifit';

const HeroBanner = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Header Text */}
        <div className="text-center mb-16">
          
          <h1 className="text-4xl mt-20 sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Smart Choices
            </span>
            <br />
            <span className="text-white">
              For Your Business Growth
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            We're a team of experienced designers, developers,
            <br />
            and marketers, passionate about delivering exceptional digital solutions.
          </p>
          
          <button className="group bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center mx-auto">
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Benefits Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-800/50 via-blue-800/50 to-teal-600/50 backdrop-blur-lg border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <h2 className="text-white text-2xl sm:text-3xl font-bold text-center mb-12">
              Benefit of improving your business
            </h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 hover:bg-white/20 transition-all duration-300 transform group-hover:scale-105">
                  <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
                </div>
                <h3 className="text-white font-semibold mb-2">Expanding the Market</h3>
              </div>

              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 hover:bg-white/20 transition-all duration-300 transform group-hover:scale-105">
                  <DollarSign className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                </div>
                <h3 className="text-white font-semibold mb-2">Cost-Effective</h3>
              </div>

              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 hover:bg-white/20 transition-all duration-300 transform group-hover:scale-105">
                  <Star className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                </div>
                <h3 className="text-white font-semibold mb-2">More Professional</h3>
              </div>

              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 hover:bg-white/20 transition-all duration-300 transform group-hover:scale-105">
                  <Users className="h-8 w-8 text-teal-400 mx-auto mb-2" />
                </div>
                <h3 className="text-white font-semibold mb-2">Attract Client</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 opacity-30">
        <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-xl animate-pulse"></div>
      </div>
      
      <div className="absolute top-1/3 right-10 opacity-20">
        <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="absolute bottom-1/4 left-1/3 opacity-25">
        <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-400 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default HeroBanner;
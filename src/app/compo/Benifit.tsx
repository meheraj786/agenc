import React from 'react';
import { TrendingUp, DollarSign, Zap, Users } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

const BenefitsSection: React.FC = () => {
  const benefits: Benefit[] = [
    {
      icon: <TrendingUp size={24} className="text-white" />,
      title: 'Expanding the Market',
      description: 'Reach new audiences and grow your customer base with strategic market expansion.'
    },
    {
      icon: <DollarSign size={24} className="text-white" />,
      title: 'Cost-Effective',
      description: 'Optimize your budget with efficient solutions that deliver maximum ROI.'
    },
    {
      icon: <Zap size={24} className="text-white" />,
      title: 'More Professional',
      description: 'Enhance your brand image with professional-grade services and expertise.'
    },
    {
      icon: <Users size={24} className="text-white" />,
      title: 'Attract Client',
      description: 'Draw in more clients with compelling value propositions and quality service.'
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        {/* Background Container with Gradient */}
        <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 overflow-hidden">
          
          {/* Abstract Background Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/5 rounded-full blur-lg"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefit of improving your business
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Discover how our solutions can transform your business operations and drive sustainable growth.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  {/* Icon Container */}
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4 group-hover:bg-white/30 group-hover:shadow-lg transition-all duration-300">
                    {benefit.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-cyan-200 transition-colors duration-300">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  {benefit.description && (
                    <p className="text-white/70 text-sm md:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/30 hover:shadow-lg transition-all duration-300 group">
                <span className="group-hover:scale-105 inline-block transition-transform duration-300">
                  Learn More About Our Services
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
import React from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  socialLinks: SocialLink[];
}

const OurTeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      bio: "Visionary leader with 10+ years in tech innovation and business strategy.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9b08c8e?w=400&h=400&fit=crop&crop=face",
      socialLinks: [
        { platform: "LinkedIn", url: "#", icon: <Linkedin size={18} /> },
        { platform: "Twitter", url: "#", icon: <Twitter size={18} /> },
        { platform: "Email", url: "#", icon: <Mail size={18} /> }
      ]
    },
    {
      name: "Michael Chen",
      position: "CTO & Co-Founder",
      bio: "Full-stack developer and tech architect passionate about scalable solutions.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      socialLinks: [
        { platform: "LinkedIn", url: "#", icon: <Linkedin size={18} /> },
        { platform: "Github", url: "#", icon: <Github size={18} /> },
        { platform: "Twitter", url: "#", icon: <Twitter size={18} /> }
      ]
    },
    {
      name: "Emily Rodriguez",
      position: "Lead Designer",
      bio: "Creative design expert specializing in user experience and brand identity.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      socialLinks: [
        { platform: "LinkedIn", url: "#", icon: <Linkedin size={18} /> },
        { platform: "Twitter", url: "#", icon: <Twitter size={18} /> },
        { platform: "Email", url: "#", icon: <Mail size={18} /> }
      ]
    },
    {
      name: "David Kim",
      position: "Lead Developer",
      bio: "Senior developer with expertise in modern web technologies and cloud solutions.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      socialLinks: [
        { platform: "LinkedIn", url: "#", icon: <Linkedin size={18} /> },
        { platform: "Github", url: "#", icon: <Github size={18} /> },
        { platform: "Email", url: "#", icon: <Mail size={18} /> }
      ]
    },
    {
      name: "Lisa Wang",
      position: "Project Manager",
      bio: "Results-driven project manager ensuring seamless delivery and client satisfaction.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      socialLinks: [
        { platform: "LinkedIn", url: "#", icon: <Linkedin size={18} /> },
        { platform: "Twitter", url: "#", icon: <Twitter size={18} /> },
        { platform: "Email", url: "#", icon: <Mail size={18} /> }
      ]
    },
    {
      name: "James Thompson",
      position: "Marketing Director",
      bio: "Digital marketing strategist with a passion for growth and brand development.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      socialLinks: [
        { platform: "LinkedIn", url: "#", icon: <Linkedin size={18} /> },
        { platform: "Twitter", url: "#", icon: <Twitter size={18} /> },
        { platform: "Email", url: "#", icon: <Mail size={18} /> }
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 backdrop-blur-sm text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-cyan-400/30">
            <span>👥</span>
            <span>Our Team</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Expert Team</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of talented professionals brings together years of experience, 
            creativity, and technical expertise to deliver exceptional results for your business.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-700/50 hover:border-cyan-400/50"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-cyan-400/30 group-hover:ring-cyan-400/50 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Online Status Indicator */}
                <div className="absolute bottom-0 right-1/2 transform translate-x-12 translate-y-1">
                  <div className="w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-md"></div>
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-cyan-400 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                {member.socialLinks.map((social, socialIndex) => (
                  <a
                    key={socialIndex}
                    href={social.url}
                    className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center text-gray-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={`${member.name} ${social.platform}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-700/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals to join our growing team. 
              Check out our open positions and become part of our success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                View Open Positions
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Contact HR
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurTeamSection;
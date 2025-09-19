import React from 'react';
import Link from 'next/link';
import { Mail, MessageCircle } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: 'Menu',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Products', href: '/products' },
        { label: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'FAQ', href: '/faq' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' }
      ]
    },
    {
      title: 'Social Media',
      links: [
        { label: 'LinkedIn', href: 'https://linkedin.com' },
        { label: 'Twitter', href: 'https://twitter.com' },
        { label: 'Instagram', href: 'https://instagram.com' },
        { label: 'Dribbble', href: 'https://dribbble.com' },
        { label: 'Behance', href: 'https://behance.net' }
      ]
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">IT</span>
                </div>
                <h3 className="text-xl font-bold text-white">IT Flow</h3>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 mb-6">
                <p className="text-white font-medium mb-3 leading-relaxed">
                  Let's discuss and bring your vision to life.
                </p>
                <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300 flex items-center space-x-2">
                  <MessageCircle size={16} />
                  <span>Let's Talk</span>
                </button>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                We're a team of experienced designers, developers, and marketers, passionate about delivering digital solutions that make a difference.
              </p>
              
              <div className="flex items-center space-x-2 text-cyan-400">
                <Mail size={16} />
                <a href="mailto:info@itflow.com" className="text-sm hover:text-cyan-300 transition-colors">
                  ITFlow@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm block py-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              Copyright © {currentYear} by IT Flow. All rights reserved.
            </p>
            
            {/* Additional Links */}
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
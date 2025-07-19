import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    
  ];

  return (
    <footer className="bg-transparent text-white py-12">
      <div className="container-max">
        <div className="text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold gradient-text mb-6"
          >
            Akanksha Job
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-all duration-200 text-gray-400 hover:text-beige-400"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            <p className="flex items-center justify-center gap-2">
              © {new Date().getFullYear()} AJ. Made with 
              <Heart size={16} className="text-red-500 animate-pulse" /> 
              and React
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
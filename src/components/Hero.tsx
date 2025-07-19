import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { PortfolioContext } from '../App';

const Hero: React.FC = () => {
  const { name, headline, tagline, socials } = useContext(PortfolioContext);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
      <div className="container-max section-padding relative z-10 flex flex-col items-center justify-center text-center">
        {/* Main Title: User's Name Only */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white mb-6"
        >
          Akanksha Job
        </motion.h1>
        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-8"
        >
          {headline}
        </motion.h2>
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {tagline}
        </motion.p>
        {/* CTA Buttons (optional) */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="flex items-center gap-2 px-8 py-4 bg-beige-400 hover:bg-beige-500 text-gray-900 font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              Get In Touch
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf" // Replace with actual path to your CV
              download
              className="flex items-center gap-2 px-8 py-4 border-2 border-beige-400 text-beige-700 dark:text-beige-400 hover:bg-beige-400 hover:text-gray-900 font-semibold rounded-lg transition-all duration-200"
            >
              <Download size={20} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={() => scrollToSection('#about')}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-full bg-white/20 dark:bg-dark-800/20 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-dark-800/30 transition-colors"
            >
              <ChevronDown size={24} className="text-gray-600 dark:text-gray-400" />
            </motion.button>
          </motion.div>
      </div>
    </section>
  );
};

export default Hero;

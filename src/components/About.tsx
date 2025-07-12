import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Mail, Github, Linkedin } from 'lucide-react';
import { PortfolioContext } from '../App';

const About: React.FC = () => {
  const { name, about, socials } = useContext(PortfolioContext);

  const personalInfo = [
    { icon: <User size={20} />, label: 'Name', value: name },
    { icon: <MapPin size={20} />, label: 'Location', value: 'India' },
    { icon: <Calendar size={20} />, label: 'Experience', value: 'Learning-based, Project-focused' },
    { icon: <Mail size={20} />, label: 'Email', value: socials.email },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: socials.github, label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: socials.linkedIn, label: 'LinkedIn' },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me better and understand what drives my passion for technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-dark-700 flex items-center justify-center">
                  <User size={120} className="text-gray-400 dark:text-gray-500" />
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
              <div className="space-y-3">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-primary-600 dark:text-primary-400">
                      {info.icon}
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 font-medium">
                      {info.label}:
                    </span>
                    <span className="text-gray-900 dark:text-gray-100">
                      {info.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white dark:bg-dark-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-dark-900 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">My Story</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>{about}</p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  3+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Cloud Projects
                </div>
              </div>
              <div className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  5+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Technologies Explored
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

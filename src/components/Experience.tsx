import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'CodeBridge',
      company: 'Personal Project',
      location: 'Remote',
      period: '2024',
      description: 'Built a real-time collaborative coding platform with session management and live editing using React, Node.js, and WebSockets.',
      technologies: ['React.js', 'Node.js', 'Socket.IO', 'MySQL'],
      achievements: [
        'Enabled multi-user code collaboration and chat using WebSockets',
        'Designed modular backend and integrated CodeMirror editor'
      ]
    },
    {
      id: 2,
      title: 'LocalPal',
      company: 'Personal Project',
      location: 'Pune, Akurdi-Ravet Area',
      period: '2024',
      description: 'Developed a location-aware guide for tourists with emergency info, reviews, and filters, focused on the Akurdi and Ravet regions in Pune.',
      technologies: ['Django', 'MongoDB', 'Google Maps API'],
      achievements: [
        'Integrated Google Maps API for location-based services tailored to the Pune area',
        'Responsive frontend using HTML, CSS, JavaScript'
      ]
    },
    {
      id: 3,
      title: 'Rev-Up',
      company: 'Personal Project',
      location: 'Remote',
      period: '2023',
      description: 'Designed and developed an e-commerce frontend for an energy drink brand.',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL'],
      achievements: [
        'Implemented cart, checkout, and product listing system',
        'Built admin dashboard for order and inventory management'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Project <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hands-on technical projects demonstrating real-world skills
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-blue-500"></div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-900 shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Briefcase size={16} />
                            {project.company}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            {project.location}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 font-medium">
                        <Calendar size={16} />
                        {project.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <ExternalLink size={20} />
            Download Full Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

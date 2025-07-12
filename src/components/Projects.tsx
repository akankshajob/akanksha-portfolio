import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Code, Globe, Smartphone } from 'lucide-react';
import { PortfolioContext } from '../App';

interface CategoryFilter {
  id: string;
  label: string;
}

/**
 * A tiny helper to derive a broad category from the tech stack.
 * If you add an explicit `category` in portfolioData later, you can replace this.
 */
const deriveCategory = (tech: string[]): string => {
  if (tech.some((t) => ['React Native', 'Expo'].includes(t))) return 'mobile';
  if (tech.some((t) => ['FastAPI', 'Python', 'LLMs'].includes(t))) return 'ai';
  if (tech.some((t) => ['Node.js', 'Express', 'Django'].includes(t))) return 'fullstack';
  return 'web';
};

const categoryIcon = (category: string) => {
  switch (category) {
    case 'ai':
      return <Globe size={20} />;
    case 'mobile':
      return <Smartphone size={20} />;
    case 'fullstack':
      return <Code size={20} />;
    default:
      return <Code size={20} />;
  }
};

const Projects: React.FC = () => {
  const { projects } = useContext(PortfolioContext);

  // attach category on the fly
  const enrichedProjects = projects.map((p) => ({ ...p, category: deriveCategory(p.tech) }));

  const filters: CategoryFilter[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ai', label: 'AI / ML' },
    { id: 'mobile', label: 'Mobile' },
  ];

  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? enrichedProjects
      : enrichedProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A snapshot of the work I’m proudest of — spanning AI, full‑stack web, and mobile.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-900 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-dark-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Cover */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-dark-700 dark:to-dark-600 flex items-center justify-center">
                <div className="text-6xl text-primary-300 dark:text-primary-600">
                  {categoryIcon(project.category)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {categoryIcon(project.category)}
                  <span className="text-sm text-primary-600 dark:text-primary-400 font-medium uppercase">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
                    >
                      <Eye size={16} />
                      Live
                    </motion.a>
                  )}
                  {project.repoUrl && (
                    <motion.a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-dark-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700 rounded-lg transition-colors duration-200"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/akanksha-job"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Github size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

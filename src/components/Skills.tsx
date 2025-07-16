import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Palette, Smartphone, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={24} />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Bootstrap', level: 80 },
      ]
    },
    {
      title: 'Backend & Database',
      icon: <Database size={24} />,
      skills: [

        { name: 'Python', level: 85 },
        { name: 'Django', level: 78 },
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 85 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud size={24} />,
      skills: [
        { name: 'GCP', level: 70 },
        { name: 'AWS', level: 30 },
        { name: 'Docker', level: 60 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'CI/CD Basics', level: 65 },
      ]
    },
    {
      title: 'Mobile & Design',
      icon: <Smartphone size={24} />,
      skills: [
        { name: 'Android (Java)', level: 60 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Figma', level: 70 },
      ]
    },
    {
      title: 'Other Tools & APIs',
      icon: <Globe size={24} />,
      skills: [
        { name: 'REST APIs', level: 85 },
        { name: 'Render', level: 80 },
        { name: 'Firebase', level: 70 },
        { name: 'Postman', level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A snapshot of the technologies I work with across the stack.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary-600 dark:text-primary-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-blue-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

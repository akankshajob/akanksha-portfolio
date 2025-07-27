import React, { useState, useEffect, createContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DominoBackground from './components/DominoBackground';
import DominoBackground3D from './components/DominoBackground3D';
import DarkVeil from './components/DarkVeil';

/**
 * ---------------------------------------------------------
 * 💼  Akanksha Job — Portfolio Data
 * Centralised object so all sections pull from the same source.
 * Components can either consume the context or accept props.
 * ---------------------------------------------------------
 */
export interface SocialLinks {
  email: string;
  linkedIn: string;
  github: string;
  twitter?: string;
}

export interface Project {
  title: string;
  tech: string[];
  description: string;
  repoUrl?: string;
  liveUrl?: string;
}

export interface Work {
  role: string;
  company: string;
  period: string; // e.g. "Jan 2024 – Present"
  description: string;
  tech: string[];
}

export interface PortfolioData {
  name: string;
  headline: string;
  tagline: string;
  about: string;
  skills: string[];
  projects: Project[];
  experience: Work[];
  socials: SocialLinks;
}

export const portfolioData: PortfolioData = {
  /** CORE IDENTITY */
  name: 'Akanksha Job',
  headline: 'Python Developer & Cloud / Data Engineer',
  tagline: 'Turning data into impactful decisions',

  /** ABOUT */
  about:
    "I'm an enthusiastic Python developer and cloud‑data engineering aspirant with hands‑on experience in Django, MongoDB, BigQuery, and MySQL. I love building data‑driven products and am currently preparing for the AWS Cloud Practitioner certification.",

  /** SKILLS */
  skills: [
    'Python',
    'SQL',
    'Django',
    'MongoDB',
    'MySQL',
    'BigQuery',
    'AWS (Learning)',
    'GCP',
    'HTML/CSS',
    'JavaScript',
    'React',
    'Git & GitHub',
    'Android (Java)',
  ],

  /** PROJECTS */
  projects: [
    {
      title: 'Fit-Track - BuddyBliss',
      tech: ['Python', 'LLMs', 'FastAPI', 'PostgreSQL'],
      description:
        'AI‑powered coach recommending personalised mental & physical wellness routines using LLMs and vector search.',
      repoUrl: 'https://github.com/akankshajob/Fit-Track',
      liveUrl: '',
    },
    {
      title: 'Code Bridge – Real-Time Collaborative Coding',
      tech: ['React', 'Node.js', 'Express.js', 'Socket.IO', 'MongoDB'],
      description:
        'A real-time collaborative coding platform that allows multiple users to write and edit code simultaneously with live updates, chat integration, and session sharing.',
      repoUrl: 'https://github.com/akankshajob/codebridge',
    },
    {
      title: 'LocalPal – Explore Nearby Places Easily',
      tech: ['Django', 'HTML5', 'CSS3', 'Bootstrap', 'SQLite','Google Maps API'],
      description:
        'A web-based community platform that helps users discover local cafes, accommodations, clinics, and attractions with category filters and user feedback.',
      repoUrl: 'https://github.com/akankshajob/LocalPal',
    },
  ],

  /** EXPERIENCE — placeholder for now */
  experience: [
    {
      role: 'Student Developer',
      company: 'Personal & Academic Projects',
      period: '2023 – Present',
      description:
        'Built multiple cloud‑ready applications; collaborated with peers; presented demos to faculty and online communities.',
      tech: ['Python', 'Django', 'GCP', 'BigQuery', 'React'],
    },
  ],

  /** CONTACT */
  socials: {
    email: 'akankshajob7@gmail.com',
    linkedIn: 'https://linkedin.com/in/akanksha-job-992a34251',
    github: 'https://github.com/akankshajob',
  },
};

/**
 * React context so nested components can access the data without prop‑drilling.
 */
export const PortfolioContext = createContext<PortfolioData>(portfolioData);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // initial theme detection
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
    }
  }, []);

  // persist & apply theme
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* DarkVeil background */}
      <div style={{ width: '100vw', height: '100vh', position: 'fixed', inset: 0, zIndex: 0 }}>
        <DarkVeil noiseIntensity={0.2} scanlineIntensity={0.2} warpAmount={0.1} />
      </div>
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          minHeight: '100vh',
          background: 'transparent',
          color: '#fff',
          overflowX: 'hidden',
        }}
      >
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

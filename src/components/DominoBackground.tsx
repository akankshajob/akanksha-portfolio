import React from 'react';
import { motion } from 'framer-motion';

const dominoCount = 12; // Number of dominoes

const DominoBackground: React.FC = () => {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      background: '#000',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: '100vh',
        width: '100vw',
      }}>
        {Array.from({ length: dominoCount }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ rotate: 0, y: 0 }}
            whileInView={{ rotate: 90, y: 40 }}
            transition={{
              delay: i * 0.15,
              duration: 0.6,
              type: 'spring',
              stiffness: 100,
            }}
            style={{
              width: 24,
              height: 80,
              margin: '0 8px',
              background: '#fff',
              borderRadius: 6,
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
              opacity: 0.7,
            }}
            viewport={{ once: true, amount: 0.2 }}
          />
        ))}
      </div>
      {/* Matte overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.7)',
        zIndex: 1,
      }} />
    </div>
  );
};

export default DominoBackground; 